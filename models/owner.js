module.exports = function(sequelize, DataTypes) {
	
  var Owner = sequelize.define("Owner", {

    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
       len: [3]
     }
   },

   password: {
    type:DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [8,16]
    }
  }

});

  return Owner;
};
