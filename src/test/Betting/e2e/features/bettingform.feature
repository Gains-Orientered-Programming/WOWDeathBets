Feature: Bettingform Interaction

Scenario: Submitting the form on the bet page
  Given the user is on the betting page
  When the user fill out the form and clicks on the button to create a bet
  Then the user should create a bet
