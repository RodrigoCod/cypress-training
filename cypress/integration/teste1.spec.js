import DataLogin from '../fixtures/example';
import loc from '../support/locators'

describe('Tweets', () => {
    beforeEach(() => cy.visit('../../src/index.html'))

    it('preenchendo os campos', () => {
        cy.fillFormServiceLogin(DataLogin);        
        cy.assertFieldsServiceLogin(DataLogin);
        cy.get(loc.DEFAULT.UTILS.ENVIAR).contains('Enviar').click();

    });
});