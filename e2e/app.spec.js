import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('http://localhost:5173');
  // 初始顯示 0
  await expect(page.locator('span')).toHaveText('0')

  // 點一下按鈕
  await page.click('button')

  // 期望文字變 1
  await expect(page.locator('span')).toHaveText('1')
})
