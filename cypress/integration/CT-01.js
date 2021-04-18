/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Teste para validar segmentos', () => {
  const segments = ['Distribuidor de insumos',
    'Loja agropecuária', 'Armazéns gerais', 'Produtor agrícola', 'Sementeira', 'Outros']

  it('Deve validar os segmentos existentes', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.segmIcon').siblings().then((elements) => {
      const actualSegments = Array.from(elements, element => element.innerText)
      segments.forEach(element => {
        expect(actualSegments).to.include(element)
      })
    })
  })

  it('Deve validar se existem apenas 6 segmentso atendidos', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('#seg-3')
      .children()
      .should('have.length', segments.length)
  })
})
