import loginPage from "../support/pages/login/index.js";
import { password, username } from "../fixtures/pages/login/login.js";

describe("Login scenario", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Login with standard user successfully", () => {
    loginPage.login(username.standard_user, password.default_password);
    loginPage.verification_login();
  });

  it("Login with visual user successfully", () => {
    loginPage.login(username.visual_user, password.default_password);
    loginPage.verification_login();
  });

  it("Error when loggin wiht wrong credentials", () => {
    loginPage.login(username.locked_out_user, password.default_password);
    loginPage.message_error(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("Error when the user doesn't fill in both fields", () => {
    loginPage.login_empty("both");
    loginPage.message_error("Epic sadface: Username is required");
  });

  it("Error when the user doesn't fill the username field", () => {
    loginPage.login_empty("username", "", password.default_password);
    loginPage.message_error("Epic sadface: Username is required");
  });

  it("Error when the user doesn't fill the password field", () => {
    loginPage.login_empty("password", username.standard_user);
    loginPage.message_error("Epic sadface: Password is required");
  });

  it("The user closes the error message that is displayed", () => {
    loginPage.login_empty("both");
    loginPage.close_error();
    loginPage.verification_message_close();
  });
});
