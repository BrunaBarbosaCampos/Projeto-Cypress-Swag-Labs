import { el_filter } from "./elements";

class filterPage {
  filter_by_name(type) {
    switch (type) {
      case "A to Z":
        cy.get(el_filter.filter_btn).select(el_filter.option_az);
        break;
      case "Z to A":
        cy.get(el_filter.filter_btn).select(el_filter.option_za);
        break;
    }
  }

  filter_by_price(type) {
    switch (type) {
      case "high to low":
        cy.get(el_filter.filter_btn).select(el_filter.price_high_low);
        break;
      case "low to high":
        cy.get(el_filter.filter_btn).select(el_filter.price_low_high);
        break;
    }
  }

  verific_name_items(type) {
    switch (type) {
      case "A to Z":
        cy.get(el_filter.item_name).then(($items) => {
          const nomes = $items.map((index, el) => Cypress.$(el).text()).get();
          const nomesOrdenados = [...nomes].sort();

          expect(nomes).to.deep.equal(nomesOrdenados);
        });

        break;
      case "Z to A":
        cy.get(el_filter.item_name).then(($items) => {
          const nomes = $items.map((index, el) => Cypress.$(el).text()).get();
          const nomesOrdenados = [...nomes].sort().reverse();

          expect(nomes).to.deep.equal(nomesOrdenados);
        });

        break;
    }
  }

  verific_price_items(type) {
    switch (type) {
      case "low to high":
        cy.get(el_filter.item_price).then(($items) => {
          const precos = $items
            .toArray()
            .map((el) => parseFloat(el.innerText.replace("$", "")));
          expect(precos).to.deep.equal([...precos].sort((a, b) => a - b)); // Ordenação crescente
        });

        break;
      case "high to low":
        cy.get(el_filter.item_price).then(($items) => {
          const precos = $items
            .toArray()
            .map((el) => parseFloat(el.innerText.replace("$", "")));
          expect(precos).to.deep.equal([...precos].sort((a, b) => b - a)); // Ordenação decrescente
        });

        break;
    }
  }
}

export default new filterPage();
