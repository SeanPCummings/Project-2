module.exports = function (sequelize, DataTypes) {
  const Eye = sequelize.define('Eye', {
    name: {
      type: DataTypes.STRING
    },
    assetPath: {
      type: DataTypes.TEXT
    }
  });

  Eye.associate = function (models) {
    Eye.hasMany(models.Pumpkin, {
      onDelete: 'CASCADE'
    });
  };

  return Eye;
};
