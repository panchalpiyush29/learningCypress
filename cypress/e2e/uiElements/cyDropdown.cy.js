describe('Learning to test on Dropdown', () => {

    beforeEach('setup', () => {
        cy.clearAllCookies();

    })

    it.skip('static dropdown test', () => {
        cy.visit('https://seleniumbase.io/demo_page');
        cy.get('#mySelect').select('Set to 100%').should('have.value', '100%');

    })

    it.skip('dynamic dropdown test', () => {
        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx');
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains('Tofu').click()
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').should('have.value', 'Tofu')
    })

    it.skip('dynamic multiple dropdown test', () => {
        cy.visit('https://demo.mobiscroll.com/select/multiple-select');
        cy.get('#multiple-select-input').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Movies, Music & Games').click({force: true});
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Electronics & Computers').click({force: true});
    })

})