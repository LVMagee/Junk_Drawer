
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false
   
    
}, {
     // This will check if an unhashed password entered by
    // The user can be compared to the hashed password stored in our database
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(user, options, cb) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        cb(null, options);
      }
    });

//     classMethods: {
//       associate: function(models) {
//         User.hasMany(models.Asset, {
//           onDelete: "cascade"
//         });
//       }
//     }

  return User;

};
