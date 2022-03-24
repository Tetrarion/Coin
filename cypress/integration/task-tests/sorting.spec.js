describe('Sorting', () => {
  it('Click to the header list item and see if coins list change', () => {
    cy.visit('http://localhost:3000/');

    cy.intercept('https://api.coincap.io/v2/assets*').as(
      'getCoins',
    );

    cy.wait('@getCoins').then(() => {
      cy.get('.top__list-item')
        .each(($el, index) => {
          cy.get($el)
            .click();
          cy.get('.coin').first()
            .find('.coin__info')
            .each(($coin, num) => {
              if (index === num) {
                if (index === 0) {
                  cy.get($coin)
                    .contains(2000);
                } else if (index === 1) {
                  cy.get($coin)
                    .should('exist');
                } else if (index === 3) {
                  cy.get($coin)
                    .contains('-');
                } else {
                  cy.get($coin)
                    .contains(0.00);
                }
              }
            });
        });

      cy.get('.top__list-item-lg')
        .each(($el, index) => {
          cy.get($el)
            .click();
          cy.get('.coin').first()
            .find('.coin__info-sm')
            .each(($coin, num) => {
              if (index === num) {
                cy.get($coin)
                  .contains(0.00);
              }
            });
        });
    });
  });
});
