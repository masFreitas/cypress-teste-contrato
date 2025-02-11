// const utils = require("../support/utils");

const utils = require("./utils/utils");

Cypress.Commands.add('getUsers', () => {
    cy.request("GET", "/users")
});

Cypress.Commands.add('createUser', () => {
    cy.request({
        method: 'POST',
        url: '/users',
        headers: { Authorization: `Bearer ${Cypress.env('token')}` },
        body: {
            name: "Fulan2111o de Tal",
            email: utils.getRandomEmail(),
            gender: 'female',
            status: 'active'
        }
    });
});

Cypress.Commands.add('getPosts', () => {
    cy.request("GET", "/posts")
})