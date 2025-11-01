const { expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');

async function adicionarProdutosAoCarrinho(page, username, password, produtos) {
  const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login(username, password);
  await expect(page).toHaveURL(/inventory.html/);

  for (const produto of produtos) {
    await page.click(produto.selector);
  }

  await expect(page.locator('.shopping_cart_badge')).toHaveText(`${produtos.length}`);
  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/cart.html/);

  // ✅ Verifica todos os produtos de uma vez
  const nomesEsperados = produtos.map(p => p.nome);
  await expect(page.locator('.inventory_item_name')).toContainText(nomesEsperados);
}

module.exports = { adicionarProdutosAoCarrinho };
