module.exports = function(sequelize, DataTypes) {
	
  var Location = sequelize.define("Location", {

    name: DataTypes.STRING,
    allowNull: false,
    validate: {
    	len: [3]
    }
},
{
  address: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: []
  }
}

  });

  return Location;
};
