
Feature: Bootcamp E2E

  E2E

  Background: 
    Given Open the home page
    * Close the promo banner if it appears

  @searchBar
  Scenario: Search bar
    When Entry the word "Windows" in the search bar (top middle)
    * Click the search
    Then Check that at least one item appears

  @logoButton
  Scenario: Internet shop logo button
    When Open "Today's Best Deals" tab
    * Click on the Internet shop logo (top right corner)
    Then Check that the main page opened
