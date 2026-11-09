import { test, expect } from '@playwright/test';

test('navigate to Client Work through the Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services', exact: true }).first().click();

  await page
    .getByRole('link', { name: 'Explore Our Client Work', exact: true })
    .first()
    .click();

  await expect(
    page.getByRole('heading', { name: 'Client Work', exact: true })
  ).toBeVisible();
});
