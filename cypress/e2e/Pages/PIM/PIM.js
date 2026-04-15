import { faker } from '@faker-js/faker';
class PIM {
    addButtonLocator = 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]';
    firstNameInputField = 'input[placeholder="First Name"]';
    lastNameInputField = 'input[placeholder="Last Name"]';
    employeeId = 'body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
    fileUploaderLocator = '.oxd-file-input';
    createLoginSwitcher = '.oxd-switch-input';
    userNameInputField = 'body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
    passwordInputField = 'div[class="oxd-grid-item oxd-grid-item--gutters user-password-cell"] div[class="oxd-input-group oxd-input-field-bottom-space"] div input[type="password"]';
    confirmPasswordInputField = 'div[class="oxd-grid-item oxd-grid-item--gutters"] div[class="oxd-input-group oxd-input-field-bottom-space"] div input[type="password"]';


    navigateToEmployeeListingPage() {
        cy.contains('PIM').click();
    }

    employeeAddWithOnlyName(firstName,LastName) {
        const number = faker.number.int(1000);
        cy.get(this.addButtonLocator).click();
        cy.get(this.firstNameInputField).type(firstName);
        cy.wait(2000);
        cy.get(this.lastNameInputField).type(LastName);
        cy.wait(2000);
        cy.get(this.employeeId).type(number);
        cy.get(this.fileUploaderLocator).selectFile('cypress/fixtures/unnamed.png',{force: true});
        cy.contains('Save').click();
    }

    employeeWithLoginDetails(firstName,lastName, userName, password) {
        const number = faker.number.int(1000);
        cy.get(this.addButtonLocator).click();
        cy.get(this.firstNameInputField).type(firstName);
        cy.wait(2000);
        cy.get(this.lastNameInputField).type(lastName);
        cy.wait(2000);
        cy.get(this.employeeId).type(number);
        cy.get(this.fileUploaderLocator).selectFile('cypress/fixtures/unnamed.png',{force: true});
        cy.get(this.createLoginSwitcher).click();
        cy.get(this.userNameInputField).type(userName);
        cy.get(this.passwordInputField).type(password);
        cy.get(this.confirmPasswordInputField).type(password);
        cy.contains('Save').click();

    }
}
module.exports = PIM;