class CarrinhoPage {
  constructor(page) {
    this.page = page;
    this.cartLink = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';
  }

  async adicionarProduto(selector) {
    await this.page.click(selector);
  }

  async abrirCarrinho() {
    await this.page.click(this.cartLink);
  }

  async validarQuantidadeEsperada(qtdEsperada) {
    await expect(this.page.locator(this.cartBadge)).toHaveText(`${qtdEsperada}`);
  }
}

module.exports = { CarrinhoPage };
