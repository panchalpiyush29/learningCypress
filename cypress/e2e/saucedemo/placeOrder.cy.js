import HomePage from "../pages/HomePage";
import saucelabsLoginData from '../../fixtures/saucelabsLoginData.json'

describe('end to end test', () => {
    const homePage = new HomePage()

    beforeEach('setup', () => {
        cy.clearAllCookies()
        cy.visit('/')
    })

    it('test buying a sauce labs backpack', () => {
        homePage.sauceLogin(saucelabsLoginData.username, saucelabsLoginData.password)
        cy.url().should('include', '/inventory.html')
    })

})