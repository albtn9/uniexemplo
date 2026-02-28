# 🧪 Testes Automatizados — Faculdade Exemplo

![Testes E2E](https://github.com/albtn9/uniexemplo/actions/workflows/cypress.yml/badge.svg)

Projeto de automação de testes E2E utilizando [Cypress](https://www.cypress.io/) para as páginas `/teste` e `/site` da Faculdade Exemplo (UNIEXEMPLO).



---

## ⚙️ Configuração

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Executar os testes

```bash
# Interface gráfica
npx cypress open

# Modo headless (CI)
npx cypress run

# Rodar spec específico
npx cypress run --spec "cypress/e2e/teste.cy.js"
npx cypress run --spec "cypress/e2e/site.cy.js"
```

---

## 🌐 Base URL

Configurada em `cypress.config.js`:

```js
baseUrl: "https://qualidade.apprbs.com.br"
```

---


## 📊 Relatórios

O relatório HTML é gerado automaticamente pelo `cypress-mochawesome-reporter` após cada execução e salvo em `cypress/reports/index.html`.

No CI/CD, o relatório fica disponível como artefato na aba **Actions** do GitHub por 30 dias.

---

## 📦 Dependências

```json
{
  "@faker-js/faker": "^8.x",
  "cypress": "^13.x",
  "cypress-mochawesome-reporter": "^3.x"
}
```

---

## ⚠️ Observações

- Os seletores utilizam IDs gerados pelo construtor de páginas (ex: `#xpto01h`). Caso a página seja republicada, os IDs podem mudar e os testes precisarão ser atualizados.
