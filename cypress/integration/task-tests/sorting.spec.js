describe('Sorting', () => {
  it('Click to the header list item and see if coins list change', () => {
    cy.visit('http://localhost:3000/');

    cy.intercept('https://api.coincap.io/v2/assets?limit=2000').as(
      'getCoins',
    );

    cy.wait('@getCoins').then(() => {
      cy.get('.top__list-item')
        .each(($el, index) => {
          cy.get($el)
            .click();
          cy.get('.coin')
            .first()
            .find('.coin__info')
            .each(($info, num) => {
              if (index === num) {
                if (index === 0) {
                  cy.get($info)
                    .should('contain', 2000);
                } else if (index === 1) {
                  cy.get($info)
                    .should('exist');
                } else if (index === 3) {
                  cy.get($info)
                    .should('contain', '-');
                } else {
                  cy.get($info)
                    .should('contain', 0.00);
                }
              }
            });
        });

      cy.get('.top__list-item-lg')
        .each(($el, index) => {
          cy.get($el)
            .click();
          cy.get('.coin').first()
            .find('.coin__info-lg')
            .each(($coin, num) => {
              if (index === num) {
                cy.get($coin)
                  .should('contain', 0.00);
              }
            });
        });
    });
  });
});
