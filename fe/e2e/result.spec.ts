import { test } from '@playwright/test';

test('Search in result page', async ({ page }) => {
	await page.goto('http://localhost:3001/search/%EA%B9%80%EC%B9%98');

	await page.getByRole('textbox').click();
	await page.getByRole('textbox').fill('참치');
	await page.getByRole('textbox').press('Enter');

});