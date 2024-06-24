/// <reference types="Cypress" />
describe('Practise01',function(){

    it('Test01',function(){

        cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        

        })
})