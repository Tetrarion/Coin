describe('Settings', () => {
  it('Show settings', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.settings__icon')
      .click();

    cy.get('.settings__list')
      .should('be.visible');
  });

  it('Change nunber of coins on the page', () => {
    cy.get('.select__list')
      .first()
      .select('12');

    cy.get('.coin')
      .should('have.length', 12);

    cy.get('.select__list')
      .first()
      .select('20');

    cy.get('.coin')
      .should('have.length', 20);
  });

  it('Change rate', () => {
    cy.get('.settings__icon')
      .click();

    cy.get('.select__input')
      .type('euro');

    cy.get('.coin')
      .each(($el) => {
        cy.get($el)
          .find('.coin__info')
          .each(($coin, index) => {
            if (index === 2) {
              cy.get($coin)
                .should('include.text', '€');
            }
          });

        cy.get($el)
          .find('.coin__info-lg')
          .each(($coin) => {
            cy.get($coin)
              .should('include.text', '€');
          });
      });

    cy.get('.popular-coins__info-price')
      .each(($el) => {
        cy.get($el)
          .should('include.text', '€');
      });

    cy.get('.settings__icon')
      .click();

    cy.get('.select__input')
      .clear()
      .type('russian-ruble');

    cy.get('.coin')
      .each(($el) => {
        cy.get($el)
          .find('.coin__info')
          .each(($coin, index) => {
            if (index === 2) {
              cy.get($coin)
                .should('include.text', '₽');
            }
          });

        cy.get($el)
          .find('.coin__info-lg')
          .each(($coin) => {
            cy.get($coin)
              .should('include.text', '₽');
          });
      });

    cy.get('.popular-coins__info-price')
      .each(($el) => {
        cy.get($el)
          .should('include.text', '₽');
      });
  });
});
