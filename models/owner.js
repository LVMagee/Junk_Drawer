var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
	
  var Owner = sequelize.define("Owner", {

    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
       isEmail: true
     }
   },

   password: {
    type:DataTypes.STRING,
    allowNull: false,

  },

},{

     instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },

    hooks: {
      beforeCreate: function(owner, options, cb) {
        owner.password = bcrypt.hashSync(owner.password, bcrypt.genSaltSync(10), null);
        cb(null, options);
      }
    },
    
  // timestamps: false

});

  return Owner;
};
