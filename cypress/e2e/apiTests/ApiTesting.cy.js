describe('Learning API testing', () => {


    it('Get test', () => {
        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
            expect(response.status).equal(200)
            expect(response.body.data[1].first_name).equal('Lindsay')
        })
    })

    it('Post test', () => {
        const user = {
            "name": "Piyush",
            "job": "automation tester"
        };
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            cy.log(response.body)
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })

    })

    it('Put test', () => {

        const user = {
            "name": "Piyush",
            "job": "automation tester lead"
        };
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            cy.log(response.body)
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    it('Delete test', () => {
        cy.request('Delete', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    })
})