module.exports = function (sequelize, DataTypes) {
  const Mouths = sequelize.define('Mouths', {
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
  return Mouths;
};
