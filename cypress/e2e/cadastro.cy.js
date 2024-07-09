///<reference types="cypress"/>


describe('Us-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });


  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `cr${Date.now()}@teste.com`
    cy.preencherCadastro('Caja', 'vlaca', email, '369887452155', 'Teste@2024')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve validar mensagem de erro com o campo nome invalido', () => {
    cy.preencherCadastro('Caja20', 'vlac', 'cr@teste.com', '369887452155', 'Teste@2024')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')

  });

  it('Nao deve fazer o cadastro quando sobrenome invalido', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', 'a1s2d3f4', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar mensagem de erro de senha fraca', () => {
    var email = `cr${Date.now()}@teste.com`
    cy.preencherCadastro('Caja', 'Vlac', email, '369887452155', 'teste@2024')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial')

  });

  it('Deve validar mensagem de erro email já cadastro', () => {
    cy.preencherCadastro('Caja', 'Vlac', 'cr1720484759903@teste.com', '369887452155', 'Teste@2024')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado')

  });

});