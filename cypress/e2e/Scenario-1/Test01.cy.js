describe('My First Test Suite', () => {
    it('First Test', function() {
      //cy.title().should('eq','OrangeHRM')
      //.and('include','HRM')
      //.and('contains','HRM');
      cy.fixture('HRMTestdata').then(function(data){

        data.forEach(function(userdata){
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
          cy.screenshot('loginPage');
          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password);
        cy.screenshot('afterCreds');

      })

        
      })
     
     // cy.get('.oxd-button').click();
      //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').then(function(el){
      //  let text=el.text();
       // expect(text).to.eq('Dashboard');
        //assert.eq(text,'Dashboard');
     // })

    })

  })
