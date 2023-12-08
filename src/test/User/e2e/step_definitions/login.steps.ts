import { deleteSeededUsers, seedUsers } from '../../../utils/seedUsers';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { loadFeature, defineFeature } from 'jest-cucumber';
import chrome from 'selenium-webdriver/chrome';
import { User } from '../../../../types/user';

const feature = loadFeature('src/test/User/e2e/features/login.feature');

defineFeature(feature, (test) => {
	let driver: WebDriver;
	let testUser: User;

	beforeAll(async () => {
		// Make test user
		testUser = await seedUsers();

		const chromeOptions = new chrome.Options();
		chromeOptions.addArguments('--headless'); // Run Chrome in headless mode
		// chromeOptions.addArguments('--disable-gpu'); // Disable GPU hardware acceleration
		// chromeOptions.addArguments('--window-size=1920,1080'); // Specify window size

		driver = await new Builder()
			.forBrowser('chrome')
			.setChromeOptions(chromeOptions)
			.build();
	}, 60000);

	afterAll(async () => {
		await driver.quit();
		// Delete test user
		await deleteSeededUsers(testUser);
	});

	test('Failed login', ({ given, when, then }) => {
		given('the user clicks on login', async () => {
			await driver.get('http://localhost:3000');
			const element = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[1]/div/div/ul/a/li')
			);

			await element.click();
			await driver.wait(until.urlContains('login'));
		});

		when('the user fills in the wrong email and/or password', async () => {
			const emailInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[1]/div/input')
			);
			await driver.wait(until.elementIsVisible(emailInput));
			await emailInput.sendKeys('prxy-post_man_DO@example.com');

			const passwordInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[2]/div/input')
			);
			await driver.wait(until.elementIsVisible(passwordInput));
			await passwordInput.sendKeys('pot-proxy-PassDO');
		});

		when('the user clicks on the login button', async () => {
			const loginButton = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[3]/button')
			);
			await driver.wait(until.elementIsVisible(loginButton));
			await loginButton.click();
		});

		then('the user should be shown an error message', async () => {
			const errorElement = await driver.wait(
				until.elementLocated(
					By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[4]')
				)
			);
			await driver.wait(until.elementIsVisible(errorElement));
			expect(await errorElement.getText()).toBe('Wrong password or email');
		});
	}, 60000);

	test('Successful login', ({ given, when, then }) => {
		given('the user clicks on login', async () => {
			await driver.get('http://localhost:3000');
			const element = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[1]/div/div/ul/a/li')
			);

			await element.click();
			await driver.wait(until.urlContains('login'));
		});

		when('the user fills in their email and password', async () => {
			const emailInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[1]/div/input')
			);
			await driver.wait(until.elementIsVisible(emailInput));
			await emailInput.sendKeys(testUser.email);

			const passwordInput = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[2]/div/input')
			);
			await driver.wait(until.elementIsVisible(passwordInput));

			if (!testUser.password) {
				console.log('password is null');
				throw new Error('Password is null');
			}

			await passwordInput.sendKeys(testUser.password);
		});

		when('the user clicks on the login button', async () => {
			const loginButton = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[3]/button')
			);
			await driver.wait(until.elementIsVisible(loginButton));
			await loginButton.click();
		});

		then('the user should be successfully logged in', async () => {
			const element = By.xpath(
				'/html/body/main/div[1]/div[1]/div/div/ul/div/a[2]/li'
			);
			await driver.wait(until.elementLocated(element));
			const username = await driver.findElement(element);
			await driver.wait(until.elementIsVisible(username));
			expect(await username.getText()).toBe(testUser.username);

			// Check if there is a JWT in the local storage
			const jwt = await driver.executeScript(
				'return localStorage.getItem("jwt");'
			);
			expect(jwt).not.toBeNull();
		});
	}, 60000);
});
