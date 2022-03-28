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

    cy.wait(1000).then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-symbol')
        .contains(/^A\w+/)
    });

    cy.get('.search__bar')
      .clear()
      .type('b');

    cy.wait(1000).then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-symbol')
        .contains(/^B\w+/)
    });

    cy.get('.search__bar')
      .clear()
      .type('c');

    cy.wait(1000).then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-name')
        .contains(/^C\w+/)
    });

    cy.get('.search__bar')
      .clear()
      .type('bit');

    cy.wait(1000).then(() => {
      cy.get('.coin')
        .first()
        .find('.coin__info-name')
        .contains(/^Bit\w+/)
    });
  });
});
