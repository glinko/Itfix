import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/WiFix|ITfix/i);
});

test('services page loads', async ({ page }) => {
  await page.goto('/services');
  await expect(page.locator('h1').first()).toContainText(/service/i, { timeout: 10000 });
});

test('contact page loads', async ({ page }) => {
  await page.goto('/contact');
  const form = page.locator('form');
  await expect(form).toBeVisible({ timeout: 10000 });
});
