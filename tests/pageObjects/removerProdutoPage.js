const { expect } = require('@playwright/test');
const { clicarSeExistir } = require('../functions/utils');

class CartPage {
  constructor(page) {
    this.page = page;
    this.itemName = '.inventory_item_name';
    this.checkoutButton = '[data-test="checkout"]';
  }

  async validarProduto(nomeProduto) {
    await expect(this.page.locator(this.itemName)).toContainText(nomeProduto);
  }

  async prosseguirCheckout() {
    await clicarSeExistir(this.page, this.checkoutButton, 'Botão de Checkout');
  }

  async removerProduto(nomeProduto) {
    const nomeFormatado = nomeProduto.toLowerCase().replaceAll(' ', '-');
    const removeSelector = `[data-test="remove-${nomeFormatado}"]`;

    const clicou = await clicarSeExistir(this.page, removeSelector, `Remover produto: ${nomeProduto}`);

    if (!clicou) {
      console.warn(`⚠️ Produto "${nomeProduto}" não encontrado no carrinho. Nenhuma ação foi tomada.`);
      return;
    }
  }

  async validarProdutoRemovido(nomeProduto) {
    const produtos = this.page.locator(this.itemName);
    const count = await produtos.count();

    if (count === 0) {
      console.log(`✅ Nenhum produto encontrado no carrinho — '${nomeProduto}' removido com sucesso.`);
      return;
    }

    await expect(produtos).not.toContainText(nomeProduto);
  }

  async validarQuantidadeEsperada(qtdEsperada) {
    const badge = this.page.locator('.shopping_cart_badge');
    if (qtdEsperada === 0) {
      await expect(badge).toHaveCount(0);
    } else {
      await expect(badge).toHaveText(`${qtdEsperada}`);
    }
  }
}

module.exports = { CartPage };
