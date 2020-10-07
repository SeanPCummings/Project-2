const bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'User already exists'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'User already exists'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    hooks: {
      beforeValidate: function (user) {
        if (user.changed('password')) {
          return bcrypt.hash(user.password, 10).then((password) => {
            user.password = password;
          });
        }
      }
    }
  });

  // This will check if an unhashed password can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Compares passwords
  User.prototype.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) {
        return callback(error);
      }
      return callback(null, isMatch);
    });
  };

  User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  User.associate = function (models) {
    User.hasMany(models.Pumpkin, {
      onDelete: 'CASCADE'
    });
  };

  return User;
};
