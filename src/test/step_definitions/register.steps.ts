import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { loadFeature, defineFeature } from 'jest-cucumber';
import axios from 'axios';

const feature = loadFeature('src/test/features/register.feature');

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
		//TODO: Delete user from database
		const response = await axios.delete(
			`https://api-gateway-nyxm4.ondigitalocean.app/user-service/user/by-username/regi_test_user`
		);
		if (!response) console.error('User not found');
		await driver.quit();
	});

	test('Successful register', ({ given, when, then }) => {
		given('the user clicks on register', async () => {
			await driver.get('http://localhost:3000/login');
			const registerButton = driver.findElement(
				By.xpath(
					'/html/body/main/div[1]/div[2]/div/div/form/div[4]/div[2]/a/button'
				)
			);

			await registerButton.click();
			await driver.wait(until.urlContains('register'));
		});

		when('the user fills in their username, email and password', async () => {
			//Username Input
			const usernameInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[1]/input')
			);
			await driver.wait(until.elementIsVisible(usernameInput));
			await usernameInput.sendKeys('regi_test_user');
			//Email Input
			const emailInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[2]/input')
			);
			await driver.wait(until.elementIsVisible(emailInput));
			await emailInput.sendKeys('regiDemoUser@test.com');
			//Password Input
			const passwordInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[3]/input')
			);
			await driver.wait(until.elementIsVisible(passwordInput));
			await passwordInput.sendKeys('test123');
		});

		when('the user clicks on the register button', async () => {
			const registerButton = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[4]/button')
			);
			await driver.wait(until.elementIsVisible(registerButton));
			await registerButton.click();
		});

		then(
			'the user should be successfully registered and logged in',
			async () => {
				const element = By.xpath(
					'/html/body/main/div[1]/div[1]/div/div/ul/div/a[2]/li'
				);
				await driver.wait(until.elementLocated(element));
				const username = await driver.findElement(element);
				await driver.wait(until.elementIsVisible(username));
				expect(await username.getText()).toBe('regi_test_user');

				// Check if there is a JWT in the local storage
				const jwt = await driver.executeScript(
					'return localStorage.getItem("jwt");'
				);
				expect(jwt).not.toBeNull();
			}
		);
	}, 20000);
});
