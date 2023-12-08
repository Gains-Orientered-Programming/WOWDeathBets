Feature: User Logout

  Scenario: Successful logout
    Given the user is logged in
    When the user clicks logout
    Then the JWT should be removed from localstorage, so that they are logged out