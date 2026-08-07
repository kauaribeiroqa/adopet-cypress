describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    
    it('deve realizar login com sucesso', () => {
        cy.get('[data-test="input-loginEmail"]').type('cristiano.ronaldo12@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Cristiano123');
        cy.get('[data-test="submit-button"]').click();
    })
})