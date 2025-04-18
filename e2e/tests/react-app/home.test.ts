import { test, expect } from '@playwright/test';
import { testTags } from '../../constants';

test('should render full page', { tag: testTags }, async ({ page }) => {
  await page.goto('/simple-react-app');

  await expect(page).toHaveScreenshot({ fullPage: true })
});

test.describe('hover', () => {
  test('should render with hover affect', { tag: testTags }, async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByAltText('Vite logo').hover();

    await expect(page).toHaveScreenshot({ fullPage: true })
  });

  test('should render with hover affect - wait 1 second', { tag: testTags }, async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByAltText('Vite logo').hover();

    await page.waitForTimeout(1000); // wait 1 second to stabilize

    await expect(page).toHaveScreenshot({ fullPage: true })
  });
})

test.describe('click/focus', () => {
  test('should render with click/focus affect', { tag: testTags }, async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByRole('button').click();

    await expect(page).toHaveScreenshot({ fullPage: true })
  });

  test('should render with click/focus affect - wait 1 second', { tag: testTags }, async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByRole('button').click();

    await page.waitForTimeout(1000); // wait 1 second to stabilize

    await expect(page).toHaveScreenshot({ fullPage: true })
  });
})
