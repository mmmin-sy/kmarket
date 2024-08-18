import { test } from '@playwright/test';

test('Search test', async ({ page }) => {
	await page.goto('http://localhost:3001/');
	await page.getByRole('textbox').click();
	await page.getByRole('textbox').fill('김치');
	await page.getByRole('button', { name: 'search' }).click();
});