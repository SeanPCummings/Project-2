
module.exports = (passport, db) => {
  return {
    // Register
    register: (req, res) => {
      if (!req.body.email || !req.body.password || !req.body.username) {
        return res.json({ message: 'Email and Password required!' });
      }

      db.User.sync().then(() => {
        const newUser = {
          email: req.body.email,
          password: req.body.password,
          username: req.body.username
        };

        return db.User.create(newUser).then(() => {
          res.status(200).json({ message: 'Registered successfully.' });
        });
      }).catch((err) => {
        let errorMsg = 'Unknown';
        const error = err.errors[0];
        if (error.type === 'unique violation') {
          if (error.path === 'users.Users_username_unique') {
            errorMsg = 'Username already exists';
          }
          if (error.path === 'users.Users_email_unique') {
            errorMsg = 'Email account already exists';
          }
        }
        res.status(403).json({ error: errorMsg });
      });
    },

    // Login
    login: (req, res, next) => {
      passport.authenticate('local', (err, user) => {
        if (err) {
          return next(err);
        }
        if (user) {
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            return res.status(200).json({ loggedIn: true });
          });
        } else {
          res.json({ loggedIn: false, error: 'Can not log in, check your user name and password!' });
        }
      })(req, res, next);
    },

    // Logout
    logout: (req, res, next) => {
      req.logout();
      req.session.destroy((err) => {
        if (err) {
          return next(err);
        }
        res.clearCookie('connect.sid', { path: '/' });
        res.redirect('/');
      });
    },

    // Update User
    updateUser: (req, res) => {
      db.User.update({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }, {
        where: { id: req.params.id }
      }).then(result => {
        res.json(result);
      });
    },

    // Confirm Authentication
    confirmAuth: (req, res) => {
      const email = req.body.email;
      const pwd = req.body.password;

      db.User.findOne({
        where: { email: email }
      }).then((user) => {
        if (!user) {
          return res.json(false);
        }
        if (!user.validPassword(pwd)) {
          return res.json(false);
        }
        return res.json(true);
      });
    },

    // Delete User
    deleteUser: (req, res) => {
      db.User.destroy({
        where: { id: req.params.id }
      }).then(() => {
        res.json(true);
      }).catch(() => {
        res.json(false);
      });
    }
  };
};
