import { defineConfig, devices, ReporterDescription } from '@playwright/test';
import { baseURL } from './demo-sites/constants';
import { reportOutputFile, pathTemplate, platform, comparator } from './e2e/constants';

const CI = process.env.CI === 'true';

const baseReporters: ReporterDescription[] = [
  ['list'],
  ['json', { outputFile: 'e2e/reports/json/report.json' }],
  ['html', { open: 'on-failure', outputFolder: 'e2e/reports/html' }],
]

export default defineConfig({
  testDir: './e2e/tests',
  snapshotDir: 'e2e/screenshots',
  outputDir: 'e2e/test-failures',

  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  timeout: 10 * 1000,
  preserveOutput: 'failures-only',
  workers: CI ? 1 : undefined,

  reporter: !CI ? baseReporters : [
    ...baseReporters,
    ['blob', { outputFile: CI ? reportOutputFile : 'e2e/reports/blob-report.zip' }],
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
      pathTemplate,
      ...(comparator ? {
        // adds experimental comparator
        _comparator: comparator,
      } : {})
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
       },
    },

    // This way we can run all projects without having to explicitly exclude webkit
    ...(platform === 'darwin' || platform === 'linux' ?
      [{
        name: 'webkit',
        use: {
          ...devices['Desktop Safari'],
        },
      }] : []
    ),
  ],

  /* Run your local dev server before starting the tests */
  webServer: CI ? {
    command: 'npm start',
    url: baseURL,
    reuseExistingServer: false,
  } : undefined,
});
