# Caso de Teste: Login - SauceDemo

**ID:** CT-003
**Título:** Realizar login com credenciais válidas e inválidas  

## Contexto  
Validar o comportamento do sistema ao realizar login com credenciais corretas e incorretas no site SauceDemo, garantindo que o acesso à área de produtos seja concedido apenas a usuários válidos.

## Rastreabilidade  
| Requisito | ID |
|------------|----|
| Autenticação de usuário | REQ-001 |

## Evidência  
[Abrir evidências](../playwright-report/index.html)

## Cenários  

### Cenário 1 — Login bem-sucedido  
**Feature:** Login do usuário  
**Scenario:** Login com credenciais válidas  
Given que estou na página de login do SauceDemo  
When insiro o nome de usuário "standard_user" e senha "secret_sauce"  
And clico no botão de login  
Then devo ser redirecionado para a página de inventário  
And devo visualizar a lista de produtos disponíveis

### Cenário 2 — Login bem-inválido
**Scenario:** Login com credenciais inválidas
Given que estou na página de login do SauceDemo  
When insiro o nome de usuário "usuario_invalido" e senha "senha_errada"  
And clico no botão de login  
Then devo visualizar uma mensagem de erro informando falha na autenticação  
And não devo ser redirecionado para a página de inventário

