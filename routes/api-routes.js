//requiring the models
var db = require("../models")

//routes
//=========================================
module.exports = function(app){

	//GET Route to display all user items
	app.get("/api/assets", function(req, res){
		db.Asset.findAll({}).then(function(assets){
			res.json(assets);
		});
	});

	//POST route for adding new item
	app.post("/api/assets", function(req,res){
		db.Asset.create({

			category: req.body.category,
			make: req.body.make,
			model: req.body.model,
			serial_num: req.body.serial_num,
			bought: req.body.bought,
			price: req.body.price,
			info: req.body.info

		}).then(function(assets){
			
			res.json(assets);
		});
	});
}