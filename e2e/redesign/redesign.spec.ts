import { test, expect } from '@playwright/test';
import {
    captureStep,
    createPresentationContext,
    finalizePresentation,
} from '../utils/presentation';

const SLUG = 'redesign';
const PERSONA = {
    key: 'visitor',
    email: 'sam@example.com',
    password: '',
    role: 'public visitor',
};
const STORIES = [
    'Land on home — see "Sing. Dance. Act." hero, pill nav, Find your class + Summer camp CTAs',
    "Open What's on — announcements + key dates",
    'Open The Nest — hero "The Nest" + program cards + Register',
    'Open Summer camps — "Summer. Sorted." + Book + two camp cards',
    'Open Musicals — "The shows" + production cards + alumni chips',
    'Open About — "Theatre should be fun" + values + directors',
    'Footer: Become a VIP Pelican email field + Subscribe, Privacy link',
    'Mobile viewport: Menu opens and links work',
];

test.describe.configure({ mode: 'serial' });

test('redesign presentation', async ({ browser }) => {
    const artifacts = await createPresentationContext(browser, SLUG);
    const page = await artifacts.context.newPage();
    let passed = false;
    let testError: string | undefined;

    try {
        // Home
        await page.goto('/');
        await expect(
            page.getByRole('heading', { level: 1, name: /sing\. dance\. act/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('navigation', { name: 'Main' }),
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: /find your class/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: 'Summer camp 2027' }),
        ).toBeVisible();
        await captureStep(page, artifacts, '01-home', 'Home hero');

        // Nav to What's on
        await page
            .getByRole('navigation', { name: 'Main' })
            .getByRole('link', { name: "What's on" })
            .click();
        await expect(page).toHaveURL(/whats-on/);
        await expect(
            page.getByRole('heading', { name: /what's/i }),
        ).toBeVisible();
        await expect(page.getByText(/announcements/i).first()).toBeVisible();
        await expect(
            page.getByRole('heading', { name: /key dates/i }),
        ).toBeVisible();
        await captureStep(page, artifacts, '02-whats-on', "What's on");

        // The Nest
        await page
            .getByRole('navigation', { name: 'Main' })
            .getByRole('link', { name: 'The Nest' })
            .click();
        await expect(page).toHaveURL(/the-nest/);
        await expect(
            page.getByRole('heading', { name: /the nest/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('heading', { name: /music theatre academy/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: /register for term 3/i }).first(),
        ).toBeVisible();
        await captureStep(page, artifacts, '03-the-nest', 'The Nest');

        // Summer camps
        await page
            .getByRole('navigation', { name: 'Main' })
            .getByRole('link', { name: 'Summer camps' })
            .click();
        await expect(page).toHaveURL(/summer-camps/);
        await expect(
            page.getByRole('heading', { name: /summer/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: /book mtc/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('heading', { name: /music theatre camp/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('heading', { name: /spotlight/i }),
        ).toBeVisible();
        await captureStep(page, artifacts, '04-summer-camps', 'Summer camps');

        // Musicals
        await page
            .getByRole('navigation', { name: 'Main' })
            .getByRole('link', { name: 'Musicals' })
            .click();
        await expect(page).toHaveURL(/musicals/);
        await expect(
            page.getByRole('heading', { name: /shows/i }).first(),
        ).toBeVisible();
        await expect(
            page.getByRole('heading', { name: /every production/i }),
        ).toBeVisible();
        await expect(page.getByText(/west end/i).first()).toBeVisible();
        await captureStep(page, artifacts, '05-musicals', 'Musicals');

        // About
        await page
            .getByRole('navigation', { name: 'Main' })
            .getByRole('link', { name: 'About' })
            .click();
        await expect(page).toHaveURL(/about/);
        await expect(
            page.getByRole('heading', { name: /theatre should be fun/i }),
        ).toBeVisible();
        await expect(page.getByText(/fun first/i)).toBeVisible();
        await expect(
            page.getByRole('heading', { name: 'Jen Frith' }),
        ).toBeVisible();
        await captureStep(page, artifacts, '06-about', 'About');

        // Footer
        await expect(
            page.getByRole('heading', { name: /become a vip pelican/i }),
        ).toBeVisible();
        await expect(page.getByPlaceholder('you@email.com')).toBeVisible();
        await expect(
            page.getByRole('button', { name: /subscribe/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: 'Privacy' }),
        ).toBeVisible();
        await captureStep(page, artifacts, '07-footer', 'Footer');

        // Mobile menu
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');
        await page.getByLabel('Open menu').click();
        await expect(
            page.getByRole('link', { name: "What's on" }).first(),
        ).toBeVisible();
        await page.getByRole('link', { name: "What's on" }).first().click();
        await expect(page).toHaveURL(/whats-on/);
        await captureStep(page, artifacts, '08-mobile-menu', 'Mobile menu');

        passed = true;
    } catch (error) {
        testError = error instanceof Error ? error.message : String(error);
        throw error;
    } finally {
        await page.close();
        await finalizePresentation(artifacts, {
            title: SLUG,
            persona: PERSONA,
            stories: STORIES,
            passed: passed && !testError,
            error: testError,
        });
    }
});
