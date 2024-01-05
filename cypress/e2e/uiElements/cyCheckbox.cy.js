describe('Learning to test on Checkbox', () => {

    beforeEach('setup', () => {
        cy.clearAllCookies();
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/');
    })

    it.skip('checkbox test', () => {
        //basic checkbox vertical group
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force:true}).should('be.checked');
        cy.get('#checkbox-v-2b').should('not.be.checked').check({force:true}).should('be.checked');
        cy.get('#checkbox-v-2c').should('not.be.checked').check({force:true}).should('be.checked');
    })

})