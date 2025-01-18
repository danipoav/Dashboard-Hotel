describe('Form Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });

  it('Debería renderizar el formulario correctamente', () => {
    cy.get('form').should('exist');
    cy.get('input[placeholder="Email"]').should('exist'); 
    cy.get('input[placeholder="Password"]').should('exist'); 
    cy.get('button[type="submit"]').should('exist');
    cy.get('h1').contains('Welcome').should('exist'); 
  });

  it('Debería permitir al usuario escribir en los campos de email y contraseña', () => {

    cy.get('input[placeholder="Email"]').type('user@user.com');
    cy.get('input[placeholder="Password"]').type('user');

    cy.get('input[placeholder="Email"]').should('have.value', 'user@user.com');
    cy.get('input[placeholder="Password"]').should('have.value', 'user');
  });

  it('Debería mostrar un mensaje de ejemplo para email y contraseña', () => {
    cy.get('strong').contains('Email:').should('exist');
    cy.get('strong').contains('Password:').should('exist');
    cy.get('p').contains('user@user.com').should('exist');
    cy.get('p').contains('user').should('exist');
  });

  it('NO Debería mostrar un mensaje de ejemplo para email y contraseña', () => {
    cy.get('Text').contains('user@user.com').should('exist');
    cy.get('Text').contains('user').should('exist');
  });
});
