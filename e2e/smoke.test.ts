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

test('contact form submit does not crash', async ({ page }) => {
  await page.goto('/contact');
  const nameInput = page.locator('input[name="name"], input[type="text"]').first();
  const emailInput = page.locator('input[name="email"], input[type="email"]').first();
  const messageInput = page.locator('textarea').first();
  const submitBtn = page.locator('button[type="submit"], input[type="submit"]').first();

  await nameInput.fill('Test User');
  await emailInput.fill('test@example.com');
  await messageInput.fill('E2E test message');
  await submitBtn.click();

  // Should not navigate away or throw — page should still be loadable
  await expect(page).toHaveTitle(/WiFix|ITfix/i, { timeout: 10000 });
});
