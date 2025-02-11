# Teste de contrato de API com Cypress

Projeto criado para realizar estudos sobre testes de contrato de API com Cypress.

## Utilizado neste projeto

- [NPM](https://www.npmjs.com/);
- [Cypress](https://cypress.io/)
- [GoRest](https://gorest.co.in/) - REST API for Testing and Prototyping

## Instalação

> Utilizamos o NPM para fazer a instalação dos pacotes necessários.

- Clonar o projeto na sua máquina e acessar a pasta

```bash
git clone https://github.com/masFreitas/cypress-teste-contrato.git

cd cypress-teste-contrato
```

- Instalar as dependências
```bash
npm install
```

- Instalar o Cypress versão 14.0.2
```bash
npm i cypress@14.0.2 --save-dev
```

- Criar o arquivo **cypress.env.json** na raiz do projeto, e preencher os atributos:
```json
{
    "token": ""
}
```

## Criação do Token

- Acessaro site [GoRest](https://gorest.co.in/)
- Realizar Login
- Copiar o Token, e colar no aquivo **cypress.env.json**

## Utilização com interface

- Abrir o terminal e rodar o comando abaixo

```bash
npx cypress open
```
Quando abrir a janela, selecionar **E2E Testing**, escolher o navegador desejado e escolher o cenário a ser executado.

## Rodar todos os testes

- Abrir o terminal e rodar o comando abaixo

```bash
npm run test
```
