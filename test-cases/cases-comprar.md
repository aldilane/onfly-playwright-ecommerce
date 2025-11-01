# Caso de Teste: Fluxo de Compra- SauceDemo

**ID:** CT-004  
**Título:** Login, adicionar produto no carrinho e comprar

## Contexto
Validar se ao adicionar o produto no carrinho poderá ser finalizada a compra.

## Rastreabilidade
| Requisito | ID |
|-----------|----|
| Acessar checkout | REQ-001 |
| Preencher informações de checkout | REQ-002 |
| Finalizar compra | REQ-003 |

## Evidência
[Abrir evidências](../playwright-report/index.html)

## Cenário 
**Feature:** Fluxo de compra
  **Scenario:** Login e navegação até checkout
    Given que acesso o site SauceDemo
    When faço login com usuário válido
    And adiciono o produto no carrinho
    And vou ao carrinho
    Then devo ver o item e acessar a tela de checkout
    And finalizar a compra

