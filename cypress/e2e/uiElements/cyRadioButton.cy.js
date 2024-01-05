describe('Learning to test Radio button', () => {

    beforeEach('setup', () => {
        cy.clearAllCookies();
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/');
    })

    it.skip('radio button test', () => {

        //basic radio button
        cy.get('#radio-choice-0a').should('not.be.checked').click({force: true});
        cy.get('#radio-choice-0b').should('not.be.checked').click({force: true});

        //modern radio button
        cy.get('#radio-choice-h-2b').should('not.be.checked').click({force: true});
        cy.get('#radio-choice-h-2c').should('not.be.checked').click({force: true});
    })

})