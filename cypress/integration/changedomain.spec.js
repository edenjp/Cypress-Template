/// <reference types="cypress"/>

describe("Given I am at github services page and clicked on a github youtube to be redirected", function () {
    context("When I click at explore option on youtube", function () {
      it("Then the content of explore is displayed", () => {
        cy.visit('/')
        cy.get('.flex-justify-end > .btn-mktg').click({force: true})
        cy.get(':nth-child(3) > a > .d-block > path').click({force: true})
        cy.get('[aria-label="Explorar"] > #endpoint > #icon').click()
        cy.get(':nth-child(1) > #destination-content-root').click({force: true})
        cy.url().should('contains','https://www.youtube.com/')
      });
    });
  });