/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicaçao', function(){
        cy.title().should('be.equals','Central de Atendimento ao Cliente TAT')
    })

    it('preeche os campos obrigatorios e envia o formulario', function() {
        const longText = 'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
        cy.get('#firstName').type('fabio')
        cy.get('#lastName').type('macieira')
        cy.get('#email').type('fabiomacieira@icloud.com.br')
        cy.get('#open-text-area').type(longText, { dalay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação invalida', function(){
        cy.get('#firstName').type('fabio')
        cy.get('#lastName').type('macieira')
        cy.get('#email').type('fabiomacieira@icloud,com.br')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

})


