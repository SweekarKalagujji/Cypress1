/// <reference types='cypress' />
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
  it('Click on Admin and get the Record', function() {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-title > .oxd-icon').click();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.orangehrm-horizontal-padding > .oxd-text').contains(12);
         
  })

it.only('Navigate to next tab',()=>{

  cy.get(':nth-child(2) > a').click().then(function(el){
    let url = el.prop('href');
    cy.visit(url);
    cy.url().should('eq','https://www.orangehrm.com/')
})


     
})
  it('Logout', function() {
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link {enter}');
   
         
  })
  


})