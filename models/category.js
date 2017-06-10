module.exports = function(sequelize, DataTypes) {
	
  var Category = sequelize.define("Category", {

    name: DataTypes.STRING,
    allowNull: false,
    validate: {
    	len: [3]
    }

  });

  return Category;
};
