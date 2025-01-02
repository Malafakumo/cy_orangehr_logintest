let abc

before("", function () {
    cy.fixture('example').then(function (xyz) {
        abc = xyz
    })
})

Cypress.Commands.add("loginWithValidInputs", function () {
    cy.get(abc.username).should("be.visible").type("Admin")
    cy.get(abc.password).type("admin123")
    cy.get(abc.loginButton).click()
})

Cypress.Commands.add("emptyFields", function () {
    cy.get(abc.username).should("be.visible").clear()
    cy.get(abc.password).clear()
    cy.get(abc.loginButton).click()
    cy.get(abc.passwordErrorMessage).should("be.visible")
})

Cypress.Commands.add("invalidPassword", function () {
    cy.get(abc.username).should("be.visible").type("Admin")
    cy.get(abc.password).type("admin10023")
    cy.get(abc.loginButton).click()
    cy.get(abc.userErrorMessage).should("be.visible")
})

Cypress.Commands.add("invalidUsername", function () {
    cy.get(abc.username).should("be.visible").type("Admooooin")
    cy.get(abc.password).type("admin123")
    cy.get(abc.loginButton).click()
    cy.get(abc.userErrorMessage).should("be.visible")
})

Cypress.Commands.add("passwordisHidden", function () {
    cy.get(abc.password).type("admin123")
    .should('have.attr', 'type', 'password') 
})