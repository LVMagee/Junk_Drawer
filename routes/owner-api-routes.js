var db = require("../models");

//routes
//======================================

module.exports = function(app){

	//POST route for adding new user
	app.post("/api/owner", function(req,res){
		db.Owner.create({

			email: req.body.email,
			password: req.body.password

		}).then(function(owner){
			
			res.json(owner);
		});
	});
	
	//route to UPDATE asset
	app.put("/api/owner", function(req,res){
		db.Owner.update(
		{
			email: req.body.email,
			password: req.body.password,
		
		{
			where: {id: req.body.id}
		}).then(function(owner){
			res.json(owner);
		});
	});

}