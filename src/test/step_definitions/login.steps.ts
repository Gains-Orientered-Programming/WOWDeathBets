import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('src/test/features/login.feature');

defineFeature(feature, (test) => {
	let driver: WebDriver;

	beforeAll(async () => {
		const chromeOptions = new chrome.Options();
		driver = await new Builder()
			.forBrowser('chrome')
			.setChromeOptions(chromeOptions)
			.build();
	});

	afterAll(async () => {
		await driver.quit();
	});

	test('Successful login', ({ given, when, then }) => {
		given('the user clicks on login', async () => {
			await driver.get('http://localhost:3000');
			const element = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[1]/div/div/ul/a/li')
			);

			await element.click();
			await driver.wait(until.urlContains('login'), 5000);
		});

		when('the user fills in their email and password', async () => {
			const emailInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[1]/div/input')
			);
			await driver.wait(until.elementIsVisible(emailInput), 5000);
			await emailInput.sendKeys('proxy-post_man_DO@example.com');

			const passwordInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[2]/div/input')
			);
			await driver.wait(until.elementIsVisible(passwordInput), 5000);
			await passwordInput.sendKeys('post-proxy-PassDO');
		});

		when('the user clicks on the login button', async () => {
			const loginButton = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[3]/button')
			);
			await driver.wait(until.elementIsVisible(loginButton), 5000);
			await loginButton.click();
		});

		then('the user should be successfully logged in', async () => {
			const element = By.xpath(
				'/html/body/main/div[1]/div[1]/div/div/ul/div/a[2]/li'
			);
			await driver.wait(until.elementLocated(element));
			const username = await driver.findElement(element);
			await driver.wait(until.elementIsVisible(username), 5000);
			expect(await username.getText()).toBe('PROXY-digital-ocean-postman_per');

			// Check if there is a JWT in the local storage
			const jwt = await driver.executeScript(
				'return localStorage.getItem("jwt");'
			);
			expect(jwt).not.toBeNull();
		});
	}, 20000);
});
