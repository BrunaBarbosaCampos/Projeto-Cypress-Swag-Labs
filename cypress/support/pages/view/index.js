import { el_view } from "./elements";

class viewPage {
  view_list_itens(amount) {
    cy.get(el_view.item).should("be.visible");
    cy.get(el_view.item).should("have.length", amount);
  }
}

export default new viewPage();
