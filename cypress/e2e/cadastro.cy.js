/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('AA')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('tes1@test.com')
    cy.get('#signup-phone').type('11988556611')
    cy.get('#signup-password').type('Test123456@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })

})