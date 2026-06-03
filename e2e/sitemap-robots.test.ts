import { test, expect } from '@playwright/test';

test.describe('Sitemap and Robots', () => {
  test('sitemap.xml exists and returns XML', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.ok()).toBeTruthy();
    const text = await response.text();
    expect(text).toContain('<?xml');
    expect(text).toContain('<urlset');
  });

  test('robots.txt exists and contains sitemap reference', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.ok()).toBeTruthy();
    const text = await response.text();
    expect(text).toContain('User-agent');
    expect(text.toLowerCase()).toContain('sitemap');
  });
});
