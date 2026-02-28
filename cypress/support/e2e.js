import "./commands";
import "cypress-mochawesome-reporter/register";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("ActionsForm")) {
    return false;
  }
});
