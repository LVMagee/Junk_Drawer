module.exports = function(db) {
  db.Asset.belongsTo(db.Owner, { foreignKey: { allowNull: false } });
  db.Owner.hasMany(db.Asset, { onDelete: "cascade" });
};
