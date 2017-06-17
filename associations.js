module.exports = function(db) {
  db.Insurance.belongsTo(db.User, { foreignKey: { allowNull: false } });
  db.User.hasMany(db.Insurance, { onDelete: "cascade" });
};
