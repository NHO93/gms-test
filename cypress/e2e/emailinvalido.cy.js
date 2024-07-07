///<reference types="cypress" />

describe('US-012-Funcionalidade: Formato de E-mail inváido', () => {
    it('E-mail inválido', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#signup-firstname').type('Teste')
      cy.get('#signup-lastname').type('Silva')
      cy.get('#signup-email').type('@test.com')
      cy.get('#signup-phone').type('11988556611')
      cy.get('#signup-password').type('Test123456@')
      cy.get('#signup-button').click()
      cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  
  })
  })