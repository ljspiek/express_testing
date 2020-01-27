const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /frequency endpoint', () => {
    it('should return an object in the format', () => {
      return supertest(app)
        .get('/frequency') // invoke the endpoint
        .query({ s: 'aaBBAAbbaa' }) // send the query string ?s = 'aaBBAAbbaa'
        .expect(200)  // assert that you get a 200  OK status
        .expect('Content-Type', /json/)
        .then(res => {
          // make sure you get an object
          expect(res.body).to.be.an('object');
          // all keys must be present
          expect(res.body).to.have.all.keys('unique', 'average', 'highest', 'a', 'b');
        });
    })
  });