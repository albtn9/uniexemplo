describe("Formulário de Cadastro de Pessoa", () => {
  beforeEach(() => {
    cy.visit("/teste");
  });

  it("Deve preencher e submeter o formulário com sucesso", () => {
    cy.checkpoint();
    cy.formularioCompleto();
    cy.aguardarEnvio();
    cy.mensagemSucesso();
    cy.validarTelaConfirmacao();
  });

  it("Deve validar que todos os campos obrigatórios estão vazios", () => {
    cy.checkpoint();
    cy.validarCamposVazios();
  });

  it("Deve reiniciar o formulário ao clicar em 'Fazer nova inscrição'", () => {
    cy.checkpoint();
    cy.formularioCompleto();
    cy.aguardarEnvio();
    cy.mensagemSucesso();
    cy.novaInscricao();
  });
});
