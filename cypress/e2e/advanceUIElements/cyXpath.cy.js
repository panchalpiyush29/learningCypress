// ensure dev dependency for cypress-xpath is added --> npm install -D cypress-xpath
// lastly under support folder under e2e.js add --> require('cypress-xpath')
describe('Learning to find elements using xpath', () => {

    beforeEach('setup', () => {
        cy.clearAllCookies()
        cy.visit('https://react-redux.realworld.io')
    })

    it.skip('test xpath', () => {
        cy.xpath('//a[normalize-space()="Sign in"]').click()
        cy.xpath('//input[@placeholder="Email"]').type('cypressdemo@gmail.com')
        cy.xpath('//input[@placeholder="Password"]').type('cypressdemo')
        cy.xpath('//button[@type="submit"]').click()
        cy.xpath('(//a[@href=\'#settings\'])[1]').should('be.visible')
    })
})