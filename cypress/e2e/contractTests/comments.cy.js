/// <reference types="cypress" />
const Ajv = require("ajv");
const ajv = new Ajv();

const listAllCommentSchema = require("../../support/schemas/comments/listAllCommentsSchema.json");
const listSingleCommentSchema = require("../../support/schemas/comments/listSingleCommentSchema.json");

before(() => {
    cy.createComment();
});

describe("Comments API Contract Test", () => {

    it("List All Comments - Should validate the contract", () => {
        cy.getComments().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listAllCommentSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Get Single Comments - Should validate the contract", () => {
        cy.getSingleComments().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listSingleCommentSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Create Comments - Should validate the contract", () => {
        cy.createComment().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(201);

            const validate = ajv.compile(listSingleCommentSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Update Comments (PATCH) - Should validate the contract", () => {
        cy.updateCommentPatch().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listSingleCommentSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Update Comments (PUT) - Should validate the contract", () => {
        cy.updateCommentPut().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listSingleCommentSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Delete Comments - Should validate the contract", () => {
        cy.deleteComment().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(204);

            const validate = ajv.compile(listSingleCommentSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });
});