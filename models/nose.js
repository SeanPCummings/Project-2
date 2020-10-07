module.exports = function (sequelize, DataTypes) {
  const Nose = sequelize.define('Nose', {
    name: {
      type: DataTypes.STRING
    },
    assetPath: {
      type: DataTypes.TEXT
    }
  });

  Nose.associate = function (models) {
    Nose.hasMany(models.Pumpkin, {
      onDelete: 'CASCADE'
    });
  };

  return Nose;
};
