import loginPage from "../support/pages/login/index.js";
import viewPage from "../support/pages/view/index.js";
import { password, username } from "../fixtures/pages/login/login.js";

describe("Viewing scenario", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.login(username.standard_user, password.default_password);
  });

  it("View the number of items in the list", () => {
    viewPage.view_list_itens(6);
  });
});
