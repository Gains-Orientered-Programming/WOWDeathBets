Feature: Homepage Interaction

Scenario: Clicking on the homepage element
  Given the user is on a character page
  When the user clicks on the specified element
  Then the user should be navigated to the home page
