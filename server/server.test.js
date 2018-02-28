const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

// server
describe('Server', () => {
  describe('GET /', () => {
    it('should return Hello world! reponse', (done) => {
      request(app)
        .get('/')
        .expect(404) // status code
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done); // wrap up a request in supertest   
    });
  });
  describe('GET /users', () => {
    // Make a new test
    // assert status code is 200
    // assert that your user exist in users array using toInclude

    it('should return a specified user in user array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'bjorn',
            age: 28
          });
        })
        .end(done);
    });
  });
});