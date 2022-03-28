describe('Search-bar', () => {
  it('Open search-bar', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.search__image')
      .click();
    cy.get('.search__bar')
      .should('be.visible');
  });

  it('Enter something into search bar and see if coins list changed', () => {
    cy.get('.coin__info-symbol').last().as('Symbol');

    cy.get('.search__bar')
      .type('a');

    cy.intercept('https://api.coincap.io/v2/assets*').as('getCoins');

    cy.wait('@getCoins').then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-symbol')
        .invoke('text')
        .should('match', /^A\w+/);
    });

    cy.get('.search__bar')
      .clear()
      .type('e');

    cy.wait('@getCoins').then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-symbol')
        .invoke('text')
        .should('match', /^E\w+/);
    });

    cy.get('.search__bar')
      .clear()
      .type('c');

    cy.wait('@getCoins').then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-name')
        .invoke('text')
        .should('match', /^C\w+/);
    });

    cy.get('.search__bar')
      .clear()
      .type('bit');

    cy.wait('@getCoins').then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-name')
        .invoke('text')
        .should('match', /^Bit\w+/);
    });
  });
});
