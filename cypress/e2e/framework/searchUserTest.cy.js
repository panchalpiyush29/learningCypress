import loginData from '../../fixtures/loginData.json'

describe('HRM application search a user test', () => {

    beforeEach('login user', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type(loginData.username)
        cy.get('input[name="password"]').type(loginData.password)
        cy.get('button[type="submit"]').click()
    })


    it.skip('search Admin user', () => {
        cy.contains('Admin').click()
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('Admin')
        cy.get('button[type="submit"]').click()
    })

    it.skip('search Luke', () => {
        cy.contains('Admin').click()
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('Luke Wright')
        cy.get('button[type="submit"]').click()
    })

    afterEach('logout the user', () => {
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
    })
})