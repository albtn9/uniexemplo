import { faker, Faker, pt_BR } from "@faker-js/faker";

//teste page
Cypress.Commands.add("checkpoint", () => {
  cy.get("#iq2q").contains("Uniexemplo").should("be.visible");
});

Cypress.Commands.add("formularioCompleto", (data = {}) => {
  const fakerBR = new Faker({ locale: [pt_BR] });
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const nomePadrao = `${firstName} ${lastName}`;
  const emailPadrao = faker.internet.email({ firstName, lastName, provider: "tests.com" });
  const telefonePadrao = fakerBR.phone.number();

  const { nome = nomePadrao, email = emailPadrao, telefone = telefonePadrao } = data;

  cy.get('input[name="pessoa.nome"]').type(nome);
  cy.get('input[name="pessoa.emailPrincipal"]').type(email);
  cy.get('input[name="pessoa.telefonePrincipal"]').type(telefone);
});

Cypress.Commands.add("confirmarFormulario", () => {
  cy.get("#rbActionsFormContainer").should("be.visible").click();
});

// Cypress.Commands.add("aguardarEnvio", () => {
//   cy.intercept("PATCH", "**/api/v2/sendData").as("sendData");
//   cy.confirmarFormulario();
//   cy.wait("@sendData").its("response.statusCode").should("eq", 200);
// });

Cypress.Commands.add("mensagemSucesso", () => {
  cy.get("#toast-container").contains("Dados salvos com sucesso!").should("be.visible");
});

Cypress.Commands.add("validarTelaConfirmacao", () => {
  cy.get("#rbFormContent-2").contains("teste").should("be.visible");
  cy.get("#i4k5c").contains("Fazer nova inscrição").should("be.visible");
});


//site page
Cypress.Commands.add("validarLogo", () => {
  cy.get("#iiq2g").should("be.visible");
});

Cypress.Commands.add("validarMenuPrincipal", () => {
  cy.get("#i7qsxy").contains("NOSSOS DIFERENCIAIS").should("be.visible");
  cy.get("#iycti4").contains("EVENTOS").should("be.visible");
  cy.get("#iv4nx6").contains("DEPOIMENTOS").should("be.visible");
  cy.get("#iopirr").contains("FALAR COM CONSULTOR").should("be.visible");
});

Cypress.Commands.add("validarBarraSuperior", () => {
  cy.get("#ipkda").contains("Atendimento").should("be.visible");
  cy.get("#iks3g").contains("WhatsApp").should("be.visible");
  cy.get("#ilmc2").contains("INSTITUCIONAL").should("be.visible");
  cy.get("#ier16").contains("BIBLIOTECA").should("be.visible");
});

Cypress.Commands.add("validarRedesSociais", (redes) => {
  redes.forEach((rede) => {
    cy.get(rede.id).should("be.visible");
    if (rede.href) {
      cy.get(rede.id).should("have.attr", "href", rede.href);
    }
  });
});

Cypress.Commands.add("navegarParaSecao", (secao) => {
  const mapa = {
    diferenciais: { menu: "#i7qsxy", secao: "#inrj09" },
    eventos:      { menu: "#iycti4", secao: "#i41106" },
    depoimentos:  { menu: "#iv4nx6", secao: "#ipjmqj" },
  };
  cy.get(mapa[secao].secao).should("be.visible");
});

Cypress.Commands.add("validarCarrossel", () => {
  cy.get(".mySlides").first().should("be.visible");
  cy.get(".mySlides").should("have.length", 3);
  cy.get(".dot").should("have.length", 3);
  cy.get(".dot").first().should("have.class", "active");
});

Cypress.Commands.add("validarSecaoEventos", () => {
  cy.get("#ie8v72").contains("PRÓXIMOS EVENTOS").should("be.visible");
});

Cypress.Commands.add("validarEndereco", () => {
  cy.get("#i18s7i").contains("Rua Lorem ipsum, 333").should("be.visible");
  cy.get("#ifesfa").contains("São Paulo").should("be.visible");
});

Cypress.Commands.add("validarContatos", () => {
  cy.get("#its9uu").contains("exemplo@uniex.com.br").should("be.visible");
});

Cypress.Commands.add("validarLinkFooter", (id, href) => {
  cy.get(id).should("be.visible").and("have.attr", "href", href);
});

Cypress.Commands.add("validarCopyright", () => {
  cy.get("#i2r7yf").contains("© UNIEXEMPLO - Todos os Direitos Reservados").should("be.visible");
});
