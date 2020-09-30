module.exports = function (sequelize, DataTypes) {
  const Pumpkin = sequelize.define('Pumpkin', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    eyes: {
      type: DataTypes.STRING
    },
    nose: {
      type: DataTypes.STRING
    },
    mouth: {
      type: DataTypes.STRING
    },
    user: {
      type: DataTypes.STRING
    }
  });
  Pumpkin.associate = function (models) {
    // We're saying that a Pumpkin should belong to an User
    // A Pumpkin can't be created without an User due to the foreign key constraint
    // Pumpkin.user.belongsTo(models, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  };
  return Pumpkin;
};
