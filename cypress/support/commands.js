// const utils = require("../support/utils");

const utils = require("./utils/utils");

Cypress.Commands.add('getUsers', () => {
    cy.request("GET", "/users")
});

Cypress.Commands.add('getSingleUser', () => {
    cy.request("GET", "/users").then((response) => {
        const id = response.body[0].id;
        cy.request("GET", `/users/${id}`);
    });
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

Cypress.Commands.add('updateUserPatch', () => {
    cy.request("GET", "/users").then((response) => {
        const id = response.body[0].id;
        cy.request({
            method: 'PATCH',
            url: `/users/${id}`,
            headers: { Authorization: `Bearer ${Cypress.env('token')}` },
            body: {
                name: "Fulano de Tal",
                email: utils.getRandomEmail()
            }
        });
    });
});

Cypress.Commands.add('updateUserPut', () => {
    cy.request("GET", "/users").then((response) => {
        const id = response.body[0].id;
        cy.request({
            method: 'PUT',
            url: `/users/${id}`,
            headers: { Authorization: `Bearer ${Cypress.env('token')}` },
            body: {
                name: "Fulano de Tal",
                email: utils.getRandomEmail(),
                gender: 'female',
                status: 'active'
            }
        });
    });
});

Cypress.Commands.add('deleteUser', () => {
    cy.request("GET", "/users").then((response) => {
        const id = response.body[0].id;
        cy.request({
            method: 'DELETE',
            url: `/users/${id}`,
            headers: { Authorization: `Bearer ${Cypress.env('token')}` }
        });
    });
});


// POST COMMANDS


Cypress.Commands.add('getPosts', () => {
    cy.request("GET", "/posts")
});

Cypress.Commands.add("getSinglePost", () => {
    cy.request("GET", "/posts").then((response) => {
        const id = response.body[0].id;
        cy.request("GET", `/posts/${id}`);
    });
});

Cypress.Commands.add("createPost", () => {
    cy.request("GET", "/users").then((response) => {
        const userId = response.body[0].id;

        cy.request({
            method: 'POST',
            url: '/posts',
            headers: { Authorization: `Bearer ${Cypress.env('token')}` },
            body: {
                user_id: userId,
                title: "Post Title",
                body: "Post Body"
            }
        });
    })
});