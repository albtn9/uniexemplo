describe("Site Institucional - Faculdade Exemplo", () => {
  let redes;

  beforeEach(() => {
    cy.fixture("redesSociais").then((data) => {
      redes = data;
    });
    cy.visit("/site");
  });

  describe("Header", () => {
    it("Deve exibir o logo da Faculdade e os links do menu principal", () => {
      cy.validarLogo();
      cy.validarMenuPrincipal();
    });

    it("Deve exibir os links e ícones de redes sociais na barra superior", () => {
      cy.validarBarraSuperior();
      cy.validarRedesSociais(redes.header);
    });

    it("Deve navegar para a seção 'Nossos Diferenciais'", () => {
      cy.navegarParaSecao("diferenciais");
    });

    it("Deve navegar para a seção 'Eventos'", () => {
      cy.navegarParaSecao("eventos");
    });

    it("Deve navegar para a seção 'Depoimentos'", () => {
      cy.navegarParaSecao("depoimentos");
    });
  });

  describe("Carrossel", () => {
    it("Deve exibir o carrossel corretamente ao carregar", () => {
      cy.validarCarrossel();
    });
  });

  describe("Eventos", () => {
    it("Deve exibir o título 'PRÓXIMOS EVENTOS'", () => {
      cy.validarSecaoEventos();
    });

    it("Deve ter 4 botões 'INSCREVA-SE AGORA'", () => {
      cy.get("#i6b9dk, #iwmzne, #izq1hh, #itzwfq").should("have.length", 4);
    });
  });

  describe("Newsletter", () => {
    it("Deve exibir os campos Nome, Email e Telefone", () => {
      cy.get('input[name="pessoa.nome"]').should("be.visible");
      cy.get('input[name="pessoa.emailPrincipal"]').should("be.visible");
      cy.get('input[name="pessoa.telefonePrincipal"]').should("be.visible");
    });

    it("Deve exibir o botão Concluir", () => {
      cy.get("#rbBtnNext").contains("Concluir").should("be.visible");
    });
  });

  describe("Footer", () => {
    it("Deve exibir o endereço", () => {
      cy.validarEndereco();
    });

    it("Deve exibir os contatos", () => {
      cy.validarContatos();
    });

    it("Deve exibir o link 'Institucional'", () => {
      cy.validarLinkFooter("#ij9km7", "https://rubeus.com.br/sobre-a-rubeus/");
    });

    it("Deve exibir o link 'Fale Conosco'", () => {
      cy.get("#iwyjp1").should("be.visible");
    });

    it("Deve exibir o link 'Política de Privacidade'", () => {
      cy.validarLinkFooter(
        "#i1feng",
        "https://rbacademy.apprbs.com.br/politica-de-privacidade",
      );
    });

    it("Deve exibir o copyright", () => {
      cy.validarCopyright();
    });

    it("Deve exibir as redes sociais no footer", function () {
      cy.validarRedesSociais(redes.footer);
    });
  });
});
