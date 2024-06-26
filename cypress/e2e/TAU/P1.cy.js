const { should } = require("chai")

it('My first test',()=>{
    cy.visit('http://localhost:3000')
    //to select an element
   // cy.contains('Login')
    //cy.contains('.board','Login')
    //cy.get('. class attribute value')
    //cy.get('# id attribute value')
    //cy.get('[data-cy=board-item]').first()
                                    //.last()
                                   // .eq(0)/eq(1)
                                   //next 
                                  // previos 
                                  // parents
                                  // children, find
    //cant stimulate hower elements -
   // click( { force:true} )option

    //type('new {enter}')
//cy.get().should('have.length',2)
//cy.get().check()
     //     .uncheck()
    //cy.get().should('be.checked')
//check and uncheck
//cy.get().should('have.class','completed'//class name)

//cy.get().should('have.text','groceris')-you can see the text
//have.value   properties-no inner text (groceries)

//command chains-pass info from one to another
cy.contains('','')
    //click,type,shoot-chiild commands
    //contains,visit,get-parent commands
    //hybrid commands-cy.get().eq(1).contains('','')
    //console applied and yielded 


    //before action asserting to check if we are 
    //selecting the right item- cy.get().last().should('contain.text','shampoo').click()
})

//appli tools-visual testing