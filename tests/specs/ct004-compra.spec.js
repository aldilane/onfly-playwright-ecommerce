const { test } = require('@playwright/test');
const { adicionarProdutosAoCarrinho } = require('../functions/carrinho');
const { realizarCompra } = require('../functions/compra');

test('Fluxo completo de checkout - SauceDemo', async ({ page }) => {
  const produtos = [
    { selector: '[data-test="add-to-cart-sauce-labs-backpack"]', nome: 'Sauce Labs Backpack' }
  ];

  await adicionarProdutosAoCarrinho(page, 'standard_user', 'secret_sauce', produtos);

  await page.click('[data-test="checkout"]');

  const dadosUsuario = {
    firstName: 'Aldilane',
    lastName: 'Santos',
    postalCode: '12345-000'
  };

  await realizarCompra(page, dadosUsuario);
});
