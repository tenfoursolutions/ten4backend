var express = require('express');
var app = express();


app.get('/status', function(req, res) {
 res.send('Hello there!');
});

app.post('/contact', function(req, res) {

});

var port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;
