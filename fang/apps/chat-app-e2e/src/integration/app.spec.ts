import { getGreeting } from '../support/app.po';

describe('chat-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to chat-app!');
  });
});
