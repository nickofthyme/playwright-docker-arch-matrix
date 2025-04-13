import { defineConfig, devices } from '@playwright/test';
import { baseURL } from './demo-sites/constants';

const CI = process.env.CI === 'true';

export default defineConfig({
  testDir: './e2e/tests',
  snapshotDir: 'e2e/screenshots',
  outputDir: 'e2e/test-failures',

  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 1,
  timeout: 10 * 1000,
  preserveOutput: 'failures-only',
  workers: CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'on-failure', outputFolder: 'e2e/reports/html' }],
    ['json', { outputFile: 'e2e/reports/json/report.json' }],
  ],

  use: {
    headless: true,
    locale: 'en-us',
    viewport: { width: 785, height: 1000 },
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'off', // already testing screenshots
    video: 'retain-on-failure',
  },

  expect: {
    toHaveScreenshot: {
      threshold: 0,
      maxDiffPixelRatio: 0,
      maxDiffPixels: 0,
      animations: "disabled",
      pathTemplate: '{snapshotDir}/{testFilePath}/{testName}-{projectName}-{platform}{ext}',
    },
  },

  projects: [
    {
      name: 'chromium',
      // testMatch: /.+?examples.+?/,
      use: {
        ...devices['Desktop Chrome']
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: CI ? {
    command: 'npm start',
    url: baseURL,
    reuseExistingServer: false,
  } : undefined,
});
