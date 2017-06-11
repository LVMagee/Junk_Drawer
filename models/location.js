module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {

    name:{ 
    type:DataTypes.STRING,
    allowNull: false,
    validate: {
    	len: [3]
    }
  },
  
    address:{
     type:DataTypes.STRING,
    allowNull: false,
    validate: {
      len: []
    }
  }

});

  return Location;
};
