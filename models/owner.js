module.exports = function(sequelize, DataTypes) {
	
  var Owner = sequelize.define("Owner", {

    name: DataTypes.STRING,
    allowNull: false,
    validate: {
    	len: [3]
    }
},
{
	password: DataTypes.TEXT,
	allowNull: false,
	validate: {
		len: [8,16]
	}
}
  });

  return Owner;
};
