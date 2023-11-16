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
		given('the user is on the homepage', async () => {
			await driver.get('http://localhost:3000/characters/eu/nekrosh/petrice');
			// Wait for a specific element on the homepage to ensure it's fully loaded
			await driver.wait(
				until.elementLocated(
					By.xpath('/html/body/main/div[1]/div[1]/div/a/div/h1')
				),
				10000
			); // Adjust the timeout as needed
		});

		when('the user clicks on the specified element', async () => {
			const element = await driver.findElement(
				By.xpath('/html/body/main/div[1]/div[1]/div/a/div/h1')
			);
			await driver.wait(until.elementIsVisible(element), 10000); // Wait for the element to be visible before clicking
			await element.click();
		});

		then('the user should see the resulting page', async () => {
			const videoElement = await driver.findElement(
				By.xpath(
					'/html/body/main/div[1]/div[2]/div/section[1]/div[2]/div[1]/video'
				)
			);
			await driver.wait(until.elementIsVisible(videoElement), 10000); // Wait for the video element to be visible
			const isDisplayed = await videoElement.isDisplayed();
			expect(isDisplayed).toBe(true);
		});
	});
});
