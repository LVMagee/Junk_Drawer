var db = require("../models");

//routes
//======================================

module.exports = function(app){

	//POST route for adding new user
	app.post("/api/owner", function(req,res){
		db.Owner.create({

			itemName: req.body.itemName,
			category: req.body.category,
			make: req.body.make,
			model: req.body.model,
			serial_num: req.body.serial_num,
			bought: req.body.bought,
			price: req.body.price,
			info: req.body.info

		}).then(function(owner){
			
			res.json(owner);
		});
	});
	
	//route to UPDATE asset
	app.put("/api/owner", function(req,res){
		db.Owner.update(
		{
			itemName: req.body.itemName,
			category: req.body.category,
			make: req.body.category,
			model: req.body.model,
			serial_num: req.body.serial_num,
			bought: req.body.bought,
			price: req.body.price,
			info: req.body.info
		},
		{
			where: {id: req.body.id}
		}).then(function(owner){
			res.json(owner);
		});
	});

}