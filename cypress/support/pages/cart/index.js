import { el_cart } from "./elements";

class cartPage {
  access_cart() {
    cy.get(el_cart.cart_btn).click();
  }

  access_menu() {
    cy.get(el_cart.menu).click();
  }
  advance_checkout() {
    cy.get(el_cart.adv_btn).click();
  }
  add_item(name) {
    cy.get(el_cart.item_name)
      .contains(name)
      .parent()
      .parent()
      .parent()
      .find(el_cart.add_item)
      .click();
  }

  back_home() {
    cy.get(el_cart.back_home_btn).click();
  }

  cancel_purchase() {
    cy.get(el_cart.cancel_btn).click();
  }

  fills_informations(name, last_name, postal_code) {
    cy.get(el_cart.name).type(name);
    cy.get(el_cart.last_name).type(last_name);
    cy.get(el_cart.postal_code).type(postal_code);
  }

  logout() {
    cy.get(el_cart.logout).click();
  }

  message_error(text) {
    cy.get(el_cart.error_message).should("contain.text", text);
  }

  remove_item(name) {
    cy.get(el_cart.item_name)
      .contains(name)
      .parent()
      .parent()
      .parent()
      .find(el_cart.remove_btn)
      .click();
  }

  validate_add(name) {
    cy.get(el_cart.item_name)
      .contains(name)
      .parent()
      .parent()
      .parent()
      .find(el_cart.remove_btn)
      .should("contain.text", "Remove");
  }

  validate_remove(name) {
    cy.get(el_cart.item_name)
      .contains(name)
      .parent()
      .parent()
      .parent()
      .find(el_cart.add_item)
      .should("contain.text", "Add to cart");
  }

  validate_items_cart(amount) {
    cy.get(el_cart.item_name).should("have.length", amount);
  }

  validate_message_success() {
    cy.get(el_cart.message_success).should(
      "contain.text",
      "Thank you for your order!"
    );
  }

  validate_price_purchase() {
    cy.get(el_cart.item_price).then(($prices) => {
      //  Transforma o texto dos elementos em número decimal e realiza a soma e comparação
      const sumItems = $prices
        .map((i, el) => parseFloat(el.innerText.replace("$", "")))
        .get()
        .reduce((acc, curr) => acc + curr, 0);

      //  Transforma o texto da soma dos itens em número decimal
      cy.get(el_cart.sum_items)
        .invoke("text")
        .then((text) => {
          const totalItems = parseFloat(text.replace("Item total: $", ""));

          //  Transforma o texto do valor da taxa em número decimal
          cy.get(el_cart.rate_item)
            .invoke("text")
            .then((text) => {
              const totalRate = parseFloat(text.replace("Tax: $", ""));

              //  Transforma o texto do valor total dos itens em número decimal
              cy.get(el_cart.total_price)
                .invoke("text")
                .then((text) => {
                  const totalPrice = parseFloat(text.replace("Total: $", ""));

                  //
                  expect(sumItems).to.eq(totalItems);

                  //  Soma o valor total dos itens com o valor da taxa
                  const sumTotal = totalItems + totalRate;

                  expect(sumTotal).to.eq(totalPrice);
                });
            });
        });
    });
  }
}

export default new cartPage();
