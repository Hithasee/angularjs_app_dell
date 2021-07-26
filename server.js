'use strict';
const express = require('express');
const path = require('path');
const config = require(path.join(__dirname +'/server/config'));
const bodyParser = require("body-parser");

// create express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
console.log('__dirname: '+__dirname);


//console.log("PORT from config: "+config.port);
let port = config.port || 7788
app.listen(port, () => {
console.log("Server is listening on port: "+port);
});


//Provide the da space request form page
app.get('/',   (req, res) => {
 res.sendFile(path.join(__dirname +'/client/calc.html'));
})



var routes = require(path.join(__dirname +'/server/routes'));
app.use('/app',routes);

// If no known resource found catch 404 and forward to error handler
// catch 404 and forward to error handler
app.use((req, res, next) => {
console.log ("Inside server.js: Error 404 Not Found");
var err = new Error('Not Found');
err.status = 404;
next(err);
});
