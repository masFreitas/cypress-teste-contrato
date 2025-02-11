/// <reference types="cypress" />
import "../../support/commands";
const Ajv = require("ajv");
const ajv = new Ajv();
const listAllUserSchema = require("../../support/schemas/user/listAllUserSchema.json");
const createUserSchema = require("../../support/schemas/user/createUserSchema.json");

describe("API Contract Test", () => {
    it("GET - Users - Deve validar o contrato", () => {
        cy.getUsers().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listAllUserSchema);
            const valid = validate(response.body);

            expect(valid, "Contrato da API está inválido").to.be.true;
        });
    });

    it("POST - Users - Deve validar o contrato", () => {

        cy.createUser().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(201);
            console.log(response.body);

            const validate = ajv.compile(createUserSchema);
            const valid = validate(response.body);

            expect(valid, "Contrato da API está inválido").to.be.true;
        });
    });
});
