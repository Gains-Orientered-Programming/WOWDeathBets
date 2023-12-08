import { loadFeature, defineFeature } from 'jest-cucumber';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const feature = loadFeature('src/test/features/homepage.feature');

defineFeature(feature, (test) => {
	let driver: WebDriver;

	beforeAll(async () => {
		const chromeOptions = new chrome.Options();
		// chromeOptions.addArguments('--headless'); // Run Chrome in headless mode
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

	test('Clicking on the homepage element', ({ given, when, then }) => {
		given('the user is on a character page', async () => {
			await driver.get('http://localhost:3000/characters/eu/nekrosh/petrice');
			await driver.wait(until.urlContains('characters'), 5000);
		});

		when('the user clicks on the specified element', async () => {
			const element = await driver.findElement(
				By.xpath('/html/body/main/div[1]/div[1]/div/a/div/h1')
			);
			await driver.wait(until.elementIsVisible(element), 5000);
			await element.click();
			const videoElement = By.xpath(
				'/html/body/main/div[1]/div[2]/div/section[1]/div[1]/div/video'
			);
			await driver.wait(until.elementLocated(videoElement), 10000); // Increase timeout here
		});

		then('the user should be navigated to the home page', async () => {
			const videoElement = await driver.findElement(
				By.xpath(
					'/html/body/main/div[1]/div[2]/div/section[1]/div[1]/div/video'
				)
			);
			expect(await videoElement.isDisplayed()).toBe(true);
		});
	}, 20000); // Increase overall test timeout here
});
