/// <reference types="cypress" />
const Ajv = require("ajv");
const ajv = new Ajv();
const listAllPostSchema = require("../../support/schemas/post/listAllPostSchema.json");

describe("API Contract Test", () => {
    it("GET - Post - Deve validar o contrato", () => {
        cy.getPosts().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listAllPostSchema);
            const valid = validate(response.body);

            expect(valid, "Contrato da API está inválido").to.be.true;
        });
    });
});
