/// <reference types="cypress" />
/* eslint-env mocha */
/* global cy expect Cypress */

import data from '../../db';

const hero = data.heroes[3];
const heroCount = 6;
const heroToDelete = data.heroes[5];
const newHero = {
  id: 'heroMadelyn',
  name: 'Madelyn',
  description: 'the cat whisperer'
};

const port = Cypress.env('port');
const url = `http://localhost:${port}`;

const resetData = () => cy.request('POST', `${url}/api/reset`, data);

const containsHeroes = count =>
  cy.get('.list .name').should('have.length', count);

const detailsAreVisible = visible => {
  const val = visible ? '' : 'not.';
  // return cy.get('.edit-detail input[name=name]').should(`${val}be.visible`)
  return cy.get('.edit-detail input[name=name]').should(`${val}exist`);
};

context('Heroes', () => {
  beforeEach(() => {
    resetData().then(() => {
      cy.visit(url);
      cy.get('nav ul.menu-list a')
        .contains('Heroes')
        .click();
    });
  });

  after(() => resetData());

  specify(`Contains ${hero.name}`, () => {
    cy.get('.list .name').contains(hero.name);
  });

  specify('Contains 6 heroes', () => {
    containsHeroes(heroCount);
  });

  specify(`Deletes ${heroToDelete.name}`, () => {
    cy.get(`.list .delete-item[data-id=${heroToDelete.id}]`).click();

    cy.get(`.modal-hero .modal-yes`).click();

    containsHeroes(heroCount - 1);
    cy.get(`.list .delete-item[data-id=${heroToDelete.id}]`).should(
      'not.exist'
    );
  });

  context(`${hero.name} has been Selected`, () => {
    beforeEach(() => {
      cy.get(`.list .edit-item[data-id=${hero.id}]`).click();
    });

    specify(`Shows Details for ${hero.name}`, () => {
      const match = new RegExp(hero.id);
      detailsAreVisible(true);
      cy.get('.edit-detail input[name=id]')
        .invoke('val')
        .should('match', match);
    });

    specify(`Hero List is gone`, () => {
      containsHeroes(0);
      cy.get(`.list .delete-item[data-id=${heroToDelete.id}]`).should(
        'not.exist'
      );
      cy.get(`.list .delete-item[data-id=${hero.id}]`).should('not.exist');
    });

    specify(`Saves changes to ${hero.name}`, () => {
      const newDescription = 'slayer of javascript';
      detailsAreVisible(true);
      cy.get('.edit-detail input[name=description]')
        .clear()
        .type(newDescription);
      cy.get('.edit-detail input[name=description]')
        .invoke('val')
        .should('not.match', new RegExp(hero.description))
        .and('match', new RegExp(newDescription));
      cy.get('.edit-detail .save-button').click();
      detailsAreVisible(false);
      cy.get('.list .description').contains(newDescription);
      containsHeroes(heroCount);
    });

    specify(`Cancels changes to ${hero.name}`, () => {
      const newDescription = 'slayer of javascript';
      detailsAreVisible(true);
      cy.get('.edit-detail input[name=description]')
        .clear()
        .type(newDescription);
      cy.get('.edit-detail input[name=description]')
        .invoke('val')
        .should('not.match', new RegExp(hero.description))
        .and('match', new RegExp(newDescription));
      cy.get('.edit-detail .cancel-button').click();
      detailsAreVisible(false);
      cy.get('.list .description').contains(hero.description);
      containsHeroes(heroCount);
    });
  });

  context(`Add New Hero`, () => {
    beforeEach(() => {
      cy.get('.content-container .add-button').click();
    });

    specify(`Saves changes to ${newHero.name}`, () => {
      detailsAreVisible(true);
      cy.get('.edit-detail input[name=name]')
        .clear()
        .type(newHero.name);
      cy.get('.edit-detail input[name=description]')
        .clear()
        .type(newHero.description);
      cy.get('.edit-detail .save-button').click();
      detailsAreVisible(false);
      cy.get('.list .description').contains(newHero.description);
      containsHeroes(heroCount + 1);
    });
  });

  context(`Direct Routing`, () => {
    specify(`Routes to /heroes directly and see hero list`, () => {
      cy.visit(url);
      cy.wait(1000);
      cy.location().should(loc => {
        expect(loc.host).to.eq(`localhost:${port}`);
        expect(loc.hostname).to.eq('localhost');
        expect(loc.href).to.eq(`${url}/heroes`);
        expect(loc.origin).to.eq(url);
        expect(loc.port).to.eq(port);
        expect(loc.protocol).to.eq('http:');
        expect(loc.toString()).to.eq(`${url}/heroes`);
      });
      detailsAreVisible(false);
      containsHeroes(heroCount);
    });
  });
});
