// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// DEPENDENCIES
// =============================================================


var path = require("path");

// ROUTES
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // Index route loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    // Home route also loads index.html
    app.get("/Home", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    // Registration route
    app.get("/Registration", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/registration.html"));

    });


};
