describe("Formulário de Cadastro de Pessoa", () => {
  beforeEach(() => {
    cy.visit("/teste");
  });

  it("Deve preencher e submeter o formulário com sucesso", () => {
    cy.checkpoint();
    cy.formularioCompleto();
    cy.confirmarFormulario();
    cy.mensagemSucesso();
    cy.validarTelaConfirmacao();
  });

});
