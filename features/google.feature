Feature: Google Search

Scenario: Searching Google

  Given I open Google's search page
  And the title is "Google"
  And the Google search form exists
  When I search "nightwatch" in search form
  Then the search result matches "nightwatch"