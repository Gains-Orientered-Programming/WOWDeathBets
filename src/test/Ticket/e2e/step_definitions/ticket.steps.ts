import { loadFeature, defineFeature } from "jest-cucumber";
import { Builder, By, until, WebDriver } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

const feature = loadFeature(
  "src/test/Ticket/e2e/features/ticketform.feature"
);

defineFeature(feature, (test) => {
  let driver: WebDriver;

  beforeAll(async () => {
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--headless"); // Run Chrome in headless mode
    // chromeOptions.addArguments('--disable-gpu'); // Disable GPU hardware acceleration
    // chromeOptions.addArguments('--window-size=1920,1080'); // Specify window size

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("Submitting either a depsoit or withdraw form on the profile page", ({ given, when, then }) => {
    given("the user is on the ticket page", async () => {
      await driver.get(
        "http://localhost:3000/profile/demo/deposit-ticket"
      );
      await driver.wait(until.urlContains("demo"));
    });

    when(
      "the user fill out the form and clicks on the button to create a ticket",
      async () => {
        const inputName = await driver.findElement(By.css("[data-testid='characterNameInput']"));
        const inputAmount = await driver.findElement(By.css("[data-testid='amountInput']"));
        const button = await driver.findElement(By.css("[data-testid='button']"));
        await driver.wait(until.elementIsVisible(inputName));
        await inputName.sendKeys("Petrice");
        await driver.wait(until.elementIsVisible(inputAmount));
        await inputName.sendKeys("500");
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
  }, 10000); // Increase overall test timeout here
});
