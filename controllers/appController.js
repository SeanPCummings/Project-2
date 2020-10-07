/*eslint-disable*/

module.exports = function (db) {
  return {
    // Get all examples
    getExamples: function (req, res) {
      db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    },

    // get faces
    getFaceParts: function (req, res) {
      const promise1 = db.Eyes.findAll({});
      const promise2 = db.Noses.findAll({});
      const promise3 = db.Mouths.findAll({});
      Promise.all([promise1, promise2, promise3])
      .then((faceValues) => {
        let faceData = {
          eyes: faceValues[0],
          nose: faceValues[1],
          mouth: faceValues[2]
        }
        res.json(faceData);
      });
    },

    // Save pumpkin face
    saveFace: function (req, res) {
      let userFace = JSON.parse(req.body.val);
      db.Pumpkins.create(userFace).then(function (val) {
        res.json(val);
      });
    }, 

    // Get gallery
    getGallery: function (req, res) {

      db.Pumpkins.

      res.json({val: 22});
    } 
  };
};
