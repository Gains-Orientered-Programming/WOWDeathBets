Feature: Ticketform Interaction

Scenario: Submitting either a depsoit or withdraw form on the profile page
  Given the user is on the profile page
  When the user fill out the form and clicks on the button to create a deposit or withdraw ticket
  Then the user should create a ticket
