const request = require('supertest');
const expect = require('chai').expect;
const app = require("../backend/server.js");

describe("Server", () => {
  it('Should respond with 200 on the "/" route', (done) => {
    request(app).get('/')
      .expect(200, done)
  });

  it('Should respond with an array on the "/tweets" route', (done) => {
    request(app).get('/tweets')
      .then(({body})=> {
        expect(body).to.be.an('array');
        done();
      })
      .catch(err => done(err));
  });

  it('On the "/tweets" route the response array should contain objects', (done) => {
    request(app).get('/tweets')
      .then(({body})=> {
        expect(body[0]).to.be.an('array');
        done();
      })
      .catch(err => done(err));
  });
})