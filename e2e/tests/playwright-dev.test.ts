import { test, expect } from '@playwright/test';
import { testTags } from '../constants';

test('should render full page', { tag: testTags }, async ({ page }) => {
  await page.goto('/playwright-dev'); // copy of https://playwright.dev

  await expect(page).toHaveScreenshot({ fullPage: true })
});
