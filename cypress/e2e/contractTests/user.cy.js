/// <reference types="cypress" />
import "../../support/commands";
const Ajv = require("ajv");
const ajv = new Ajv();
const listAllUserSchema = require("../../support/schemas/user/listAllUserSchema.json");
const createUserSchema = require("../../support/schemas/user/createUserSchema.json");
const listSingleUserSchema = require("../../support/schemas/user/listSingleUserSchema.json");

describe("API Contract Test", () => {
    it("List All Users - Should validate the contract", () => {
        cy.getUsers().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listAllUserSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("List Single User - Should validate the contract", () => {
        cy.getSingleUser().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listSingleUserSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Create User - Should validate the contract", () => {
        cy.createUser().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(201);

            const validate = ajv.compile(createUserSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Update User Details (PATCH) - Should validate the contract", () => {
        cy.updateUserPatch().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq("Fulano de Tal");

            const validate = ajv.compile(createUserSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it.only("Update User Details (PUT) - Should validate the contract", () => {
        cy.updateUserPut().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq("Fulano de Tal");

            const validate = ajv.compile(createUserSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });
});
