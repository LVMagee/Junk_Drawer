module.exports = function(db) {
  db.Asset.belongsTo(db.User, { foreignKey: { allowNull: false } });
  db.Insurance.belongsTo(db.User, { foreignKey: { allowNull: false } });
  db.User.hasMany(db.Asset, { onDelete: "cascade" });
  db.User.hasMany(db.Insurance, { onDelete: "cascade" });
};
