/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('CT 06.00', () => {
  it('CT 06.00: Validar página ativa ', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-7').click({ force: true })
    cy.get('.seg-7').should('have.class', 'seg-active')
  })

  it('CT 06.01: Deve validar o texto do titulo', () => {
    const title = 'Softwares para gestão de sementeiras'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-7').click({ force: true })
    cy.get('.seg-7').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > h2').should('have.text', title)
  })

  it('CT 06.01: Deve validar o texto da descrição', () => {
    const description = 'Ganhe eficiência no processo de beneficiamento de sementes. Com as soluções Siagri, você gerencia desde o recebimento do grão, até o embarque de sementes.'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-7').click({ force: true })
    cy.get('.seg-7').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > p').should('have.text', description)
  })

  it('CT 06.01: Deve validar abertura de formulário ao clicar em "SOLCITE DEMONSTRAÇÃO"', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-7').click({ force: true })
    cy.get('.seg-7').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click()
    cy.get('.modal-form-body').should('exist')
  })

  it('CT 06.02: Deve validar presença de alguns desafios', () => {
    const challengesToValidate = ['Gestão de recebimento, produção e expedição de sementes', 'Controle de lotes', 'Gestão de vendas das sementes',
      'Logística de embarque', 'Gestão da colheita e armazenagem de grãos']
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-7').click({ force: true })
    cy.get('.seg-7').should('have.class', 'seg-active')
    cy.get('.beneficio-row').then((elements) => {
      const actualChallenges = Array.from(elements, element => element.innerText)
      challengesToValidate.forEach(element => {
        expect(actualChallenges).to.include(element)
      })
    })
  })
})
