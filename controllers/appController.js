module.exports = function (db) {
  return {

    // get faces
    getFaceParts: function (req, res) {
      const promise1 = db.Eye.findAll({});
      const promise2 = db.Nose.findAll({});
      const promise3 = db.Mouth.findAll({});
      Promise.all([promise1, promise2, promise3]).then((faceValues) => {
        const faceData = {
          eyes: faceValues[0],
          nose: faceValues[1],
          mouth: faceValues[2]
        };
        res.json(faceData);
      });
    },

    // Save pumpkin face
    saveFace: function (req, res) {
      const userFace = JSON.parse(req.body.val);
      db.Pumpkin.create(userFace).then(function (val) {
        res.json(val);
      });
    },

    // Get gallery
    getGallery: function (req, res) {
      db.Pumpkin.findAll({
        where: { UserId: req.params.id },
        include: [db.Eye, db.Nose, db.Mouth]
      }).then(val => {
        res.json(val);
      });
    },

    // Get single pumpkin
    getPumpkin: function (req, res) {
      db.Pumpkin.findOne({
        where: { id: req.params.id }
      }).then(val => {
        res.json(val);
      });
    },

    // Get single pumpkin to delete
    deletePumpkin: function (req, res) {
      db.Pumpkin.destroy({
        where: { id: req.params.id }
      }).then(val => {
        res.json(val);
      });
    }

  };
};
