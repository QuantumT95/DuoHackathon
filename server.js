// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var mustacheExpress = require('mustache-express');

// SET UP EXPRESS
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// SET UP MONGOOSE
// =============================================================
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/test", function(err){
// 	if(err){
// 		return console.log(err);
// 	}
// 	return console.log("Successfully connected to MongoDB!");
// })

// Requiring our models for syncing
// var db = require("./models");

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
app.use(session({secret:"lkjhgfdsasdfghjkloikjhgfdsa", resave: false, saveUninitialized: true}))

// STATIC DIRECTORY TO BE SERVED
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded());

// ROUTES
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

 app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: false }).then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });
