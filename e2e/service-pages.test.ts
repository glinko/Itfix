import { test, expect } from '@playwright/test';

const SERVICE_SLUGS = [
  'computer-repair',
  'windows-reinstall',
  'virus-removal',
  'wifi-setup',
  'networking',
  'security-cameras',
  'smart-home',
  'ethernet',
  'server-setup',
  'it-consulting',
];

test.describe('Service Detail Pages', () => {
  for (const slug of SERVICE_SLUGS) {
    test(`loads /en/services/${slug}`, async ({ page }) => {
      await page.goto(`/en/services/${slug}`);
      // Page should load with a title containing ITfix
      await expect(page).toHaveTitle(/ITfix/i, { timeout: 15000 });
      // Hero section should have an h1 heading
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible({ timeout: 15000 });
      // Should have a pricing section
      await expect(page.locator('text=/Starting price/')).toBeVisible({ timeout: 15000 });
    });
  }

  test('returns 404 for unknown service slug', async ({ page }) => {
    const response = await page.goto('/en/services/nonexistent-service');
    // Next.js 404 page should still have a valid response
    expect(response?.status()).toBe(404);
  });
});
