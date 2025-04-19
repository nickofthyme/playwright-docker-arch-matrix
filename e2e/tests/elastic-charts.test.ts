import { test, expect } from '@playwright/test';
import { testTags } from '../constants';

const chartWaitSelector = '.echChartStatus[data-ech-render-complete=true]';

test('should render chart example', { tag: testTags }, async ({ page }) => {
  const viewport = page.viewportSize();

  if (viewport) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height * 2,
    });
  }

  await page.goto('/simple-react-app/examples/chart');

  await page.waitForSelector(chartWaitSelector, { state: 'attached' });

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await expect(page).toHaveScreenshot({ clip: outletClip })
});

test('should render chart example with hover effect', { tag: testTags }, async ({ page, browser }) => {
  const viewport = page.viewportSize();

  if (viewport) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height * 2,
    });
  }

  await page.goto('/simple-react-app/examples/chart');

  await page.waitForSelector(chartWaitSelector, { state: 'attached' });

  const outletEl = await page.locator('.outlet')
  const outletClip = await outletEl.boundingBox()

  if (!outletClip) throw new Error('no outletClip found');

  await page.mouse.move(outletClip.x + 420, outletClip.y + outletClip.height / 2);

  await page.waitForSelector('.echTooltip', { state: 'visible' });

  await expect(page).toHaveScreenshot({ clip: outletClip })
});
