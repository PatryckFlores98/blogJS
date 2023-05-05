Feature: AGI search
  Scenario: Validate if the search bar is being correctly displayed
    Given I visit the AGI site
    When I click on search icon
    Then the search bar should be correctly displayed

  Scenario: Validate if the search bar disappear when clicking two times in the search icon
    Given I visit the AGI site
    And click on search icon
    When I click on search icon
    Then the search bar should be correctly disappeared