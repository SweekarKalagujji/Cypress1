/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


describe('My Test Suite', function() {
  it('First Approach', function() {
    cy.visit('https://www.qalara.com/products/all-categories/');
    cy.xpath("(//a[@class='product-card products-on-listing'])[1]").invoke('removeAttr','target').click();
    cy.url().should('eq','https://www.qalara.com/product/101014105675/');
  })
  it.only('Second Approach', function() {
      cy.visit('https://www.qalara.com/products/all-categories/');
      cy.xpath("(//a[@class='product-card products-on-listing'])[1]").then(function(el){
          let url = el.prop('href');
          cy.visit(url);
      })
      cy.url().should('eq','https://www.qalara.com/product/101013109288/');
    })
  
})