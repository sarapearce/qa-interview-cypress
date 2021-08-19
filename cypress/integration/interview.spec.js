describe('a basic set of tests', () => {

  it('can visit the homepage', () => {
    cy.visit('/');
    cy.contains('todos').should('be.visible');
  });

});