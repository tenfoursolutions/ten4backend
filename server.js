var express = require('express');
var nodemailer = require("nodemailer");
var aws = require('./aws.js');
var util = require('util');
var Handlebars = require("handlebars");
require('./email_templates/compiled/first_contact.js');
var email_template = Handlebars.templates['first_contact.html'];

var transport = nodemailer.createTransport("SES", aws);

var app = express();
app.use(express.bodyParser());

app.get('/status', function(req, res) {
 res.send('Hello there!');
});

app.post('/contact', function(req, res) {
  var mailOptions = {
    from: "website@tenfoursolutions.com",
    to: "contact@tenfoursolutions.com",
    subject: "Request from possible client.",
    html: email_template(req.body)
  };
  console.log(req.body);

  transport.sendMail(mailOptions, function(error, response){
    if(error){
      res.send('Error.');
      console.log(error);
    }else{
      res.send('Message sent.');
      console.log("Message sent: " + response.message);
    }
  });
});

var port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;
