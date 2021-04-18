/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('CT 04.00', () => {
  it('CT 04.00: Validar página ativa ', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-5').click({ force: true })
    cy.get('.seg-5').should('have.class', 'seg-active')
  })

  it('CT 04.01: Deve validar o texto do titulo', () => {
    const title = 'Softwares para gestão de armazéns gerais e cerealistas'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-5').click({ force: true })
    cy.get('.seg-5').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > h2').should('have.text', title)
  })

  it('CT 04.01: Deve validar o texto da descrição', () => {
    const description = 'Ganhe eficiência desde o recebimento até a expedição dos grãos. Com o Grupo Siagri, você gerencia todos os processos de armazenagem de grãos com agilidade e segurança.'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-5').click({ force: true })
    cy.get('.seg-5').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > p').should('have.text', description)
  })

  it('CT 04.01: Deve validar abertura de formulário ao clicar em "SOLCITE DEMONSTRAÇÃO"', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-5').click({ force: true })
    cy.get('.seg-5').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click()
    cy.get('.modal-form-body').should('exist')
  })

  it('CT 04.02: Deve validar presença de alguns desafios', () => {
    const challengesToValidate = ['Gestão de contratos', 'Controle de saldo de terceiros', 'Controle de retenções e transgenia',
      'Análise de exposição', 'Controle de serviços prestados']
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-5').click({ force: true })
    cy.get('.seg-5').should('have.class', 'seg-active')
    cy.get('.beneficio-row').then((elements) => {
      const actualChallenges = Array.from(elements, element => element.innerText)
      challengesToValidate.forEach(element => {
        expect(actualChallenges).to.include(element)
      })
    })
  })
})
