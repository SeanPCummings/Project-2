module.exports = function (sequelize, DataTypes) {
  const Pumpkin = sequelize.define('Pumpkin', {
    name: {
      type: DataTypes.TEXT
    }
  });
  Pumpkin.associate = function (models) {
    Pumpkin.belongsTo(models.Eye, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'cascade'
    });

    Pumpkin.belongsTo(models.Nose, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'cascade'
    });

    Pumpkin.belongsTo(models.Mouth, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'cascade'
    });

    Pumpkin.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'cascade'
    });
  };

  return Pumpkin;
};
