# Caso de Teste: Fluxo para adicionar produto no carrinho - SauceDemo

**ID:** CT-001  
**Título:** Login e adicionar produto no carrinho  

## Contexto
Validar se ao adicionar o produto ao carrinho ele irá para o fluxo de compra.

## Rastreabilidade
| Requisito | ID |
|-----------|----|
| Login com usuário válido | REQ-001 |
| Adicionar produto ao carrinho | REQ-002 |
| Visualizar o produto no carrinho | REQ-003 |

## Evidência
[Abrir evidências](../playwright-report/index.html)

## Cenário 
**Feature:** Fluxo de compra
  **Scenario:** Login e navegação até checkout
    Given que acesso o site SauceDemo
    When faço login com usuário válido
    And adiciono o produto no carrinho
    And vou ao carrinho
    Then devo visualizar o produto na lista de compra

