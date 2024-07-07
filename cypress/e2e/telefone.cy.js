///<reference types="cypress" />

describe('US-012-Funcionalidade: Telefone', () => {
    it('Telefone não obrigatório', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#signup-firstname').type('ASiDE')
      cy.get('#signup-lastname').type('Souzinha')
      cy.get('#signup-email').type('tesi4y54@tesst.com')
      cy.get('#signup-phone').type('#458')
      cy.get('#signup-password').type('Test123@')
      cy.get('#signup-button').click()
      cy.get('#signup-response').should('contain' ,'Telefone deve conter apenas números')
  
  })
  })