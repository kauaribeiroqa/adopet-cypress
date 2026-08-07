describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  it('deve cadastrar um novo usuário com sucesso', () => {
    cy.get('[data-test="input-name"]').type('Cristiano Ronaldo');
    cy.get('[data-test="input-email"]').type('cristiano.ronaldo12@email.com');
    cy.get('[data-test="input-password"]').type('Cristiano123');
    cy.get('[data-test="input-confirm-password"]').type('Cristiano123');
    cy.get('[data-test="submit-button"]').click();
  })
})