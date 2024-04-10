@smoke
Feature: Cypress Actions Page

  I want to showcase actions

  Scenario: Testing the actions page
    When I open cypress actions page
    Then I enter "fake@email.com" as the email address

  Scenario: Testing the submit button
    When the user enters the coupon code
    And click on the Submit button 
    Then the user should see the success message
