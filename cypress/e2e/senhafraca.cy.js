///<reference types="cypress" />

describe('US-012-Funcionalidade: Senha fraca', () => {
    it('Senha inválida', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#signup-firstname').type('Teste')
      cy.get('#signup-lastname').type('Silva')
      cy.get('#signup-email').type('tesiy@test.com')
      cy.get('#signup-phone').type('11984587')
      cy.get('#signup-password').type('Test123')
      cy.get('#signup-button').click()
      cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres,' 
        + 'incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"')
  
  })
  })