import filterPage from "../support/pages/filter/index.js";
import loginPage from "../support/pages/login/index.js";
import { password, username } from "../fixtures/pages/login/login.js";

describe("Filtering scenario", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.login(username.standard_user, password.default_password);
  });

  it("Filtering by name Z to A", () => {
    filterPage.filter_by_name("Z to A");
    filterPage.verific_name_items("Z to A");
  });

  it("Filtering by name A to Z", () => {
    filterPage.filter_by_name("A to Z");
    filterPage.verific_name_items("A to Z");
  });

  it("Filtering by price high to low", () => {
    filterPage.filter_by_price("high to low");
    filterPage.verific_price_items("high to low");
  });

  it("Filtering by price low to high", () => {
    filterPage.filter_by_price("low to high");
    filterPage.verific_price_items("low to high");
  });
});
