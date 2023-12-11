import { deleteSeededUsers, seedUsers } from '../../../utils/seedUsers';
import { User } from '../../../../types/user';
import { loadFeature, defineFeature } from "jest-cucumber";
import { Builder, By, until, WebDriver } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

const feature = loadFeature(
  "src/test/Ticket/e2e/features/ticketform.feature"
);

defineFeature(feature, (test) => {
  let driver: WebDriver;
  let testUser: User;


  beforeAll(async () => {
    testUser = await seedUsers();

		// Check if testUser is properly seeded
		if (!testUser.email || !testUser.password) {
			throw new Error('Failed to seed test user');
		}


    const chromeOptions = new chrome.Options();
   // chromeOptions.addArguments("--headless"); // Run Chrome in headless mode
    // chromeOptions.addArguments('--disable-gpu'); // Disable GPU hardware acceleration
    // chromeOptions.addArguments('--window-size=1920,1080'); // Specify window size

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
  });

  afterAll(async () => {
    await driver.quit();

    await deleteSeededUsers(testUser);
  });

  test("Submitting either a depsoit or withdraw form on the profile page", ({ given, when, then }) => {
    given("the user is on the profile page", async () => {
      await driver.get(
        "http://localhost:3000/profile/testUser/deposit-ticket"
      );
      await driver.wait(until.urlContains("testUser"));
    });

    when(
      "the user fill out the form and clicks on the button to create a deposit or withdraw ticket",
      async () => {
        const inputName = await driver.findElement(By.css("[data-testid='characterNameInput']"));
        const inputAmount = await driver.findElement(By.css("[data-testid='amountInput']"));
        const button = await driver.findElement(By.css("[data-testid='button']"));
        await driver.wait(until.elementIsVisible(inputName));
        await inputName.sendKeys("Petrice");
        await driver.wait(until.elementIsVisible(inputAmount));
        await inputAmount.sendKeys("500");
        await driver.wait(until.elementIsVisible(button));
        await button.click();
      }
    );

    then("the user should create a ticket", async () => {
      const element = By.xpath("/html/body/div/ol/li/div/div[1]");
      await driver.wait(until.elementLocated(element));
      const toast = await driver.findElement(element);
      await driver.wait(until.elementIsVisible(toast));
      expect(await toast.isDisplayed()).toBe(true);
    });
  }, 60000); // Increase overall test timeout here
});
