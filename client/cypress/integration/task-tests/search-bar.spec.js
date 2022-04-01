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

    cy.intercept('http://localhost:4000/graphql*').as('getAk');

    cy.wait('@getAk').then(() => {
      cy.get('.coin[id^=ak]');

      cy.get('.coin')
        .each(($el) => {
          cy.get($el)
            .find('.coin__info-name')
            .invoke('text')
            .should('match', /^Ak\w+/);
        });
    });

    cy.get('.search__bar')
      .clear()
      .type('qui');

    cy.intercept('http://localhost:4000/graphql*').as('getQui');

    cy.wait('@getQui').then(() => {
      cy.get('.coin[id^=qui]');

      cy.get('.coin')
        .each(($el) => {
          cy.get($el)
            .find('.coin__info-name')
            .invoke('text')
            .should('match', /^Qui\w+/);
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

    cy.intercept('http://localhost:4000/graphql*').as('getBir');

    cy.wait('@getBir').then(() => {
      cy.get('.coin[id^=bir]');

      cy.get('.coin')
        .each(($el) => {
          cy.get($el)
            .find('.coin__info-name')
            .invoke('text')
            .should('match', /^Bir\w+/);
        });
    });
  });
});
