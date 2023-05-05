/// <reference types="Cypress" />


import BlogElements from '../elements/BlogElements'
const blogElements = new BlogElements

class BlogPage {
  // Acessa o site que será testado
  accessSite() {
    cy.viewport(1920, 1080)
    cy.visit("https://blogdoagi.com.br/");

  }

  // Clica no botão de pesquisa
  clickOnSearch() {
    cy.get(blogElements.searchIcon()).click({ force: true })
  }

  //Verifica se a barra de pesquisa está sendo exibida
  verifySearchBar() {
    cy.get(blogElements.searchBar()).should('be.visible')
  }

  //Verifica se a barra de pesquisa não está sendo exibida
  verifySearchBarDisappear() {
    cy.get(blogElements.searchBar()).should('not.be.visible')
  }
}

export default BlogPage;