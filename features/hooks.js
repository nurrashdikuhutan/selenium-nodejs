const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const { Before, After, setDefaultTimeout, Status } = require('cucumber');
const chromeDriver = require('../resources/chromeDriver.js');

let driver;

//SetUp Driver before test
Before({}, async function(scenario) {
    setDefaultTimeout(20000);
    driver = new chromeDriver().build();
    this.driver = driver;
});

//Destroy Driver after test
After({}, async function(scenario) {
    await this.driver.quit();
});

