describe('Pagination', () => {
  it('Will the coins change when you change the page', () => {
    cy.visit('http://localhost:3000/');

    cy.intercept('http://localhost:4000/graphql*').as('getCoins');

    cy.wait('@getCoins').then(() => {
      cy.get('.pagination__list-item')
        .each(($el, index) => {
          if (index < 10) {
            cy.get($el)
              .click()
              .should('have.class', 'pagination__list-item--selected');
            if (index === 0) {
              cy.get('.coin')
                .last()
                .find('.coin__info')
                .first()
                .should('contain', (index + 1) * 10);
            } else {
              cy.get(`[rank=${(index + 1) * 10}]`)
                .find('.coin__info')
                .first()
                .should('contain', (index + 1) * 10);
            }
          }
        });
    });
  });
});
