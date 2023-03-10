// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import DataLogin from '../fixtures/example';
import loc from './locators'

Cypress.Commands.add('fillFormServiceLogin', (DataLogin) => {
    cy.get(loc.DEFAULT.LOGIN.FIRSTNAME).should('be.visible')
        .type(DataLogin.default.name);
    cy.get(loc.DEFAULT.LOGIN.LASTNAME).should('be.visible')
        .type(DataLogin.default.sobrenome);
    cy.get(loc.DEFAULT.LOGIN.EMAIL).should('be.visible')
        .type(DataLogin.default.email);
    cy.get(loc.DEFAULT.LOGIN.PHONE).should('be.visible')
        .type(DataLogin.default.numero);
    cy.get('select').select('cursos');
    cy.wait(500);
    cy.get(loc.DEFAULT.LOGIN.SUPPORT_TYPE).contains('Elogio').click();
    cy.get(loc.DEFAULT.LOGIN.EMAIL_CHECKBOX).check();
    cy.get(loc.DEFAULT.LOGIN.TEXT).type('textotextotextotextotextotextotextotextotextotexto');
    
    cy.get(loc.DEFAULT.LOGIN.FILE_UPLOAD).selectFile('./cypress/fixtures/swagger_test.json');
    cy.wait(2000);
});

Cypress.Commands.add('assertFieldsServiceLogin', () => {
    cy.get(loc.DEFAULT.LOGIN.FIRSTNAME).scrollIntoView().should('be.visible').and('have.value', DataLogin.default.name);
    cy.get(loc.DEFAULT.LOGIN.LASTNAME).scrollIntoView().should('be.visible').and('have.value', DataLogin.default.sobrenome);
    cy.get(loc.DEFAULT.LOGIN.EMAIL).scrollIntoView().should('be.visible').and('have.value', DataLogin.default.email);
});