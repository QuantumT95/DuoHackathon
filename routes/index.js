var express = require("express");
var router = express.Router();
var User = require("../lib/User");

router.post("/Registration", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;

  var newuser = new User();
  newuser.username = username;
  newuser.password = password;
  newuser.firstname = firstname;
  newuser.lastname = lastname;
  newuser.email = email;
  newuser.save(function(err, savedUser) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }

    return res.status(200).send();
  });
});

router.post("/enroll", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
});

router.post("/login", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log("post route")

  res.json({username: username, password, password});

//   User.findOne({ username: username, password: password }, function(err, user) {
//     if (err) {
//       console.log(err);
//       return res.status(500).send();
//     }
//     if (!user) {
//       return res.status(404).send();
//     }
//     req.session.user = user;
//     return res.status(200).send();
//   });
});

router.get("/Dashboard", function(req, res) {
  if (!req.session.user) {
    return res.status(401).send();
  }
  return res.status(200).send("Welcome user");
});
