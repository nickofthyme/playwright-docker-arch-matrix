import { test, expect } from '@playwright/test';

test('should render full page', async ({ page }) => {
  await page.goto('/simple-react-app');

  const buffer = await page.screenshot({ fullPage: true })

  await expect(buffer).toMatchSnapshot()
});

test.describe('hover', () => {
  test('should render with hover affect', async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByAltText('Vite logo').hover();

    await expect(page).toHaveScreenshot({ fullPage: true })
  });

  test('should render with hover affect - wait 1 second', async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByAltText('Vite logo').hover();

    await page.waitForTimeout(1000); // wait 1 second to stabilize

    await expect(page).toHaveScreenshot({ fullPage: true })
  });
})

test.describe('click/focus', () => {
  test('should render with click/focus affect', async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByRole('button').click();

    await expect(page).toHaveScreenshot({ fullPage: true })
  });

  test('should render with click/focus affect - wait 1 second', async ({ page }) => {
    await page.goto('/simple-react-app');

    await page.getByRole('button').click();

    await page.waitForTimeout(1000); // wait 1 second to stabilize

    await expect(page).toHaveScreenshot({ fullPage: true })
  });
})
