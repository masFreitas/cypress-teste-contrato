/// <reference types="cypress" />
const Ajv = require("ajv");
const ajv = new Ajv();
const listAllPostSchema = require("../../support/schemas/post/listAllPostSchema.json");
const listSinglePostSchema = require("../../support/schemas/post/listSinglePostSchema.json");

before(() => {
    cy.createPost();
});

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

    it("List Single Post - Should validate the contract", () => {
        cy.getSinglePost().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listSinglePostSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Create Post - Should validate the contract", () => {
        cy.createPost().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(201);

            const validate = ajv.compile(listSinglePostSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Update Post Patch - Should validate the contract", () => {
        cy.updatePostPatch().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listSinglePostSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Update Post Put - Should validate the contract", () => {
        cy.updatePostPut().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(listSinglePostSchema);
            const valid = validate(response.body);

            expect(valid, "Invalid API contract").to.be.true;
        });
    });

    it("Delete Post - Should validate the contract", () => {
        cy.deletePost().as("response");

        cy.get("@response").then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});
