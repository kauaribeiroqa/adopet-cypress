describe('Página de Cadastro', () => {
  it('deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Cristiano Ronaldo');
    cy.get('[data-test="input-email"]').type('cristiano.ronaldo12@email.com');
    cy.get('[data-test="input-password"]').type('Cristiano123');
    cy.get('[data-test="input-confirm-password"]').type('Cristiano123');
    cy.get('[data-test="submit-button"]').click();
  })
})