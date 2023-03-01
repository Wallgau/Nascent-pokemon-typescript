// cypress/integration/home/home.spec/js
/// <reference types="cypress" />

describe("Home Page", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("should display application name", function () {
    cy.get("input").contains("");
  });
});
