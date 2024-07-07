/// <reference types="cypress" />

describe('US-012-Funcionalidade: Buscar', () => {
    it('Cbusca de filmes', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type('the matrix')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'The Matrix')
    })
})