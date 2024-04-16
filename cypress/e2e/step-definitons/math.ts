import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I have entered a = {int} into the calculator', function (int) {
    cy.log(`Entered number: ${int}`);
});

Given('I have entered b = {int} into the calculator', (int) => {
    cy.log(`Entered number: ${int}`);
})

When('I press add', () => {
    cy.log('Pressed add button');
});

Then('the result should be {int} on the screen', (float) => {
    cy.log(`Expected result: ${float}`);
});