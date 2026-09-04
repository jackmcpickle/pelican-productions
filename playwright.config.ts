import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'e2e',
    timeout: 60_000,
    expect: {
        timeout: 10_000,
    },
    use: {
        baseURL: process.env.BASE_URL ?? 'http://localhost:4321',
        video: 'on',
        trace: 'on-first-retry',
    },
    reporter: [['list']],
    webServer: {
        command: 'pnpm dev',
        url: 'http://localhost:4321',
        reuseExistingServer: true,
        timeout: 120_000,
    },
});
