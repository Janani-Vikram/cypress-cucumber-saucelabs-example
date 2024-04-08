import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ActionPage from "./page-objects/ActionPage";
import data from '../fixtures/data.json';

const actionPage = new ActionPage();
const env = Cypress.env()

When('I open cypress actions page', () => {
  cy.visit(env.cypress_actions)
});

Then(`I enter {string} as the email address`, (email: string) => {
  actionPage.typeEmail(email)
});

When('the user enters the coupon code', () => {
  actionPage.getCouponCode()
})

When('click on the Submit button', () => {
  actionPage.submitButton()
})

Then('the user should see the success message', () => {
  actionPage.successMessage(data["success-message"])
})
