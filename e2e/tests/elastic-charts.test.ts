import { test, expect } from '@playwright/test';
import { testTags } from '../constants';

test('should render chart example', { tag: testTags }, async ({ page }) => {
  await page.goto('/simple-react-app/examples/chart');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});

test('should render chart example with hover effect', { tag: testTags }, async ({ page, browser }) => {
  await page.goto('/simple-react-app/examples/chart');

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await page.mouse.move(outletClip.x + 420, outletClip.y + outletClip.height / 2);

  await expect(page).toHaveScreenshot({ fullPage: true, clip: outletClip })
});
