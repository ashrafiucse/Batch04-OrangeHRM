describe('Login Related Testcases', () => {
  beforeEach(()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  })

  it('should login with valid credentials', () => {
    //cy.get('input[name="username"]').type("Admin");
    cy.get('[name="username"]').type("Admin");
    cy.get('input[name="password"]').type('admin123');
    cy.get('.orangehrm-login-button').click();
    cy.url().should('include','dashboard');
    //cy.get(':nth-child(2) > .oxd-main-menu-item')
  });

  it('should not login with invalid credentials', () => {
    //cy.get('input[name="username"]').type("Admin");
    cy.get('[name="username"]').type("Admin");
    cy.get('input[name="password"]').type('admin1234');
    cy.get('.orangehrm-login-button').click();
    cy.contains('Invalid credentials').should('be.visible');
  });

  it('validation message should be appeared when password field leave empty and username is filled out with valid username', () => {
    //cy.get('input[name="username"]').type("Admin");
    cy.get('[name="username"]').type("Admin");
    cy.get('.orangehrm-login-button').click();
    cy.contains('Required').should('be.visible');
  });

  it('validation message should be appeared when username and password are empty', () => {
    //cy.get('input[name="username"]').type("Admin");
    cy.get('.orangehrm-login-button').click();

    cy.get('.oxd-input-field-error-message').eq(0).should('contain','Required');
    cy.get('.oxd-input-field-error-message').eq(1).should('contain','Required');
    // cy.contains('Required').eq(0).should('be.visible');
    // cy.contains('Required').eq(1).should('be.visible');
  });

});