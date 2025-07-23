describe("Notes app", function () {

  beforeEach(function() {
    cy.visit("http://localhost:5173");
  })
  it("front page can be opened", function () {
    cy.contains("hello there Notes");
    cy.contains(
      "note creation using token for test shiva");
  });
  it("login form can be opened", function () {
    cy.contains("Show Login").click();
    cy.get('#username').type("Shiva");
    cy.get('#password').type("password1234");
    cy.get('#loginButton').click();

    cy.contains("Create a new note");
  });
 //testing new note form

 describe("when logged in", function () {
  beforeEach(function () {
    cy.contains("Show Login").click();
    cy.get('#username').type("Shiva");
    cy.get('#password').type("password1234");
    cy.get('#loginButton').click();
  });

  it("a new note can be created", function () {
    // cy.contains("new note").click();
    cy.get('#inputNote').type("a new note created by cypress");
    cy.contains("save").click();
    cy.contains("a new note created by cypress");
  });


 });
})