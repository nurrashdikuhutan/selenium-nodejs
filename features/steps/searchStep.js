const { assert } = require('chai');
const { When, Then } = require('cucumber');
const googlePage =  require('../../pages/googlePage.js')

When('we search for Maui', {timeout: 3 * 5000}, async function () {
    var google = new googlePage(this.driver);
    await google.navigateToGoogle('https://www.google.com');
    await google.searchGoogle('Maui');
});

Then('we should see the maui-rentals.com link', {timeout: 3 * 5000}, async function () {
    var searchRes = new googlePage(this.driver);
    var found = await searchRes.findResult('maui-rentals.com');
    assert.isTrue(found);
});

When('we search for Brtiz', {timeout: 3 * 5000}, async function () {
    var google = new googlePage(this.driver);
    await google.navigateToGoogle('https://www.google.com');
    await google.searchGoogle('Brtiz');
});

Then('we should see the britz.com link', {timeout: 3 * 5000}, async function () {
    var searchRes = new googlePage(this.driver);
    var found = await searchRes.findResult('britz.com');
    assert.isTrue(found);
});