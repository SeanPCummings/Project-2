const router = require('express').Router();

module.exports = (db) => {
  // Load profile page
  router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        res.render('profile', user);
      });
    } else {
      res.redirect('/');
    }
  });

  // Load dashboard page
  router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // Load dashboard page
  router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // Load gallery page
  router.get('/gallery', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('gallery', {
        userInfo: req.session.passport.user,
        isloggedin: req.isAuthenticated(),
        msg: 'Welcome!'
      });
    } else {
      res.redirect('/');
    }
  });

  // Load editor page
  router.get('/editor/:id?', function (req, res) {
    if (req.isAuthenticated()) {
      const pumpkinId = req.params.id ? req.params.id : 0;
      res.render('editor', {
        userInfo: req.session.passport.user,
        isloggedin: req.isAuthenticated(),
        msg: 'Welcome!',
        pumpkinId: pumpkinId
      });
    } else {
      res.redirect('/');
    }
  });

  // Load stencil print out
  router.get('/stencil/:id?', function (req, res) {
    if (req.isAuthenticated()) {
      const pumpkinId = req.params.id ? req.params.id : 0;

      // get single pumpkin and render to stencil
      db.Pumpkin.findOne({
        where: { id: pumpkinId },
        include: [db.Eye, db.Nose, db.Mouth]
      }).then(val => {
        val = val.toJSON();
        res.render('stencil', {
          pumpkinData: val
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Logout
  router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/');
    });
  });

  // Render 404 page for any unmatched routes
  router.get('*', function (req, res) {
    res.render('404');
  });

  return router;
};
