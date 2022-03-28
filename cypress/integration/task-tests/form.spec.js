describe('Form', () => {
  it('Show form', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.coin')
      .each(($el) => {
        cy.get($el)
          .click()
          .find('.coin__form')
          .should('be.visible');
      });
  });

  it('Enter numeric (integer and fractional) and string value', () => {
    cy.get('.coin').first()
      .click()
      .find('.input__bar')
      .type('Text')
      .should('have.value', '')
      .type(11)
      .should('have.value', 11)
      .clear()
      .type(1.45)
      .should('have.value', 1.45);
  });

  it('Test success message', () => {
    cy.get('.coin')
      .each(($el, index) => {
        if (index === 0) {
          cy.get($el)
            .find('.button')
            .click();
          cy.get('.message')
            .should('not.have.class', 'message--hidden');

          cy.get($el)
            .find('.input__bar')
            .clear()
            .type(-11);
          cy.get($el)
            .find('.button')
            .click();
          cy.get('.message')
            .should('have.class', 'message--hidden');
        }
      });
  });

  it('Test error message', () => {
    cy.get('.input__error-text')
      .should('not.be.visible').then(() => {
        cy.get('.coin')
          .each(($el, index) => {
            if (index === 0) {
              cy.get($el)
                .find('.input__bar')
                .clear()
                .type(-11);
              cy.get($el)
                .find('.button')
                .click();
              cy.get('.input__error-text')
                .should('be.visible');

              cy.get('.input__error-text')
                .should('not.be.visible').then(() => {
                  cy.get($el)
                    .click()
                    .find('.input__bar')
                    .clear()
                    .type(11);
                  cy.get($el)
                    .find('.button')
                    .click();
                  cy.get('.input__error-text')
                    .should('be.hidden');
                });
            }
          });
      });
  });
});
