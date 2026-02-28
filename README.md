# 🧪 Testes Automatizados — Faculdade Exemplo

Projeto de automação de testes E2E utilizando [Cypress](https://www.cypress.io/) para as páginas `/teste` e `/site` da Faculdade Exemplo (UNIEXEMPLO).

---

## ⚙️ Configuração

### Pré-requisitos

- Node.js
- npm ou yarn

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
```

---

## 🌐 Base URL

Configurada em `cypress.config.js`:

```js
baseUrl: "https://qualidade.apprbs.com.br"
```


---

## 🛠️ Custom Commands

Todos os comandos estão em `cypress/support/commands.js`.

---
### '/teste' — UNIEXEMPLO |
### '/site'  — UNIEXEMPLO |

---

## 📦 Dependências

```json
{
  "@faker-js/faker": "^8.x",
  "cypress": "^13.x"
}
```

---

## ⚠️ Observações

- Os seletores utilizam IDs gerados pelo construtor de páginas (ex: `#xpto01h`). Caso a página seja republicada, os IDs podem mudar e os testes precisarão ser atualizados.