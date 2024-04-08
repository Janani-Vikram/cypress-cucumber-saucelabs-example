export default class ActionPage {

    typeEmail(email: string) {
        cy.get('.action-email').type(email).should('have.value', email);
    }

    getCouponCode() {
        cy.get('.action-form').should('be.exist')
    }

    typeCouponCode(code: string) {
        cy.get('#couponCode1').clear().type(code)
    }

    submitButton() {
        cy.get('.action-form > .btn').click()
    }

    successMessage(text: string) {
        cy.get('.well > p').should('have.text', text)
    }
}