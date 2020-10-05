module.exports = function (sequelize, DataTypes) {
  const Pumpkins = sequelize.define('Pumpkins', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    eyes: {
      type: DataTypes.TEXT
    },
    nose: {
      type: DataTypes.TEXT
    },
    mouth: {
      type: DataTypes.TEXT
    },
    user: {
      type: DataTypes.TEXT
    }
  });
  Pumpkins.associate = function (models) {
    // We're saying that a Pumpkin should belong to an User
    // A Pumpkin can't be created without an User due to the foreign key constraint

    Pumpkins.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Pumpkins;
};
