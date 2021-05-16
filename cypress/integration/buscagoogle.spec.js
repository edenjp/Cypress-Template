/// <reference types="cypress"/>

describe("Dado que eu esteja na pagina inicial do Google", function () {
    context("Quando eu buscar por youtube", function () {
      it("Então o resultado da busca deve ter o link para o youtube no primeiro resultado", () => {
        cy.visit('/')
        cy.get('.gLFyf').type("youtube")
        cy.get('.gLFyf').type('{enter}')
        cy.get('#rcnt').contains('https://www.youtube.com')
      });
    });
  });

  describe("Dado que eu busquei o youtube no google", function () {
    context("Quando eu quando eu clicar no primeiro link dos resultados", function () {
      it("Então sou redirecionado para o site do youtube", () => {
        cy.visit('/')
        cy.get('.gLFyf').type("youtube")
        cy.get('.gLFyf').type('{enter}')
        cy.get('[href="https://www.youtube.com/"]').click()
        cy.url().should('be.equal','https://www.youtube.com/')
      });
    });
  });