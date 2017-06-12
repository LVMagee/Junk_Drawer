var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a ownername/email and password
passport.use(new LocalStrategy(
  // Our owner will sign in using an email, rather than a "ownername"
  {
    ownernameField: "email"
  },
  function(email, password, done) {
    // When a owner tries to sign in this code runs
    db.owner.findOne({
      where: {
        email: email
      }
    }).then(function(dbOwner) {
      // If there's no owner with the given email
      if (!dbowner) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a owner with the given email, but the password the owner gives us is incorrect
      else if (!dbOwner.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the owner
      return done(null, dbOwner);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the owner
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(owner, cb) {
  cb(null, owner);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
