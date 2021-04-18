/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('CT 02.00', () => {
  it('CT 02.00: Validar página ativa ', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-3').click({ force: true })
    cy.get('.seg-3').should('have.class', 'seg-active')
  })

  it('CT 02.01: Deve validar o texto do titulo', () => {
    const title = 'Softwares para gestão de distribuidores e revendas de insumos agrícolas'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-3').click({ force: true })
    cy.get('.seg-3').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > h2').should('have.text', title)
  })

  it('CT 02.01: Deve validar o texto da descrição', () => {
    const description = 'Otimize processos, reduza desperdícios e tenha o controle de suas lojas em qualquer hora e lugar. Com o Grupo Siagri, você compra melhor, evita perdas no estoque, vende com mais eficiência e ainda tem mais segurança nas operações de Barter!'
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-3').click({ force: true })
    cy.get('.seg-3').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > p').should('have.text', description)
  })

  it('CT 02.01: Deve validar abertura de formulário ao clicar em "SOLCITE DEMONSTRAÇÃO"', () => {
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.seg-3').click({ force: true })
    cy.get('.seg-3').should('have.class', 'seg-active')
    cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click()
    cy.get('.modal-form-body').should('exist')
  })

  it('CT 02.02: Deve validar presença de alguns desafios', () => {
    const challengesToValidate = ['Estoque eficiente', 'Formação de preços', 'Gestão de logística (expedição)',
      'Ampliar mix de atividades (armazenagem, Barter etc)', 'Gestão orçamentária']
    cy.visit('https://www.siagri.com.br/segmentos')
    cy.get('.beneficio-row').then((elements) => {
      const actualChallenges = Array.from(elements, element => element.innerText)
      challengesToValidate.forEach(element => {
        expect(actualChallenges).to.include(element)
      })
    })
  })
})
