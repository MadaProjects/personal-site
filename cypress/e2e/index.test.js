describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main');
    cy.injectAxe();
  });

  /*
  it('Navigates to page 2 and checks for accessibility violations', () => {
    cy.findByText(/open menu/i)
      .click()
      .checkA11y();
  });
  */

  it('Open menu', () => {
    cy.findByText('/open menu/i').click();
  });

  it('Focuses on the footer link and asserts its attributes', () => {
    cy.findAllByText('Gatsby').focus();

    cy.focused()
      .should('have.text', 'Gatsby')
      .should('have.attr', 'href', 'https://www.gatsbyjs.com')
      .should('not.have.css', 'outline-width', '0px');
  });
});
