/// <reference types='cypress' />
describe('OrangeHRM', () => {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    it('Login', function() {
      
          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
          cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
          cy.get('.oxd-button {enter}')
          cy.screenshot('afterCreds');
          cy.url().should('contain','orangehrmlive');
    })
    it('Validate Title', function() {
    cy.title().should('contain','OrangeHRM');
         
  })
  it.only('Click on Admin and get the Record', function() {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.orangehrm-horizontal-padding > .oxd-text').contains(6);
         
  })
  


})