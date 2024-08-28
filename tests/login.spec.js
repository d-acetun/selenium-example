// const { Builder } = require("selenium-webdriver");
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

describe("login", () => {
  it("do a search on google", async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    // Maximizar la ventana del navegador
    await driver.manage().window().maximize();
    try {
      // await driver.get("https://saucedemo.com/");
      await driver.get("https://www.google.com/ncr");

      // await driver.findElement(By.id("user-name")).sendKeys("standard_user");
      // await driver.findElement(By.css("#password")).sendKeys("secret_sauce");
      // await driver.findElement(By.css('[data-test="login-button"]')).click();
      await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000)

      // await driver.sleep(5000);
    } finally {
      await driver.quit();
    }
  });
});
