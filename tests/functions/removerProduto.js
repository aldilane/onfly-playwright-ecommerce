const { CartPage } = require('../pageObjects/removerProdutoPage');

async function removerProdutosDoCarrinho(page, produtos) {
  const cartPage = new CartPage(page);

  for (const produto of produtos) {
    await cartPage.removerProduto(produto.nome);
  }

  for (const produto of produtos) {
    await cartPage.validarProdutoRemovido(produto.nome);
  }

  await cartPage.validarQuantidadeEsperada(0);
}

module.exports = { removerProdutosDoCarrinho };
