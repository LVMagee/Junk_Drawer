module.exports = function(sequelize, DataTypes) {
	
  var Category = sequelize.define("Category", {

    name: DataTypes.STRING,
    // values:["Appliances", "Antiques/Artworks", "Clothing/Bags", "Electronics", "Jewelry/Watches", "Tools", "Vehicles", "Other"]
  
  });

  return Category;
};
