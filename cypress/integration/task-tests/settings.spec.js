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
      .select('12')
      .click();

    cy.get('.coin')
      .should('have.length', 12);
  });
});
