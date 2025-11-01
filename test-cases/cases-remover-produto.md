# Caso de Teste: Remover produto do carrinho - SauceDemo

**ID:** CT-002  
**Título:** Adcionar e remover produto do carrinho

## Contexto
Validar se ao deletar o produto do carrinho ele irá sair do fluxo de compra.

## Rastreabilidade
| Requisito | ID |
|-----------|----|
| Remover produto do carrinho | REQ-001 |

## Evidência
[Abrir evidências](../playwright-report/index.html)

## Cenário 
**Feature:** Excluir produto da compra
  **Scenario:** Remover produto do carrinho
    Given que estou logado e com um produto no carrinho
    When removo o produto do carrinho
    Then o carrinho não deve conter o produto para compra