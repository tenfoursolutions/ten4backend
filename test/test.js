var assert = require('assert');
var request = require('supertest');
var app = require('../server.js');

describe('Post', function() {
 describe('Sunny path', function() {
   it('should just work', function(done) {
      request(app)
      .get('/status')
      .expect(/Hello there!/, done);
   });
   it('posting contact form', function(done) {
      request(app)
      .post('/contact')
      .send({ name: 'John Morales',
        email: 'jmorales@gmail.com',
        subject: 'This is a test',
        website: 'http://www.google.com',
        message: "I'm interested in your services"
      })
      .expect(200, done);
   });
 });
});
