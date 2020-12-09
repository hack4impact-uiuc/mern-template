/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads', () => {
    cy.visit('/');
  });
});
