module.exports = function (sequelize, DataTypes) {
  const Mouth = sequelize.define('Mouth', {
    name: {
      type: DataTypes.STRING
    },
    assetPath: {
      type: DataTypes.TEXT
    }
  });

  Mouth.associate = function (models) {
    Mouth.hasMany(models.Pumpkin, {});
  };

  return Mouth;
};
