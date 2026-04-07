import { faker } from '@faker-js/faker';
describe("PIM Testing", ()=> {
    beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('[name="username"]').type("Admin");
    cy.get('input[name="password"]').type('admin123');
    cy.get('.orangehrm-login-button').click();
    })
    it('Admin should be able to create a new employee with only information', ()=> {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        cy.contains('PIM').click();
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
        cy.get('input[placeholder="First Name"]').type(firstName);
        cy.get('input[placeholder="Last Name"]').type(lastName);
        cy.get('.oxd-file-input').selectFile('cypress/fixtures/unnamed.png',{force: true});
        cy.contains('Save').click();
        cy.url().should('contain','viewPersonalDetails');
        //cy.contains('Personal Details').should('be.visible');
        //cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain','Personal Details');
    })
})