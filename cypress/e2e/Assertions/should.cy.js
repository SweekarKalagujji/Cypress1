describe("cypress should command",()=>{
    it.skip("Assertion using class value",()=>{
        cy.visit("https://www.qalara.com/signin/")
        cy.xpath("//input[@id='user_register_form_email']").type("testing@gmail.com").should('have.class','ant-input-status-success')
        cy.xpath("//input[@id='user_register_form_password']").type("Test123!").should('have.class','css-ed5zg0')
        cy.xpath("//button[@type='submit']").should('not.have.class','ghju')

    })
    let email="sweekar.kalagujji@cloverbaytechnologies.com";
    let password="Sweekar@30!";
    function login() {
          
        let email="sweekar.kalagujji@cloverbaytechnologies.com";
        let password="Sweekar@30!";
        cy.visit("https://www.qalara.com/")
        cy.get('.user-login').click();
        cy.get('#user_register_form_email').type(email);
        cy.get('#user_register_form_password').type(password);
        cy.get('.ant-btn').click();
        cy.log("Logged in Successfully")
        cy.wait(4000)
        //cy.get('.ant-btn').should('be.visible'); 
      }

    it.skip("Assertion based on length",()=>{

        login();
        //Check number products in cart is equal to 4
        cy.xpath("//div[@class='cart-prod-title']").should('have.length',4)
        //Number of products in cart is greater than 3
        .should('have.length.greaterThan',3)
        //Number of products in cart is less than 6
        .should('have.length.lessThan',6);
        //Checking if particular product  has atleast 1 quantity
        cy.xpath("(//div[@class='cart-prod-title'])[2]").should('have.length.at.least', 1);
        
    })

    it.skip("Assertion based on length",()=>{
    
        login();
        cy.visit("https://www.qalara.com/product/101013128193/")
        // Check if the product name matches the exact text
        cy.xpath("(//h1[normalize-space()='Laser cut wooden raindeer decor set'])[1]").should('have.text', 'Laser cut wooden raindeer decor set');
        // Check if the price label contains a dollar sign and is in the correct format
        cy.xpath("//span[@class='pdp-display-price qa-fw-b']").should('contain.text','USD'); 
        // Ensure the product description does not contain unwanted promotional text
        cy.xpath("(//div[@class='ant-collapse-item ant-collapse-item-active'])[2]").should('not.contain.text', 'Coupon'); 
})

it.skip("Assertion based on Value Attribute", () => {
        login();
        cy.visit("https://www.qalara.com/signin/");
        // Check exact value for attribute on the login button
        cy.xpath("//button[@class='ant-btn css-ed5zg0 ant-btn-default signup-button']").should('have.attr', 'type','submit');
        // Check if `placeholder` attribute of the email input includes emailid format
        cy.get('#user_register_form_email').should('have.attr','placeholder').and('include','name@companyname.com');
        // Check if `type` attribute of the password input is not 'text'
        cy.get('#user_register_form_password').should('have.attr','type').and('not.include','text');
        // Check if `text` attribute is not present
        cy.get("form#user_register_form").should('not.have.attr','text');
        // Check if `id` attribute is present on the login form
        cy.get("form#user_register_form").should('have.attr','id');
    });

    
 it.skip('Assertion based on CheckBoxes', () => {
            // Visit the product listing page
            cy.visit('https://www.qalara.com/products/all-categories/');
            // Ensure the "Home Decor" checkbox is checked
            cy.xpath("(//input[@label='Home Decor & Accessories'])[1]")
            .click()
            .should('be.checked');
            // Ensure the "Fashion" checkbox is not checked
            cy.xpath("(//input[@label='Fashion'])[1]").should('not.be.checked');
        });

function logout(){

    cy.xpath("//div[@class='header-popup-wrapper nav-item-group']").click();
    cy.wait(3000)
    cy.xpath("(//span[@class='ant-menu-title-content'])[9]").click();

}
  it.skip('Assertion based on element visibility',()=>{
      
        login()
        cy.xpath("//div[@class='header-popup-wrapper nav-item-group']").should('be.visible');
        logout()
        cy.xpath("//span//div[text()='My Account']").should('not.be.visible');
    
})
  it.skip('Assertion based on Value Tag',()=>{
    login()
    // Enter a search query
    cy.xpath("(//input[@type='search'])[2]").type("Cushions")
    // Submit the search query
    cy.xpath("(//span[@aria-label='search'])[1]").click();
    cy.wait(5000);
    // Verify that the search query is still present in the search input field on the results page
    cy.xpath("(//input[@type='search'])[2]").should('have.value','Cushions')
})
it.skip("Assertion to check if Element is Empty",()=>{
    login()
    // Enter a search query
     cy.xpath("(//input[@type='search'])[2]").type("Cushions")
     .wait(3000)
     .clear();
     cy.xpath("(//input[@type='search'])[2]").should('be.empty')

})
it.skip("Assertion to check if URL is valid", () => {
    // Navigate to the e-commerce website

    cy.visit('https://www.qalara.com/');
    
    // Enter search term
    cy.xpath("(//input[@type='search'])[2]").type("Cushions")
    
    // Submit the search
    cy.xpath("(//span[@aria-label='search'])[1]").click();
    cy.wait(3000);
    
    //Assert that the URL contains the search query
    cy.url().should('include', 'Cushions');
});
it.skip("Assetion to check if element exists or not", () => {
    // Visit the login page
    cy.visit('https://www.qalara.com/signin/');

    // Submit without entering password
    cy.get('#user_register_form_email').type(email);
    cy.get('.ant-btn').click();
    // Verify error message is hidden for email
    cy.xpath("(//div[@class='ant-form-item-explain-error'])[1]").should('not.exist')
    // Verify error message is shown for password
   cy.xpath("//div[text()='Please input your password!']").should('exist'); 

   
});

it("Assertion to check if element is focused", () => {
    // Visit the homepage
    cy.visit('https://www.qalara.com/signin/');
    
    // Assert that the search input field is focused
    cy.xpath("(//input[@aria-invalid='true'])[2]").should('be.focused');
});



    })


    

    
