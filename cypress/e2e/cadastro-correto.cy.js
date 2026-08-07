describe('Página de Cadastro', () => {
  it('deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Cristiano Ronaldo');
    cy.get('input[name="email"]').type('cristiano.ronaldo12@email.com');
    cy.get('input[name="password"]').type('Cristiano123');
    cy.get('input[name="confirm_password"]').type('Cristiano123');
    cy.contains('button', 'Cadastrar').click();
  })
})