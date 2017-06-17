// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

 app.get("/", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname + "/../views/login.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the junkDrawer page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname + "/../views/login.html"));
  });




  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../views/index.html"));
  // });

  //once logged in
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/junkDrawer.html"));
  });

};
