import saucelabsLoginData from '../../fixtures/saucelabsLoginData.json'

describe('login test', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.visit('/')
    })

    it('login test - valid user', () => {
        //saucelabslogin() is defined under commands.js
        cy.saucelabslogin(saucelabsLoginData.username, saucelabsLoginData.password)
        cy.url().should('include', '/inventory.html')
    })

    it('login test - locked out user', () => {
        cy.saucelabslogin(saucelabsLoginData.incorrectUsername, saucelabsLoginData.password)
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
    })
})
