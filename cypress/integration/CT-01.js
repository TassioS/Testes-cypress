/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Teste para validar segmentos', () => {
  const segments = ['Distribuidor de insumos',
    'Loja agropecuária', 'Armazéns gerais', 'Produtor agrícola', 'Sementeira', 'Outros']

  it('Deve validar se existem apenas 6 segmentso atendidos', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('#seg-3')
      .children()
      .should('have.length', segments.length)
  })

  it('Deve validar o segmento Distribuidor de insumos', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-3 > span')
      .should('have.text', segments[0])
  })

  it('Deve validar o segmento Loja agropecuária', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-4 > span')
      .should('have.text', segments[1])
  })

  it('Deve validar o segmento Armazéns gerais', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-5 > span')
      .should('have.text', segments[2])
  })

  it('Deve validar o segmento Produtor agrícola', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-6 > span')
      .should('have.text', segments[3])
  })

  it('Deve validar o segmento Sementeira', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-7 > span')
      .should('have.text', segments[4])
  })

  it('Deve validar o segmento Outros', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-8 > span')
      .should('have.text', segments[5])
  })
})
