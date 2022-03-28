/**
 * Class to build chromedriver
 */

const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');

class ChromeDriver {

    build() {
        return new webdriver.Builder()
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    chromeOptions: {
                        args: ['start-maximized', 'disable-extensions']
                },
                path: chromedriver.path
                }).build();
    }

};

module.exports = ChromeDriver;