/// <reference types="cypress" />
const Ajv = require("ajv");
const ajv = new Ajv();
const getUserSchema = require("../../support/schemas/getUserSchema.json");
const postUserSchema = require("../../support/schemas/postUserSchema.json");

describe("API Contract Test", () => {
    it("GET - Users - Deve validar o contrato", () => {
        cy.request("GET", "/users").then(
                (response) => {
                    expect(response.status).to.eq(200);

                    const validate = ajv.compile(getUserSchema);
                    const valid = validate(response.body);

                    expect(valid, "Contrato da API está inválido").to.be.true;
                }
            );
    });

    it("POST - Users - Deve validar o contrato", () => {
        cy.request({
            method: 'POST',
            url: '/users',
            headers: { Authorization: `Bearer b71f4118e1fa704f33a4aa61b8a7fb6be6abd50608e9cd488f129066419d2047` },
            body: {
                name: "Fulan2111o de Tal",
                email: "fulan222o@teste.com",
                gender: 'female',
                status: 'active'
              }
        }).then(
                (response) => {
                    expect(response.status).to.eq(201);
                    console.log(response.body);

                    const validate = ajv.compile(postUserSchema);
                    const valid = validate(response.body);

                    expect(valid, "Contrato da API está inválido").to.be.true;
                }
            );
    });
});
