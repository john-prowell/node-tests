const request = require('supertest');

var app = require('./server.js').app;

it('should return Hello World reponse', (done) => {
    request(app)
});