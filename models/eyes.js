module.exports = function (sequelize, DataTypes) {
  const Eyes = sequelize.define('Eyes', {
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
  Eyes.associate = function (models) {
    // We're saying that an Eyes should belong to a Pumpkin
    // An instance of Eyes can't be created without Pumpkin due to the foreign key constraint
    Eyes.belongsTo(models.User.Pumpkin, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Eyes;
};
