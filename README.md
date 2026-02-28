# 🧪 Testes Automatizados — Faculdade Exemplo

![Testes E2E](https://github.com/albtn9/uniexemplo/actions/workflows/cypress.yml/badge.svg)

Projeto de automação de testes E2E utilizando [Cypress](https://www.cypress.io/) para as páginas `/teste` e `/site` da Faculdade Exemplo (UNIEXEMPLO).

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── teste.cy.js        # Testes do formulário de cadastro (/teste)
│   └── site.cy.js         # Testes do site institucional (/site)
└── support/
    ├── commands.js        # Custom Commands
    └── e2e.js             # Configurações globais
.github/
└── workflows/
    └── cypress.yml        # Pipeline CI/CD — GitHub Actions
cypress.config.js          # Configuração base do Cypress
```

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

## 🛠️ Custom Commands

Todos os comandos estão em `cypress/support/commands.js`.

| Grupo | Comandos |
|---|---|
| `/teste` — Formulário | `checkpoint`, `formularioCompleto`, `confirmarFormulario`, `aguardarEnvio`, `mensagemSucesso`, `validarTelaConfirmacao`, `novaInscricao`, `validarCamposVazios` |
| `/site` — Newsletter | `preencherNewsletter`, `confirmarNewsletter`, `aguardarEnvioNewsletter`, `validarCamposVaziosNewsletter` |
| `/site` — Header | `validarLogo`, `validarMenuPrincipal`, `validarBarraSuperior`, `validarRedesSociaisHeader`, `navegarParaSecao` |
| `/site` — Carrossel | `validarCarrossel`, `proximoSlide`, `slideAnterior`, `irParaSlide` |
| `/site` — Seções | `validarSecaoDiferenciais`, `validarCardDiferencial`, `validarSecaoEventos`, `validarEvento`, `validarSecaoDepoimentos`, `validarDepoimento` |
| `/site` — Footer | `validarRedeSocial`, `validarEndereco`, `validarContatos`, `validarLinkFooter`, `validarCopyright`, `validarRedesSociaisFooter` |

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
- 2 testes da newsletter estão com `it.skip` aguardando correção da API (`"É necessário informar a base legal"`).