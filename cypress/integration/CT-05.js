/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('CT 05.00', () => {
  it('CT 05.00: Validar página ativa ', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-6').click({ force: true })
    cy.get('.seg-6').should('have.class', 'seg-active')
  })

  it('CT 05.01: Deve validar o texto do titulo', () => {
    const title = 'Softwares de gestão para produtores de grãos e algodão'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-6').click({ force: true })
    cy.get('.seg-6').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > h2').should('have.text', title)
  })

  it('CT 05.01: Deve validar o texto da descrição', () => {
    const description = 'Gestão do planejamento da safra à contabilidade. Com o Grupo Siagri você gerencia seu negócio de ponta a ponta, centralizando a gestão administrativa, financeira, fiscal e operacional.'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-6').click({ force: true })
    cy.get('.seg-6').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > p').should('have.text', description)
  })

  it('CT 05.01: Deve validar abertura de formulário ao clicar em "SOLCITE DEMONSTRAÇÃO"', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-6').click({ force: true })
    cy.get('.seg-6').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click()
    cy.get('.modal-form-body').should('exist')
  })

  it('CT 05.02: Deve validar presença de alguns desafios', () => {
    const challengesToValidate = ['Planejamento de safra', 'Gestão de estoque (armazenagem)', 'Controle de custos',
      'Padronização de processos', 'Gestão orçamentária']
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-6').click({ force: true })
    cy.get('.seg-6').should('have.class', 'seg-active')
    cy.get('.beneficio-row').then((elements) => {
      const actualChallenges = Array.from(elements, element => element.innerText)
      challengesToValidate.forEach(element => {
        expect(actualChallenges).to.include(element)
      })
    })
  })
})
