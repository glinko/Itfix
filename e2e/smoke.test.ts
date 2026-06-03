import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/ITfix/i);
});

test('services page loads', async ({ page }) => {
  await page.goto('http://localhost:3000/services');
  await expect(page.locator('h1, h2')).toContainText(/service/i, { timeout: 5000 });
});

test('contact page loads', async ({ page }) => {
  await page.goto('http://localhost:3000/contact');
  const form = page.locator('form');
  await expect(form).toBeVisible({ timeout: 5000 });
});
