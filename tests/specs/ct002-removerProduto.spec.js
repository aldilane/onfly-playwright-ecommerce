const { test } = require('@playwright/test');
const { removerProdutosDoCarrinho } = require('../functions/removerProduto');
const { adicionarProdutosAoCarrinho } = require('../functions/carrinho');

test('Remover produto do carrinho - SauceDemo', async ({ page }) => {
  const produtos = [
    { nome: 'Sauce Labs Backpack' }
  ];

  await adicionarProdutosAoCarrinho(page, 'standard_user', 'secret_sauce', [
    { selector: '[data-test="add-to-cart-sauce-labs-backpack"]', nome: 'Sauce Labs Backpack' }
  ]);

  await removerProdutosDoCarrinho(page, produtos);
});
