const { CompraPage } = require('../pageObjects/compraPage');

async function realizarCompra(page, dadosUsuario) {
  const checkoutPage = new CompraPage(page);

  await checkoutPage.preencherInformacoes(
    dadosUsuario.firstName,
    dadosUsuario.lastName,
    dadosUsuario.postalCode
  );

  await checkoutPage.continuar();

  await checkoutPage.finalizarCompra();

  await checkoutPage.validarMensagemSucesso();

  await checkoutPage.voltarParaProdutos();
}

module.exports = { realizarCompra };
