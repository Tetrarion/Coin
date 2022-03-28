describe('Navigation', () => {
  it('Visits the basket page', () => {
    cy.visit('https://tetrarion.github.io/Coin/');

    cy.get('.navigation__link').contains('Basket').click();

    cy.url().should('include', '/storepage');
  });

  it('Back to the main page', () => {
    cy.get('.navigation__link').contains('Coin').click();

    cy.url().should('include', '/');
  });

  it('Visits the coin info page', () => {
    cy.get('a[href*="infopage/bitcoin"]').click();

    cy.url().should('include', '/infopage/bitcoin');
  });
});
