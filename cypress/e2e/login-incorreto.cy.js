describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.title('AdoPet');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="submit-button"]').click();
    })
    
    it('deve realizar login incorretamente', () => {
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    })
})