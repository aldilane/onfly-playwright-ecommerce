async function clicarSeExistir(page, selector, descricao = '') {
  const count = await page.locator(selector).count();

  if (count === 0) {
    console.warn(`Elemento não encontrado: ${descricao || selector}`);
    return false;
  }

  await page.click(selector);
  console.log(`Clique realizado: ${descricao || selector}`);
  return true;
}

module.exports = { clicarSeExistir };
