/* eslint-disable no-undef */
describe('Test form', () => {
  it('Load main page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Enter number and string value', () => {
    cy.get('.coin')
      .each(($el, index) => {
        if (index === 0) {
          cy.get($el)
            .click()
            .find('.input__bar')
            .type('Text')
            .should('have.value', '')
            .type(11)
            .should('have.value', 11);
        }
      });
  });

  it('Test success message', () => {
    cy.get('.message')
      .should('be.hidden');
    cy.get('.coin')
      .each(($el, index) => {
        if (index === 0) {
          cy.get($el)
            .find('.input__bar')
            .type(11);
          cy.get($el)
            .find('.button')
            .click();
          cy.get('.message')
            .should('not.have.class', 'message--hidden');
        }
      });
  });
});
