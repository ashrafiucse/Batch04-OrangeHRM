describe('Login Related Testcases', () => {

  it('should login with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    //cy.get('input[name="username"]').type("Admin");
    cy.get('[name="username"]').type("Admin");
    cy.get('input[name="password"]').type('admin123');
    cy.get('.orangehrm-login-button').click();
    cy.url().should('include','dashboard');
    //cy.get(':nth-child(2) > .oxd-main-menu-item')
  });

  it('should not login with invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    //cy.get('input[name="username"]').type("Admin");
    cy.get('[name="username"]').type("Admin");
    cy.get('input[name="password"]').type('admin1234');
    cy.get('.orangehrm-login-button').click();
    cy.contains('Invalid credentials').should('be.visible');
  });

});