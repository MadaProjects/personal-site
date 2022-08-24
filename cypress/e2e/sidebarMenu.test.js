describe('Sidebar Menu', () => {
  beforeEach(() => {
    cy.visit('/').get('main');
    cy.injectAxe();
  });

  it('check all links to sites', () => {
    cy.visit('/');
    cy.get("a:not([href*='mailto:']), a:not([href*='tel:'])").each(
      (page) => {
        cy.request(page.prop('href'));
      }
    );
  });

  it('is hidden on load', () => {
    cy.get('#drawer-navigation').should('not.be.visible');
  });

  it('open menu', () => {
    cy.findByRole('button', { name: 'Open sidebar menu' }).click();
    cy.get('#drawer-navigation').should('be.visible');
  });

  it('close menu on close btn click', () => {
    cy.findByRole('button', { name: 'Open sidebar menu' }).click();
    cy.get('#drawer-navigation').should('be.visible');
    cy.findByRole('button', { name: 'Close menu' }).click();
    cy.get('#drawer-navigation').should('not.be.visible');
  });

  it('close menu on overlay click', () => {
    cy.findByRole('button', { name: 'Open sidebar menu' }).click();
    cy.get('#drawer-navigation').should('be.visible');
    cy.findByRole('button', {
      name: 'Background overlay for open menu',
    }).click();

    cy.get('#drawer-navigation').should('not.be.visible');
  });

  it('click on about me', () => {
    cy.findByRole('button', { name: 'Open sidebar menu' }).click();
    cy.findByRole('link', { name: 'About me' }).click();
    cy.location('pathname').should('eq', '/about-me');
  });

  it('click on my timeline', () => {
    cy.findByRole('button', { name: 'Open sidebar menu' }).click();
    cy.findByRole('link', { name: 'My Timeline' }).click();
    cy.location('pathname').should('eq', '/timeline');
  });

  it('click on my stack', () => {
    cy.findByRole('button', { name: 'Open sidebar menu' }).click();
    cy.findByRole('link', { name: 'My stack' }).click();
    cy.location('pathname').should('eq', '/stack');
  });

  it('click on contact', () => {
    cy.findByRole('button', { name: 'Open sidebar menu' }).click();
    cy.findByRole('link', { name: 'Contact' }).click();
    cy.location('pathname').should('eq', '/contact');
  });
});
