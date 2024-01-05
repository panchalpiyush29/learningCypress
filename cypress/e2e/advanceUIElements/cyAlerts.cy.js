describe('Learning to test on Alerts', () => {

    beforeEach('setup', () => {
        cy.clearAllCookies();
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    })

    it.skip('simple alert test', () => {
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');
        })
        cy.get('#result').should('contain', 'You successfully clicked an alert');
    })

    it.skip('Confirmation alert - Ok', () => {
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm');
        })
        cy.get('#result').should('contain', 'You clicked: Ok')
    })

    it.skip('Confirmation alert - Cancel', () => {
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm');
            return false; //click cancel on confirmation alert by default it returns true
        })
        cy.get('#result').should('contain', 'You clicked: Cancel')
    })

    it.skip('Prompt alert', () => {
        cy.window().then(function ($win) {
            cy.stub($win, 'prompt').returns('Hello Alert')
            cy.contains('Click for JS Prompt').click();
        })
        cy.get('#result').should('contain', 'You entered: Hello Alert')
    })
})