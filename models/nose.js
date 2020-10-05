module.exports = function (sequelize, DataTypes) {
  const Noses = sequelize.define('Noses', {
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
  return Noses;
};
