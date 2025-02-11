/// <reference types="cypress" />
const Ajv = require("ajv");
const ajv = new Ajv();
const listAllPostSchema = require("../../support/schemas/post/listAllPostSchema.json");

describe("API Contract Test", () => {
    it("List All Posts - Should validate the contract", () => {
        cy.getPosts().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listAllPostSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });
});
