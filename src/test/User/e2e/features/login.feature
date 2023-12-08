Feature: User Login

  Scenario: Successful login
    Given the user clicks on login
    When the user fills in their email and password
    And the user clicks on the login button
    Then the user should be successfully logged in

  Scenario: Failed login
    Given the user clicks on login
    When the user fills in the wrong email and/or password
    And the user clicks on the login button
    Then the user should be shown an error message