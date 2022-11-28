
Feature: Bootcamp E2E

  Background: 
    Given the user has opened the home page
    * the user closed the promo banner if it was displayed

  @searchBar
  Scenario: Search items with search bar
    When the user enters the word "Windows" in the search bar
    * the user clicks the search button icon
    Then at least one item is shown on the results page

  @logoButton
  Scenario: Internet shop logo button navigates to the main page
    When the user opens "Today's Best Deals" tab
    * the user clicks on the Internet shop logo
    Then the user should be redirected to the home page
