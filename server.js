/*

LUCY'S PORTFOLIO

*/

var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var server = require('http').Server(app);


//currently the amazon web server that we are going to use re-routes port 3000 to port 80 / https
var port = 3000;

server.listen(port, function() {
    console.log('Server running at port:' + port);
});



//TELL EM WHERE TO GET SHIT
app.use('/', express.static(__dirname + '/public'));
// app.use('/media', express.static(__dirname + '/public/media'));
