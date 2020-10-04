module.exports = function (sequelize, DataTypes) {
  const Mouth = sequelize.define('Mouth', {
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
  return Mouth;
};
