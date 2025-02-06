/// <reference types="cypress" />
const Ajv = require("ajv");
const ajv = new Ajv();
const postSchema = require("../../support/schemas/postSchema.json");

describe("API Contract Test", () => {
    it("GET - Post - Deve validar o contrato", () => {
        cy.request("GET", "/posts").then(
                (response) => {
                    expect(response.status).to.eq(200);

                    const validate = ajv.compile(postSchema);
                    const valid = validate(response.body);

                    expect(valid, "Contrato da API está inválido").to.be.true;
                }
            );
    });
});
