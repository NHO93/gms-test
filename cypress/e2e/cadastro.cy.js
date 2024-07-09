/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Cadastro de campos obrigatorios', () => {
   var email = `test${Date.now()}@test.com`

    cy.preencherCadastro('Teste', 'Seset', email, '11999999999', 'T@123456')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })

  it('Email já cadastrado', () => {
    cy.preencherCadastro('Teste', 'Seset', email, '11999999999', 'T@123456')
    cy.get('#signup-response').should('contain', 'E-mail já cadastrado')
  })

  it('Nome inválido', () => {
    cy.preencherCadastro('Teste@', 'Seset', email, '11999999999', 'T@123456')
    cy.get('#signup-response').should('contain', 'Nome inválido')
  })

  it('Sobrenome inválido', () => {
    cy.preencherCadastro('Teste', 'Seset@', email, '11999999999', 'T@123456')
      cy.get('#signup-response').should('contain', 'Sobrenome inválido')
  })

  it('Telefone inválido', () => {
    cy.preencherCadastro('Teste', 'Seset', email, '1199999gf999', 'T@123456')
    cy.get('#signup-response').should('contain', 'Telefone inválido')
  })

  it('Senha inválida', () => {
    cy.preencherCadastro('Teste', 'Seset', email, '11999999999', '1234')
    cy.get('#signup-response').should('contain', 'Senha inválida')
  })

  it('Campos obrigatórios não preenchidos', () => {
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Preencha todos os campos')
  })
})