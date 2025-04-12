import { test, expect } from '@playwright/test';

test('should render full page', async ({ page }) => {
  await page.goto('/playwright-dev'); // copy of https://playwright.dev

  await expect(page).toHaveScreenshot({ fullPage: true })
});
