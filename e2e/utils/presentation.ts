import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Browser, BrowserContext, Page } from '@playwright/test';

export type Persona = {
    key: string;
    email: string;
    password: string;
    role?: string;
};

export type PresentationStep = {
    id: string;
    label: string;
    file: string;
};

export type PresentationArtifacts = {
    slug: string;
    rootDir: string;
    screenshotsDir: string;
    videoDir: string;
    context: BrowserContext;
    steps: PresentationStep[];
};

export const SEEDED_USERS: Record<string, Persona> = {
    visitor: {
        key: 'visitor',
        email: 'sam@example.com',
        password: '',
        role: 'public visitor',
    },
};

const DEFAULT_BASE_URL = 'http://localhost:4321';

export function getBaseURL(): string {
    return process.env.BASE_URL ?? DEFAULT_BASE_URL;
}

export async function createPresentationContext(
    browser: Browser,
    slug: string,
): Promise<PresentationArtifacts> {
    const e2eRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
    const rootDir = join(e2eRoot, slug, 'artifacts');
    const screenshotsDir = join(rootDir, 'screenshots');
    const videoDir = join(rootDir, 'video');

    await mkdir(screenshotsDir, { recursive: true });
    await mkdir(videoDir, { recursive: true });

    const context = await browser.newContext({
        baseURL: getBaseURL(),
        recordVideo: { dir: videoDir, size: { width: 1280, height: 720 } },
    });

    return {
        slug,
        rootDir,
        screenshotsDir,
        videoDir,
        context,
        steps: [],
    };
}

export async function captureStep(
    page: Page,
    artifacts: PresentationArtifacts,
    id: string,
    label: string,
): Promise<void> {
    const file = `${id}.png`;
    await page.screenshot({
        path: join(artifacts.screenshotsDir, file),
        fullPage: true,
    });
    artifacts.steps.push({ id, label, file });
}

function escapeHtml(value: string): string {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

export async function finalizePresentation(
    artifacts: PresentationArtifacts,
    input: {
        title: string;
        persona: Persona;
        stories: string[];
        passed: boolean;
        error?: string;
    },
): Promise<{ htmlPath: string; resultsPath: string }> {
    const htmlPath = join(artifacts.rootDir, 'presentation.html');
    const resultsPath = join(artifacts.rootDir, 'results.json');

    const statusClass = input.passed ? 'pass' : 'fail';
    const statusLabel = input.passed ? 'PASSED' : 'FAILED';

    const storiesHtml = input.stories
        .map(
            (story, index) =>
                `<li><strong>Story ${index + 1}:</strong> ${escapeHtml(story)}</li>`,
        )
        .join('\n');

    const stepsHtml = artifacts.steps
        .map(
            (step) => `
        <figure class="step">
          <img src="screenshots/${step.file}" alt="${escapeHtml(step.label)}" loading="lazy" />
          <figcaption><span class="step-id">${escapeHtml(step.id)}</span> ${escapeHtml(step.label)}</figcaption>
        </figure>`,
        )
        .join('\n');

    const errorHtml = input.error
        ? `<section class="error"><h2>Error</h2><pre>${escapeHtml(input.error)}</pre></section>`
        : '';

    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(input.title)} — E2E presentation</title>
  <style>
    :root { color-scheme: light dark; font-family: system-ui, sans-serif; }
    body { margin: 0; padding: 2rem; background: #111; color: #f5f5f5; }
    h1, h2 { margin-top: 0; }
    .meta { display: grid; gap: 0.5rem; margin-bottom: 2rem; }
    .status { display: inline-block; padding: 0.35rem 0.75rem; border-radius: 999px; font-weight: 700; }
    .status.pass { background: #1b5e20; color: #fff; }
    .status.fail { background: #b71c1c; color: #fff; }
    .steps { display: grid; gap: 2rem; }
    .step { margin: 0; background: #1a1a1a; border-radius: 12px; overflow: hidden; }
    .step img { display: block; width: 100%; height: auto; }
    .step figcaption { padding: 1rem; }
    .step-id { opacity: 0.7; font-family: ui-monospace, monospace; margin-right: 0.5rem; }
    .error pre { white-space: pre-wrap; background: #2a1515; padding: 1rem; border-radius: 8px; }
    ul { line-height: 1.6; }
  </style>
</head>
<body>
  <h1>${escapeHtml(input.title)}</h1>
  <div class="meta">
    <p><span class="status ${statusClass}">${statusLabel}</span></p>
    <p><strong>Persona:</strong> ${escapeHtml(input.persona.role ?? input.persona.key)} (${escapeHtml(input.persona.email)})</p>
    <p><strong>Base URL:</strong> ${escapeHtml(getBaseURL())}</p>
  </div>
  <section>
    <h2>Stories</h2>
    <ol>${storiesHtml}</ol>
  </section>
  ${errorHtml}
  <section>
    <h2>Captured steps</h2>
    <div class="steps">${stepsHtml}</div>
  </section>
</body>
</html>`;

    await writeFile(htmlPath, html);
    await writeFile(
        resultsPath,
        JSON.stringify(
            {
                ...input,
                baseURL: getBaseURL(),
                steps: artifacts.steps,
            },
            null,
            2,
        ),
    );
    await artifacts.context.close();

    return { htmlPath, resultsPath };
}
