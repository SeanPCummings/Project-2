const router = require('express').Router();

module.exports = (db) => {
  // Load register page
  // router.get('/register', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     res.redirect('/profile');
  //   } else {
  //     res.render('register');
  //   }
  // });

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
        // console.log(user);
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
      console.log(req.session.passport);
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
      console.log(pumpkinId);
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
        // let output = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>';
        // output += '<svg version="1.1" viewBox="0 0 129 100" width="11in" height="8.5in">';
        // output += '<g><path style="fill:#000;stroke:none" d="' + val.Eye.assetPath + '"></g>';
        // output += '<g><path style="fill:#000;stroke:none" d="' + val.Nose.assetPath + '"></g>';
        // output += '<g><path style="fill:#000;stroke:none" d="' + val.Mouth.assetPath + '"></g>';
        // output += '</svg>';
        // //console.log(output);
        // res.header('Content-Type', 'image/svg+xml');
        // //res.status(200).send(output);
        // res.status(200).send(Buffer.from(output));
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
