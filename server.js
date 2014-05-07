var express = require('express');
var Sequelize = require('sequelize'),
    sequelize = new Sequelize('ten4contact', 'ten4contact', 'p@ss');

var Contact = sequelize.define('Contact', {
  contact_id: { type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  subject: Sequelize.STRING,
  website: Sequelize.STRING,
  message: Sequelize.STRING
});

var app = express();
app.use(express.bodyParser());

app.get('/status', function(req, res) {
 res.send('Hello there!');
});

app.post('/contact', function(req, res) {
  //console.log(req.body);
  Contact.create(req.body).success(function(sdepold) {
    res.send('');
  }).error(function(erro) {
    console.log(erro.text);
    throw erro;
  });
});

var port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;
