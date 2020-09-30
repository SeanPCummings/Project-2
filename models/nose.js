module.exports = function (sequelize, DataTypes) {
  const Nose = sequelize.define('Nose', {
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
  Nose.associate = function (models) {
    // We're saying that a Nose should belong to a Pumpkin
    // An instance of a Nose can't be created without an Pumpkin due to the foreign key constraint
    Nose.belongsTo(models.Pumpkin, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Nose;
};
