class LoginPage {
    userNameInputField = '[name="username"]';
    passwordInputField = 'input[name="password"]';
    loginButton = '.orangehrm-login-button';


    loginWithCredentials(username, password) {
        cy.get(this.userNameInputField).type(username,{timeout: 1000});
        cy.get(this.passwordInputField).type(password,{timeout: 1000});
        cy.get(this.loginButton).click();
    }

    loginWithUserNameEmpty(password) {
        cy.get(this.passwordInputField).type(password,{timeout: 1000});
        cy.get(this.loginButton).click();
    }

    loginWithPasswordEmpty(username) {
        cy.get(this.userNameInputField).type(username,{timeout: 1000});
        cy.get(this.loginButton).click();
    }

    loginWithBothFieldEmpty() {
        cy.get(this.loginButton).click();
    }
}
module.exports = LoginPage;