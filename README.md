# 🚀 Testes Automatizados com Cypress - Swag Labs  

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para validar funcionalidades do site de testes [Swag Labs](https://www.saucedemo.com/).  

## 📌 Tecnologias Utilizadas  
- Cypress  
- JavaScript  
- Node.js  

## 📋 Pré-requisitos  
Antes de executar os testes, certificar-se de ter instalado:  
- [Node.js](https://nodejs.org/)  
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)  

## 🛠️ Instalação e Execução  

1. Clone o repositório na pasta onde deseja alocar o projeto (rode o comando abaixo):
   
```json
{
   "git clone https://github.com/BrunaBarbosaCampos/Projeto-Cypress-Swag-Labs.git"
}
```
2. Instale as dependências:  
```json
{
   "npm install"
}
```
3. Execute os testes em modo interativo:  
```json
{
   "npx cypress open"
}
```
   Ou em modo headless:  
```json
{
   "npx cypress run"
}
```
## 🧪 Testes Implementados  
Os testes cobrem cenários como:  
✅ Login com credenciais válidas e inválidas  
✅ Adição e remoção de produtos do carrinho  
✅ Finalização de compra  

## 📌 Estrutura do Projeto  
\`\`\`
📂 cypress  
 ┣ 📂 e2e            # Testes automatizados  
 ┣ 📂 fixtures       # Dados de teste  
 ┣ 📂 support        # Comandos customizados e configurações  
 ┗ 📜 cypress.config.js  # Configuração do Cypress  
