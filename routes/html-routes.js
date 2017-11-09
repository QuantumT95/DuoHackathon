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

     // Registration route
    app.get("/Login", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/login.html"));
    });

    // After Login
    app.get("/Dashboard", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/dashboard.html"));
    });


    app.get("/AddChild", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/addchild.html"));
    app.post("/login", function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
    //   console.log("post route");
    var url = "http://localhost:8080/login";
    var parameters = {method: "post",
        body: req.body}
      fetch(url, parameters)
      .then(res=>res.json())
      .then(data => {
          console.log("got data", data);
          res.send(data);
      })
    //   res.json({ username: username, password, password });
    })
    })

}
