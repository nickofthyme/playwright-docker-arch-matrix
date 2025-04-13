import { test, expect } from '@playwright/test';

test('should render text example', async ({ page }) => {
  await page.goto('/simple-react-app/examples/text');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});

test('should render canvas example', async ({ page }) => {
  await page.goto('/simple-react-app/examples/canvas');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});

test('should render icons example', async ({ page }) => {
  await page.goto('/simple-react-app/examples/icons');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});

test('should render image example', async ({ page }) => {
  await page.goto('/simple-react-app/examples/image');

  // Need to wait for high-res image to finish loading
  const image = await page.getByRole('img');
  const imageSrc = await image.getAttribute("src");

  if (!imageSrc) throw new Error('no image found');

  const imageResponse = await page.waitForResponse(imageSrc);
  await imageResponse.finished();

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});
