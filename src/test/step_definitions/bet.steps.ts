import { loadFeature, defineFeature } from 'jest-cucumber';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const feature = loadFeature('src/test/features/bettingform.feature');

defineFeature(feature, (test) => {
	let driver: WebDriver;

	beforeAll(async () => {
		const chromeOptions = new chrome.Options();
		chromeOptions.addArguments('--headless'); // Run Chrome in headless mode
		// chromeOptions.addArguments('--disable-gpu'); // Disable GPU hardware acceleration
		// chromeOptions.addArguments('--window-size=1920,1080'); // Specify window size

		driver = await new Builder()
			.forBrowser('chrome')
			.setChromeOptions(chromeOptions)
			.build();
	});

	afterAll(async () => {
		await driver.quit();
	});

	test('Submitting the form on the bet page', ({ given, when, then }) => {
		given('the user is on the betting page', async () => {
			await driver.get(
				'http://localhost:3000/characters/eu/nekrosh/petrice/bet'
			);
			await driver.wait(until.urlContains('characters'));
		});

		when(
			'the user fill out the form and clicks on the button to create a bet',
			async () => {
				const input = await driver.findElement(
					By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[4]/input')
				);
				const button = await driver.findElement(
					By.xpath('/html/body/main/div[1]/div[2]/div/div/form/button')
				);
				await driver.wait(until.elementIsVisible(input));
				await input.sendKeys('1000');
				await driver.wait(until.elementIsVisible(button));
				await button.click();
			}
		);

		then('the user should create a bet', async () => {
			const element = By.xpath('/html/body/div/ol/li/div/div[1]');
			await driver.wait(until.elementLocated(element));
			const toast = await driver.findElement(element);
			await driver.wait(until.elementIsVisible(toast));
			expect(await toast.isDisplayed()).toBe(true);
		});
	}, 60000); // Increase overall test timeout here
});
