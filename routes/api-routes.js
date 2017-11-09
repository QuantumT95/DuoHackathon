var mongo = require("mongodb").MongoClient;
var assert = require("assert");

var url = "mongodb://localhost:27017/test";


//ROUTES
module.exports = function(app){


	app.post("/Registration", function(req, res){
		mongo.connect(url, function(err, db){
			assert.equal(null, err);
			db.collection("userData").insertOne(userInfo, function(err, res){
				assert.equal(null, err);
				console.log("user data is inserted");
				db.close();
			})
		})
	})

	app.get("/Login", function(req, res){
		mongo.connect(url, function(err, db){
			// get login and check
		})
	})



}