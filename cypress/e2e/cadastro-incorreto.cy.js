describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  it('deve cadastrar um novo usuário incorretamente', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })
})