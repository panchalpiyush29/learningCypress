describe('Learning to test browser controls', () => {

    beforeEach('setup', () => {
        cy.clearAllCookies()
        cy.visit("https://react-redux.realworld.io")
    })

    it.skip('test a browser control', () => {
        cy.xpath('//a[normalize-space()="Sign in"]').click()
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        cy.go(1)
        cy.get('input[type="email"]').type('cypress')
    })
})