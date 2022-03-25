describe('Search-bar', () => {
  it('Open search-bar', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.search__image')
      .click();
    cy.get('.search__bar')
      .should('be.visible');
  });

  it('Enter something into search bar and see if coins list changed', () => {
    cy.get('.search__bar')
      .type('a');

    cy.intercept('https://api.coincap.io/v2/assets*').as(
      'getCoins',
    );

    cy.wait('@getCoins').then(() => {
      cy.get('.coin')
        .first()
        .get('.coin__info-name')
        .should('include.text', 'C');
    });
  });
});
