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

    // get faces DELETE LATER TEST ONLY
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
      
      //res.json(testFaceData);
    },

    saveFace: function (req, res) {
      console.log(req.body);
      let userFace = req.body.byid
      req.body = parseInt(req.body, NaN)
      //TODO: 
        db.Pumpkin.create(userFace).then(function(){
          console.log("pumpkin added to db")
          res.json(userFace);
        })
      // 1. within userFace convert values of eyes nose and mouth into integers, right now they're strings
      // 2. insert userFace into the database
    } 

  };
};
