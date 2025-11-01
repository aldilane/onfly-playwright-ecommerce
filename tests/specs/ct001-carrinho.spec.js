const { test, expect } = require('@playwright/test');
const { adicionarProdutosAoCarrinho } = require('../functions/carrinho');

test('Adicionar o produto no carrinho', async ({ page }) => {
  const produtos = [
    { selector: '[data-test="add-to-cart-sauce-labs-backpack"]', nome: 'Sauce Labs Backpack' }
  ];

  await adicionarProdutosAoCarrinho(page, 'standard_user', 'secret_sauce', produtos);

  await page.click('[data-test="checkout"]');
  await expect(page).toHaveURL(/checkout-step-one.html/);
});
