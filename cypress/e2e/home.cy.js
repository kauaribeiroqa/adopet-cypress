/// <reference types="cypress" />

describe('Teste de página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Verifica Título da Página', () => {
        cy.title().should('eq', 'AdoPet')
    });

    it('Verifica Textos da Home', () => {
        cy.contains('Quem ama adota!').should('be.visible')
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    });

    it('Teste Login icone de mensagem', () => {
        cy.get('.header__message').click()
        cy.get('[data-test="input-loginEmail"]').type('cristiano.ronaldo12@email.com')
        cy.get('[data-test="input-loginPassword"]').type('Cristiano123')
        cy.get('[data-test="submit-button"]').click()
    });
})
