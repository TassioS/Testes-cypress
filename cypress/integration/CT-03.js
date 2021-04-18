/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('CT 03.00', () => {
  it('CT 03.00: Validar página ativa ', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-4').click({ force: true })
    cy.get('.seg-4').should('have.class', 'seg-active')
  })

  it('CT 03.01: Deve validar o texto do titulo', () => {
    const title = 'Softwares para gestão de lojas e varejo agropecuário'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-4').click({ force: true })
    cy.get('.seg-4').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > h2').should('have.text', title)
  })

  it('CT 03.01: Deve validar o texto da descrição', () => {
    const description = 'Ganhe agilidade em vendas, confiança nos controles de estoque e custos. Fidelize seu cliente e gerencie sua loja agropecuária de forma completa com o software Siagri.'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-4').click({ force: true })
    cy.get('.seg-4').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > p').should('have.text', description)
  })

  it('CT 03.01: Deve validar abertura de formulário ao clicar em "SOLCITE DEMONSTRAÇÃO"', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-4').click({ force: true })
    cy.get('.seg-4').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click()
    cy.get('.modal-form-body').should('exist')
  })

  it('CT 03.02: Deve validar presença de alguns desafios', () => {
    const challengesToValidate = ['Agilidade no atendimento', 'Eficiência operacional', 'Controle de comissionamento',
      'Conformidade fiscal', 'Eficiência no fluxo de caixa em dia']
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-4').click({ force: true })
    cy.get('.seg-4').should('have.class', 'seg-active')
    cy.get('.beneficio-row').then((elements) => {
      const actualChallenges = Array.from(elements, element => element.innerText)
      challengesToValidate.forEach(element => {
        expect(actualChallenges).to.include(element)
      })
    })
  })
})
