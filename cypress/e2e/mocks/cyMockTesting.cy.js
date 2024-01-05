import users from '../../fixtures/users.json'
import article from '../../fixtures/article.json'

describe('Mock testing', () => {
    beforeEach('setup', () => {
        cy.clearAllCookies()
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type('panchalpiyush29@gmail.com')
        cy.get('input[placeholder="Password"]').type('Password$29')
        cy.get('button[type="submit"]').click()
    })

    it('article mock', () => {

        cy.intercept('GET', '/api/articles/*', article)
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').click()
        cy.get('.col-md-9').should('contain', 'Cypress testing')
    })

    xit('mock user', () => {
        cy.intercept('POST', '/api/users/login', users)
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').click()
        cy.get('a[href^="#@"]').should('contain', 'Cypress-testing')
    })
})