describe('Learning to test data tables', () => {

    const row = 1
    const column = 3

    beforeEach('setup', () => {
        cy.clearAllCookies()
        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it.skip('data table test', () => {
        //verify value 'http://www.jdoe.com' is present
        cy.get('#table1').contains('td', 'http://www.jdoe.com').should('be.visible');
        //verify value at a particular row and column
        cy.get(`#table1>tbody>tr:nth-child(${row})>td:nth-child(${column})`).contains('td', 'jsmith@gmail.com').should('be.visible');
        //check value based on a condition
        cy.get('#table1>tbody>tr>td:nth-child(2)').each(($ele, index, $list) => {
            const fname = $ele.text()
            if (fname.includes('Frank')) {
                cy.get('#table1>tbody>tr>td:nth-child(4)').eq(index).then(function ($due) {
                    const dueAmount = $due.text();
                    expect(dueAmount).to.equal('$51.00')
                })
            }
        })

    })
})