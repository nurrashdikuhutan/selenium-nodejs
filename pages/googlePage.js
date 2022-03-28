/**
 * Class for Google Page
 * Constructor that accepts current driver
 * Functions to navigate and search text
 */
const { By, promise, until } = require('selenium-webdriver');
class GooglePage {

    constructor(driver){
        this.driver = driver;
    }

    get url(){
        return this.url;
    }

    get elements() {
        return {
            searchBar: By.name('q'),
            searchButton: By.xpath('.//input[@value="Google Search"]'),
            resultsList: By.xpath(".//div/a/h3[@class='LC20lb MBeuO DKV0Md']")
        };
    }

    //Open Google URL
    async navigateToGoogle(url){
        await this.driver.get(url);
        await this.driver.manage().setTimeouts({ implicit: 2000 });
    }

    //Search Google by text
    async searchGoogle(strSearch){
        await this.driver.findElement(this.elements.searchBar).sendKeys(strSearch);
        await this.driver.wait(until.elementLocated(this.elements.searchButton), 20000, 'Timed out after 20 seconds', 4000);
        await this.driver.findElement(this.elements.searchButton).click();
        await this.driver.wait(until.elementLocated(this.elements.resultsList), 20000, 'Timed out after 20 seconds', 4000);
    }

    //Find in Search Results
    async findResult(strSearch){
        var links = await this.driver.findElements(this.elements.resultsList);
        var found = false;
        for(let link of links) {
            var text = await link.getText();
            if ( text === strSearch ) found = true;
        };
        return found;
    }

}

module.exports = GooglePage;