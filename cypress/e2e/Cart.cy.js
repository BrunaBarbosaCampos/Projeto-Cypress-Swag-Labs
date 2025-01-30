import loginPage from "../support/pages/login/index.js";
import cartPage from "../support/pages/cart/index.js";
import { information } from "../fixtures/pages/cart/cart.js";
import { password, username } from "../fixtures/pages/login/login.js";

describe("cart scenario", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.login(username.standard_user, password.default_password);
  });

  it("Adding items to cart", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");

    cartPage.validate_add("Sauce Labs Backpack");
    cartPage.validate_add("Sauce Labs Bolt T-Shirt");
  });

  it("Removing added items", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");

    cartPage.remove_item("Sauce Labs Backpack");
    cartPage.remove_item("Sauce Labs Bolt T-Shirt");

    cartPage.validate_remove("Sauce Labs Backpack");
    cartPage.validate_remove("Sauce Labs Bolt T-Shirt");
  });

  it("Viewing items in cart", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_cart();

    cartPage.validate_items_cart(2);
  });

  it("Removing items in cart", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_cart();
    cartPage.remove_item("Sauce Labs Backpack");
    cartPage.remove_item("Sauce Labs Bolt T-Shirt");

    cartPage.validate_items_cart(0);
  });

  it("Error when fields are not filled in", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_cart();
    cartPage.advance_checkout();
    cartPage.advance_checkout();
    cartPage.message_error("Error: First Name is required");
  });

  it("Filling in the details at checkout to make the purchase", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_cart();
    cartPage.advance_checkout();
    cartPage.fills_informations(
      information.name,
      information.last_name,
      information.postal_code
    );
    cartPage.advance_checkout();
  });

  it("Making the purchase to the final", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_cart();
    cartPage.advance_checkout();
    cartPage.fills_informations(
      information.name,
      information.last_name,
      information.postal_code
    );
    cartPage.advance_checkout();
    cartPage.advance_checkout();

    cartPage.validate_message_success();

    cartPage.back_home();

    cartPage.validate_remove("Sauce Labs Backpack");
    cartPage.validate_remove("Sauce Labs Bolt T-Shirt");
  });

  it("Canceling the purchase", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_cart();
    cartPage.advance_checkout();
    cartPage.fills_informations(
      information.name,
      information.last_name,
      information.postal_code
    );
    cartPage.advance_checkout();
    cartPage.cancel_purchase();

    cartPage.validate_add("Sauce Labs Backpack");
    cartPage.validate_add("Sauce Labs Bolt T-Shirt");
  });

  it("Calculating the purchase value", () => {
    cartPage.add_item("Sauce Labs Fleece Jacket");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_cart();
    cartPage.advance_checkout();
    cartPage.fills_informations(
      information.name,
      information.last_name,
      information.postal_code
    );
    cartPage.advance_checkout();

    cartPage.validate_price_purchase();
  });

  it("Logging out after adding items", () => {
    cartPage.add_item("Sauce Labs Backpack");
    cartPage.add_item("Sauce Labs Bolt T-Shirt");
    cartPage.access_menu();
    cartPage.logout();
    loginPage.login(username.standard_user, password.default_password);

    cartPage.validate_add("Sauce Labs Backpack");
    cartPage.validate_add("Sauce Labs Bolt T-Shirt");
  });
});
