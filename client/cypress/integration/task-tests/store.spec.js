describe('Store', () => {
  it('Add elements to store', () => {
    cy.visit('http://localhost:3000/');

    cy.intercept('http://localhost:4000/graphql').as(
      'getCoins',
    );

    cy.get('.coin').first()
      .click()
      .find('.input__bar')
      .type(10);
    cy.get('.coin').first()
      .find('.button')
      .click();

    cy.get('a[href*="/storepage"]')
      .should('include.text', '$')
      .click();

    cy.get('.coin')
      .should('have.length', 1);

    cy.get('a[href*="/*"]')
      .click();

    cy.wait('@getCoins').then(() => {
      cy.get('.coin')
        .each(($el, index) => {
          if (index === 4) {
            cy.get($el)
              .click()
              .find('.input__bar')
              .clear()
              .type(-5);
            cy.get($el)
              .find('.button')
              .click();

            cy.get('a[href*="/storepage"]')
              .click();

            cy.get('.coin')
              .should('have.length', 1);

            cy.get('a[href*="/*"]')
              .click();
          }
        });
    });

    cy.wait('@getCoins').then(() => {
      cy.get('.coin').last()
        .click()
        .find('.input__bar')
        .clear()
        .type(43);
      cy.get('.coin').last()
        .find('.button')
        .click();

      cy.get('a[href*="/storepage"]')
        .click();

      cy.get('.coin')
        .should('have.length', 2);
    });
  });

  it('Remove element from store', () => {
    cy.get('.coin').first()
      .find('.button').click();

    cy.get('.coin')
      .should('have.length', 1);
  });
});
