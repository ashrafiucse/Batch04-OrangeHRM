import { faker } from '@faker-js/faker';
const PIM = require("../../Pages/PIM/PIM");
const LoginPage = require("../../Pages/LoginPage/loginPage");

describe("PIM Testing", ()=> {
    const loginPage = new LoginPage();
    const pim = new PIM();

    const username = faker.internet.username(); 
    const password = faker.internet.password();



    beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    })

    // it('Admin should be able to create a new employee with only information', ()=> {
    //     cy.get('[name="username"]').type("Admin");
    //     cy.get('input[name="password"]').type('admin123');
    //     cy.get('.orangehrm-login-button').click();
        
    //     const firstName1 = faker.person.firstName();
    //     const lastName1 = faker.person.lastName();
    //     cy.contains('PIM').click();
    //     cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    //     cy.get('input[placeholder="First Name"]').type(firstName1);
    //     cy.get('input[placeholder="Last Name"]').type(lastName1);
    //    // cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(number);
    //     cy.get('.oxd-file-input').selectFile('cypress/fixtures/unnamed.png',{force: true});
    //     cy.contains('Save').click();
    //     cy.wait(3000);
    //     cy.url().should('contain','viewPersonalDetails');
    //     //cy.contains('Personal Details').should('be.visible');
    //     //cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain','Personal Details');
    // })


    // it('Admin should be able to create a new employee with Login Credentials', ()=> {
    //     const firstName = faker.person.firstName();
    //     const lastName = faker.person.lastName();
    //     const number = faker.number.int(1000);
    //     loginPage.loginWithCredentials('Admin', 'admin123');
    //     pim.navigateToEmployeeListingPage();
    //     pim.employeeAddWithOnlyName(firstName,lastName);
    //     // cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    //     // cy.get('input[placeholder="First Name"]').type(firstName);
    //     // cy.get('input[placeholder="Last Name"]').type(lastName);
    //     // cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(number);
    //     // cy.get('.oxd-file-input').selectFile('cypress/fixtures/unnamed.png',{force: true});
    //     // cy.get('.oxd-switch-input').click();
    //     // cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(username);
    //     // cy.get('div[class="oxd-grid-item oxd-grid-item--gutters user-password-cell"] div[class="oxd-input-group oxd-input-field-bottom-space"] div input[type="password"]').type(password);
    //     // cy.get('div[class="oxd-grid-item oxd-grid-item--gutters"] div[class="oxd-input-group oxd-input-field-bottom-space"] div input[type="password"]').type(password);
    //     // cy.contains('Save').click();
    //     cy.wait(3000);
    //     cy.url().should('contain','viewPersonalDetails');
    // })


    it("Employee adding with Login Details", ()=> {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const number = faker.number.int(1000);
        loginPage.loginWithCredentials('Admin', 'admin123');
        pim.navigateToEmployeeListingPage();
        pim.employeeWithLoginDetails(firstName,lastName,username,password);
        cy.wait(3000);
        cy.url().should('contain','viewPersonalDetails');
    })

    it("Employee should be able to login with credentials", ()=> {
        cy.wait(2000);
        loginPage.loginWithCredentials(username,password);
        cy.url().should('include','dashboard');
    })


})