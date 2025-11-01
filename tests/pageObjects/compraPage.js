const { expect } = require('@playwright/test');

class CompraPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.postalCodeInput = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';

    this.finishButton = '[data-test="finish"]';
    this.summaryTitle = '.summary_info_label';

    this.completeHeader = '.complete-header';
    this.backHomeButton = '[data-test="back-to-products"]';
  }

  async preencherInformacoes(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async continuar() {
    await this.page.click(this.continueButton);
    await expect(this.page).toHaveURL(/checkout-step-two.html/);
  }

  async finalizarCompra() {
    await this.page.click(this.finishButton);
    await expect(this.page).toHaveURL(/checkout-complete.html/);
  }

  async validarMensagemSucesso() {
    await expect(this.page.locator(this.completeHeader))
      .toHaveText('Thank you for your order!');
  }

  async voltarParaProdutos() {
    await this.page.click(this.backHomeButton);
    await expect(this.page).toHaveURL(/inventory.html/);
  }
}

module.exports = { CompraPage };
