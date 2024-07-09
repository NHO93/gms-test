/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer Cadastro de campos obrigatorios', () => {
   var email = `test${Date.now()}@test.com`

    cy.preencherCadastro('sam', 'Soeset', email, '11999999999', 'T@123456')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })

 it('Deve validar mensagem com Nome inválido', () => {
    cy.preencherCadastro('Test@', 'Seset', 'test@testando.com', '1197788996655', 'T@1234569')
    cy.get('#signup-response').should('contain', 'Nome inválido')
  })

  it('Deve validar mensagem de erro no campo Email ', () => {
    cy.preencherCadastro('Samm', 'Semm', '@tes4tando.com', '11988442236', 'T@1234568')
    cy.get('#signup-response').should('contain', 'E-mail inválido')
  })

  it('Deve validar mensagem de erro do Sobrenome', () => {
    cy.preencherCadastro('Cam', 'Ses4et@', 'sae34@tesn.com', '11966332255', 'T@1234567')
      cy.get('#signup-response').should('contain', 'Sobrenome inválido')
  })

  it('Deve validar mensagem do campo Telefone', () => {
    cy.preencherCadastro('Tessyte', 'Sestt', 'santos@test.com', '11', 'T@1234565')
    cy.get('#signup-response').should('contain', 'Telefone inválido')
  })

  it('Deve validar mensagem de erro no campo de Senha', () => {
    cy.preencherCadastro('Tette', 'Set', 'est@test.com', '11999889999', '1234')
    cy.get('#signup-response').should('contain', 'Senha inválida')
  })

})