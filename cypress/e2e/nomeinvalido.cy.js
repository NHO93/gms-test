///<reference types="cypress" />

describe('US-012-Funcionalidade: Nome', () => {
    it('Nome inválido', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#signup-firstname').type('')
      cy.get('#signup-lastname').type('SEIL')
      cy.get('#signup-email').type('tesiy545@test.com')
      cy.get('#signup-phone').type('11984587')
      cy.get('#signup-password').type('Test123@')
      cy.get('#signup-button').click()
      cy.get('#signup-response').should('contain' ,'Nome não pode estar vazio')
  
  })
  })