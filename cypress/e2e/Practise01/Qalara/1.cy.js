/// <reference types= "cypress" />
/// <reference types= "cypress-xpath" />
 describe('login', function(){

    it.skip('signup',()=>{

        cy.visit('https://www.qalara.com/');
        cy.get('.anonymous > .ant-btn').click();
        cy.get('#user_register_form_firstName').type('Sweekar');
        cy.get('#user_register_form_lastName').type('K');
        cy.get('#user_register_form_email').type('sweekarak30@gmail.com');
        cy.get('.ant-input-affix-wrapper').type('Sweekar@18!');
       // cy.xpath("//div[@class='recaptcha-checkbox-border']").click(); cy.get('iframe[src*="recaptcha"]')
       cy.get('iframe[src*="recaptcha"]')
       .should('be.visible')
       .then($iframe => {
        const $body = $iframe.contents().find('body');
    cy.wrap($body).find('.recaptcha-checkbox-border', { timeout: 10000 })
      .should('be.visible')
      .click();
      cy.get('#user_register_form_agreement').click();
      cy.get('.ant-btn > span').click();
  
  })

  })
})

            beforeEach(function(){

                cy.visit('https://www.qalara.com/signin/');
                cy.get('#user_register_form_email').type('sweekarak30@gmail.com');
                cy.get('#user_register_form_password').type('Sweekar@18!')
                cy.get('.ant-btn').click() 
               // cy.get('.slick-active > :nth-child(1) > .HeroBanner_poster__DeI4Z > :nth-child(1) > :nth-child(1) > .HeroBanner_imgAndNoteSection__Dxklw > .HeroBanner_overlayText__4IOux > .HeroBanner_buttonContainer__ZzmyQ > [href="/explore/shopnow/"] > .large-button').click();
               cy.contains('My Account');
           
            })
               
            it('Choose a product',()=>{

                cy.get('.main-sub-header > :nth-child(2)').click();
                cy.contains('Summer').click();
               // cy.get(':nth-child(2) > .product-card > :nth-child(1) > .image-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > .slider-slide > .aspect-ratio-box > :nth-child(1) > .LazyImage_container__9fOqm > .lazyload-wrapper > picture > .LazyImage_image__ENvGO').click();
                cy.xpath("(//a[@class='product-card products-on-listing'])[1]").then(function(e){
                let item= e.prop('href');
                    cy.visit(item);
                    cy.url().should('eq','https://www.qalara.com/product/10101295958/');
                });
                })
                it.only('Add item to cart',()=>{

                    cy.visit("https://www.qalara.com/product/10101295958");
                    cy.get('#product_details_form_large > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type(55);


                    });
                
    

        
            


        
            
     
