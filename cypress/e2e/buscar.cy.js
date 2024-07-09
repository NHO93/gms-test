/// <reference types="cypress" />

describe('US-012-Funcionalidade: Buscar', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('Deve buscar filmes com sucesso', () => {
      cy.get('#search-input').type('the matrix')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'The Matrix')
       });

  it ('Deve buscar filmes com sucesso de uma lista', () => {
      cy.fixture('filmes').then((filmes) => {
          cy.get('#search-input').type(filmes[0].titulo)
          cy.get('#search-button').click()
          cy.get('#search-response').should('contain', filme[0].titulo)})
        });

        it ('Deve buscar filmes com sucesso de uma lista inteira', () => {
            cy.fixture('filmes').each((filmes) => {
                    cy.get('#search-input').clear().type(filmes.titulo)
                    cy.get('#search-button').click({force: true})
                    cy.get('#search-response').should('contain', filmes.titulo)
              });
        });
});