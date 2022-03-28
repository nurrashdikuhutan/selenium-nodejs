const { assert } = require('chai');
const { When, Then } = require('cucumber');
const googlePage =  require('../../pages/googlePage.js')

When('we search for a text', {timeout: 3 * 5000}, async function () {
    var google = new googlePage(this.driver);
    await google.navigateToGoogle('https://www.google.com');
    await google.searchGoogle('nur');
});

Then('we should see the specified link', {timeout: 3 * 5000}, async function (dataTable) {
    var searchRes = new googlePage(this.driver);
    var found = await searchRes.findResult('Nur - Wikipedia');
    assert.isTrue(found);
});