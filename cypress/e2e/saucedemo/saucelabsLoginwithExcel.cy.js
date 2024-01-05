let data;
describe('login test excel', () => {
    beforeEach(() => {
        data = cy.task('readXlsx', {file: 'cypress/fixtures/sauceLogin.xlsx', sheet: 'Sheet1'})
            .then((rows) => {
                data = rows
            })
        cy.clearAllCookies()
        cy.visit('https://www.saucedemo.com/')
    })

    it('login test - valid user', () => {
        //saucelabslogin() is defined under commands.js
        cy.saucelabslogin(data[0].username, data[0].password)
        cy.url().should('include', '/inventory.html')
    })

    it('login test - locked out user', () => {
        cy.saucelabslogin(data[0].username, data[1].password);
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
    })
})