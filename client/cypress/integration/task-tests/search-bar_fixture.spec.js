/* eslint-disable jest/valid-expect-in-promise */
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
      .type('ak');

    cy.fixture('coins_ak').then((coins) => {
      coins.forEach((coin) => {
        expect(coin.name).match(/^Ak\w+/);
      });
    });

    cy.get('.search__bar')
      .clear()
      .type('qu');

    cy.fixture('coins_qu').then((coins) => {
      coins.forEach((coin) => {
        expect(coin.name).match(/^Qu\w+/);
      });
    });

    cy.get('.search__bar')
      .clear()
      .type('biz');

    cy.intercept('http://localhost:4000/graphql*').as('getBiz');

    cy.wait('@getBiz').then(() => {
      cy.get('.coin[id^=biz]')
        .should('have.length', 0);
    });

    cy.get('.search__bar')
      .clear()
      .type('bir');

    cy.fixture('coins_bir').then((coins) => {
      coins.forEach((coin) => {
        expect(coin.name).match(/^Bir\w+/);
      });
    });
  });
});
