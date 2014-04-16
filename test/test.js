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
 });
});
