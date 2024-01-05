describe('Learning to test iframe', () => {

    beforeEach('setup', () => {
        cy.clearAllCookies()
        cy.visit("https://the-internet.herokuapp.com/iframe")
    })

    it.skip('test a iframe', () => {
        cy.get('#mce_0_ifr').within(function ($iframe) {
            const frame = $iframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type("Hello").should('be.visible')
        })
    })

})