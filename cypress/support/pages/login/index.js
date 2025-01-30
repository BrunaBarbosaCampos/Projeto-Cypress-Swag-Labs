import { el_login } from "./elements";

class LoginPage {
  close_error() {
    cy.get(el_login.close_error).click();
  }

  login(username, password) {
    cy.get(el_login.username).type(username);
    cy.get(el_login.password).type(password);
    cy.get(el_login.login_btn).click();
  }

  login_empty(type, username, password) {
    switch (type) {
      case "both":
        cy.get(el_login.login_btn).click();
        break;

      case "password":
        cy.get(el_login.username).type(username);
        cy.get(el_login.login_btn).click();
        break;

      case "username":
        cy.get(el_login.password).type(password);
        cy.get(el_login.login_btn).click();
        break;
    }
  }

  message_error(text) {
    cy.get(el_login.error_message).should("have.text", text);
  }

  verification_login() {
    cy.get(el_login.logo).should("have.text", "Swag Labs");
  }

  verification_message_close() {
    cy.get(el_login.error_message).should("not.exist");
  }
}

export default new LoginPage();
