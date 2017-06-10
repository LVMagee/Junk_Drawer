module.exports = function(sequelize, DataTypes) {
	
  var User = sequelize.define("User", {

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

  return User;
};
