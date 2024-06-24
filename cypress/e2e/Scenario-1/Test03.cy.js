/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


describe('My Test Suite', function() {

    before(function(){
        cy.log('***Open Application****')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    after(function(){
        cy.log('***Close Application****')
    })

    beforeEach(function(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password);
    })

    afterEach(function(){
        cy.log('***After Each****')
    })

    it('First Test', function() {
      cy.log('***Validating Dashboard****')
    })

    it('Second Test', function() {
        cy.log('**Validating Admin****')
    })

    
})