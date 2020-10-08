module.exports = function (sequelize, DataTypes) {
  const Pumpkin = sequelize.define('Pumpkin', {
    name: {
      type: DataTypes.TEXT
    }
  });
  Pumpkin.associate = function (models) {
    // We're saying that a Pumpkin should belong to an User
    // A Pumpkin can't be created without an User due to the foreign key constraint

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
