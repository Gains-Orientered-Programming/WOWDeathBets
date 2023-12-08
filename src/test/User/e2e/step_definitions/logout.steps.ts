import { deleteSeededUsers, seedUsers } from '../../../utils/seedUsers';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { loadFeature, defineFeature } from 'jest-cucumber';
import chrome from 'selenium-webdriver/chrome';
import { User } from '../../../../types/user';

const feature = loadFeature('src/test/User/e2e/features/logout.feature');

defineFeature(feature, (test) => {
	let driver: WebDriver;
	let testUser: User;

	beforeAll(async () => {
		// Make test user
		testUser = await seedUsers();

		// Check if testUser is properly seeded
		if (!testUser.email || !testUser.password) {
			throw new Error('Failed to seed test user');
		}

		const chromeOptions = new chrome.Options();
		chromeOptions.addArguments('--headless'); // Run Chrome in headless mode
		// chromeOptions.addArguments('--disable-gpu'); // Disable GPU hardware acceleration
		// chromeOptions.addArguments('--window-size=1920,1080'); // Specify window size

		driver = await new Builder()
			.forBrowser('chrome')
			.setChromeOptions(chromeOptions)
			.build();

		// Login flow
		await driver.get('http://localhost:3000/login');
		const emailInput = driver.findElement(
			By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[1]/div/input')
		);
		await driver.wait(until.elementIsVisible(emailInput));
		await emailInput.sendKeys(testUser.email);

		const passwordInput = driver.findElement(
			By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[2]/div/input')
		);
		await driver.wait(until.elementIsVisible(passwordInput));
		await passwordInput.sendKeys(testUser.password);
		const loginButton = driver.findElement(
			By.xpath('/html/body/main/div[1]/div[2]/div/div/form/div[3]/button')
		);
		await driver.wait(until.elementIsVisible(loginButton));
		await loginButton.click();
		const element = By.xpath(
			'/html/body/main/div[1]/div[1]/div/div/ul/div/a[2]/li'
		);
		await driver.wait(until.elementLocated(element));
		const username = await driver.findElement(element);
		await driver.wait(until.elementIsVisible(username));
	}, 60000);

	afterAll(async () => {
		await driver.quit();

		await deleteSeededUsers(testUser);
	});

	test('Successful logout', ({ given, when, then }) => {
		given('the user is logged in', async () => {
			const jwt = await driver.executeScript(
				'return localStorage.getItem("jwt");'
			);
			expect(jwt).not.toBeNull();
		});

		when('the user clicks logout', async () => {
			const logoutButton = driver.findElement(
				By.xpath('/html/body/main/div[1]/div[1]/div/div/ul/div/a[1]/li/button')
			);
			await driver.wait(until.elementIsVisible(logoutButton));
			await logoutButton.click();
		});

		then(
			'the JWT should be removed from localstorage, so that they are logged out',
			async () => {
				const jwt = await driver.executeScript(
					'return localStorage.getItem("jwt");'
				);
				expect(jwt).toBeNull();
			}
		);
	}, 60000);
});
