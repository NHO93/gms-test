/// <reference types="cypress" />

describe('US-012-Funcionalidade: Limpar', () => {
    it('Limpar busca', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type('the matrix')
      cy.get('#clear-button').click()
        cy.get('#search-response').should('contain', 'Nenhum resultado encontrado')
    })
})