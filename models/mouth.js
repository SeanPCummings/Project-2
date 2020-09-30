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
    assetName: {
      type: DataTypes.STRING
    }
  });
  Mouth.associate = function (models) {
    // We're saying that a Mouth should belong to an Pumpkin
    // A Mouth can't be created without an Pumpkin due to the foreign key constraint
    Mouth.belongsTo(models.Pumpkin, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Mouth;
};
