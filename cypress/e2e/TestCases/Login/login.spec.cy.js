const LoginPage = require("../../Pages/LoginPage/loginPage");

describe('Login Related Testcases', () => {
  const loginPage = new LoginPage();

  beforeEach(()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  })

  it('should login with valid credentials', () => {
    cy.wait(3000);
    loginPage.loginWithCredentials('Admin', 'admin123');
    cy.url().should('include','dashboard');
  });

  it('should not login with invalid credentials', () => {
    loginPage.loginWithCredentials('Admin','admin123456');
    cy.contains('Invalid credentials').should('be.visible');
  });

  it("Login without UserName", ()=> {
    loginPage.loginWithUserNameEmpty('admin1234');
    cy.contains('Required').should('be.visible');
  })

  it("Login without Password", ()=> {
    loginPage.loginWithPasswordEmpty('Admin');
    cy.contains('Required').should('be.visible');
  })

  it("Login with both field empty", ()=> {
    loginPage.loginWithBothFieldEmpty();
    cy.get('.oxd-input-field-error-message').eq(0).should('contain','Required');
    cy.get('.oxd-input-field-error-message').eq(1).should('contain','Required');
    // cy.contains('Required').eq(0).should('be.visible');
    // cy.contains('Required').eq(1).should('be.visible');
  })

  // it('validation message should be appeared when password field leave empty and username is filled out with valid username', () => {
  //   //cy.get('input[name="username"]').type("Admin");
  //   cy.get('[name="username"]').type("Admin");
  //   cy.get('.orangehrm-login-button').click();
  //   cy.contains('Required').should('be.visible');
  // });

  // it('validation message should be appeared when username and password are empty', () => {
  //   //cy.get('input[name="username"]').type("Admin");
  //   cy.get('.orangehrm-login-button').click();

  //   cy.get('.oxd-input-field-error-message').eq(0).should('contain','Required');
  //   cy.get('.oxd-input-field-error-message').eq(1).should('contain','Required');
  //   // cy.contains('Required').eq(0).should('be.visible');
  //   // cy.contains('Required').eq(1).should('be.visible');
  // });

});