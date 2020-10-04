module.exports = function (sequelize, DataTypes) {
  const Nose = sequelize.define('Nose', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    assetPath: {
      type: DataTypes.TEXT
    }
  });
  return Nose;
};
