import { test, expect } from '@playwright/test';

test('navigate to Client Work through the Services menu', async ({ page }) => {
  await test.step('Open the EPAM website', async () => {
    await page.goto('https://www.epam.com/');
    await expect(page).toHaveTitle(/EPAM/i);
  });

  await test.step('Open the Services menu', async () => {
    const servicesLink = page.getByRole('link', {
      name: 'Services',
      exact: true,
    }).first();

    await expect(servicesLink).toBeVisible();
    await servicesLink.click();
  });

  await test.step('Open Explore Our Client Work', async () => {
    const clientWorkLink = page.getByRole('link', {
      name: 'Explore Our Client Work',
      exact: true,
    }).first();

    await expect(clientWorkLink).toBeVisible();
    await clientWorkLink.click();
  });

  await test.step('Verify the Client Work heading', async () => {
    await expect(
      page.getByRole('heading', {
        name: 'Client Work',
        exact: true,
      })
    ).toBeVisible();
  });
});
