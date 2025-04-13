import { test, expect } from '@playwright/test';
import { testTags } from '../../constants';

test('should render text example', { tag: testTags }, async ({ page, browser }) => {
  await page.goto('/simple-react-app/examples/text');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});

test('should render canvas example', { tag: testTags }, async ({ page }) => {
  await page.goto('/simple-react-app/examples/canvas');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});

test('should render icons example', { tag: testTags }, async ({ page }) => {
  await page.goto('/simple-react-app/examples/icons');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});

test('should render image example', { tag: testTags }, async ({ page }) => {
  await page.goto('/simple-react-app/examples/image');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});
