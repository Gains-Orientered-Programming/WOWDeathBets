Feature: User Registration

  Scenario: Successful register
    Given the user clicks on register
    When the user fills in their username, email and password
    And the user clicks on the register button
    Then the user should be successfully registered and logged in