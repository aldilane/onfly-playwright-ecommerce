const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');

test('Login válido SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');

  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
});

test('Login inválido', async ({ page }) => {
    const  loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');

    await loginPage.login('usuario_invalido', 'senha_invalida');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
});