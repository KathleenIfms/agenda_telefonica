var express = require ('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended:true}));
aa
app.use(expressValidator());

consign()

.then('config/dbConnection.js')

.then('app/models')

.then('app/controllers')

.into(app);

module.exports = app;