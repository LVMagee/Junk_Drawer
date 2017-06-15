module.exports = function(db) {
  db.Asset.belongsTo(db.Owner, { foreignKey: { allowNull: false } });
  db.Insurance.belongsTo(db.Owner, { foreignKey: { allowNull: false } });
  db.Owner.hasMany(db.Asset, { onDelete: "cascade" });
  db.Owner.hasMany(db.Insurance, { onDelete: "cascade" });
};
