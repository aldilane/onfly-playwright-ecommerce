const { LoginPage } = require('../pageObjects/loginPage');

async function efetuarLogin(page, username, password) {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(username,password);
}

module.exports = { efetuarLogin };