const { client } = require('nightwatch-api');
const { Given, Then, When } = require('@cucumber/cucumber');

Given(/^I open Google's search page$/, () => {
  return client.url('http://google.com').waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});

When('I search {string} in search form', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return  client.setValue('input[type=text]', [string, client.Keys.ENTER])
                  .pause(1000); 
  });

Then('the search result matches {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return  client.assert.containsText('#main', string);
  });

// Then(/^I search "([^"]*)" in search form $/, searchValue => {
//     return  client.setValue('input[type=text]', [searchValue, browser.Keys.ENTER]);    
//   });
 
// Then(/^ the search result matches "([^"]*)" $/, searchValue => {
//     return  client.assert.containsText('#main', searchValue);
   
//   }); 