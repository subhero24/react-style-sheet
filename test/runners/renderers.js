import Buckler from 'buckler';
import Puppeteer from 'puppeteer';

const snapshot = Buckler({ dir: 'renderers' });

const run = async () => {
	const browser = await Puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	await snapshot('match-id.png', async () => {
		await page.goto('http://localhost:1234/match-id');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-class.png', async () => {
		await page.goto('http://localhost:1234/match-class');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-attributes.png', async () => {
		await page.goto('http://localhost:1234/match-attributes');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('with-specificity-ascending.png', async () => {
		await page.goto('http://localhost:1234/with-specificity-ascending');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('with-specificity-descending.png', async () => {
		await page.goto('http://localhost:1234/with-specificity-descending');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('with-multiple-stylesheets.png', async () => {
		await page.goto('http://localhost:1234/with-multiple-stylesheets');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-nth-child-even.png', async () => {
		await page.goto('http://localhost:1234/match-nth-child-even');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-nth-child-odd.png', async () => {
		await page.goto('http://localhost:1234/match-nth-child-odd');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-nth-child-formula.png', async () => {
		await page.goto('http://localhost:1234/match-nth-child-formula');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-component.png', async () => {
		await page.goto('http://localhost:1234/match-component');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('with-inline-style.png', async () => {
		await page.goto('http://localhost:1234/with-inline-style');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('with-inline-style-component.png', async () => {
		await page.goto('http://localhost:1234/with-inline-style-component');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('with-fragment.png', async () => {
		await page.goto('http://localhost:1234/with-fragment');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-tag.png', async () => {
		await page.goto('http://localhost:1234/match-tag');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('mismatch-tag.png', async () => {
		await page.goto('http://localhost:1234/mismatch-tag');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('mismatch-tag-with-class.png', async () => {
		await page.goto('http://localhost:1234/mismatch-tag-with-class');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-child.png', async () => {
		await page.goto('http://localhost:1234/match-child');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-tag-in-text.png', async () => {
		await page.goto('http://localhost:1234/match-tag-in-text');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-nested-child.png', async () => {
		await page.goto('http://localhost:1234/match-nested-child');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-deeply-nested-child.png', async () => {
		await page.goto('http://localhost:1234/match-deeply-nested-child');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-sibling.png', async () => {
		await page.goto('http://localhost:1234/match-sibling');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-direct-child.png', async () => {
		await page.goto('http://localhost:1234/match-direct-child');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-adjacent.png', async () => {
		await page.goto('http://localhost:1234/match-adjacent');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-child-without-parent.png', async () => {
		await page.goto('http://localhost:1234/match-child-without-parent');
		return await page.screenshot({ fullPage: true });
	});

	await snapshot('match-first-child.png', async () => {
		await page.goto('http://localhost:1234/match-first-child');
		return await page.screenshot({ fullPage: true });
	});

	await browser.close();
};

run();
