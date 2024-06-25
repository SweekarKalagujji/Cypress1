/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
 describe('login', function(){

    it('signup',()=>{

        cy.visit('https://www.qalara.com/');
        cy.get('.anonymous > .ant-btn').click();
        cy.get('#user_register_form_firstName').type('Sweekar');
        cy.get('#user_register_form_lastName').type('K');
        cy.get('#user_register_form_email').type('sweekarak30@gmail.com');
        cy.get('.ant-input-affix-wrapper').type('Sweekar@18!');
       // cy.xpath("//div[@class='recaptcha-checkbox-border']").should('be.visible').click();
        cy.get('#user_register_form_agreement').click();
        cy.get('.ant-btn').click();

    
            });



            it.only('Signin',()=>{

                cy.visit('https://www.qalara.com/signin/');
                cy.get('#user_register_form_email').type('sweekarak30@gmail.com');
                cy.get('#user_register_form_password').type('Sweekar@18!')
                cy.get('.ant-btn').click();
               // cy.get('.slick-active > :nth-child(1) > .HeroBanner_poster__DeI4Z > :nth-child(1) > :nth-child(1) > .HeroBanner_imgAndNoteSection__Dxklw > .HeroBanner_overlayText__4IOux > .HeroBanner_buttonContainer__ZzmyQ > [href="/explore/shopnow/"] > .large-button').click();
                cy.contains('My Account');
           
            })
            })
            
      


