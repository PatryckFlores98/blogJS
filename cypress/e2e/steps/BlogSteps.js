// cypress/e2e/duckduckgo.ts
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BlogPage from '../pages/actions/BlogActions'
const blogPage = new BlogPage


Given("I visit the AGI site", () => {
    blogPage.accessSite();
});

When("click on search icon", () => {
    blogPage.clickOnSearch();
    blogPage.verifySearchBar();

  
});

When("I click on search icon", () => {
    blogPage.clickOnSearch();
  
});

Then("the search bar should be correctly displayed", () => {
    blogPage.verifySearchBar();
  
});

Then("the search bar should be correctly disappeared", () => {
    blogPage.verifySearchBarDisappear();
  
});