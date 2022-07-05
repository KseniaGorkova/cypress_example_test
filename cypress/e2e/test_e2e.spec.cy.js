//const { ceil } = require("cypress/types/lodash")

describe('E2E Tests for saucedemo.com', () => {
  it("E2E Buy item",() =>{
  cy.fixture("cypressTest").then(data =>{
    cy.log("Open login page")
    cy.visit(data.main_url)

    cy.log("Input login")
    cy.get('[id="user-name"]').type(data.login)

    cy.log("Input password")
    cy.get('[id="password"]').type(data.password)

    cy.log("Click button Login")
    cy.get('[id="login-button"]').click()

    cy.log("Check login is correct")
    cy.get('[id="inventory_container"]').should('exist')

    cy.log("Add Backpack")
    cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()

    cy.log("Go to shoping card")
    cy.get('[id="shopping_cart_container"]').click()

    cy.log("Check added items")
    cy.get('[class="inventory_item_name"]').contains("Sauce Labs Backpack")

    cy.log("Click checkout")
    cy.get('[id="checkout"]').click()

    cy.log("Check checkout page")
    cy.get('[class="title"]').contains("Checkout: Your Information")

    cy.log("Input First Name")
    cy.get('[id="first-name"]').type(data.first_name)

    cy.log("Input Last Name")
    cy.get('[id="last-name"]').type(data.last_name)

    cy.log("Input Postal Code")
    cy.get('[id="postal-code"]').type(data.post_code)

    cy.log("Click Continue")
    cy.get('[id="continue"]').click()

    cy.log("Check Summary Total")
    cy.get('[class="summary_total_label"]').contains("32.39")

    cy.log("Click Finish")
    cy.get('[id="finish"]').click()

    cy.log("Check complete checkout")
    cy.get('[class="complete-header"]').contains("THANK YOU FOR YOUR ORDER")
  })
})
})
