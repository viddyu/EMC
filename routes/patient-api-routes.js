var db = require("../models");

module.exports = function(app) {
  // Find all Patients and return them to the user with res.json
  app.get("/api/patients", function(req, res) {
    db.Patient.findAll({}).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });

  app.get("/api/patients/:id", function(req, res) {
    // Find one Patient with the id in req.params.id and return them to the user with res.json
    db.Patient.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });

  app.post("/api/patients", function(req, res) {
    // Create an Patient with the data available to us in req.body
    console.log(req.body);
    db.Patient.create(req.body).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });

  app.delete("/api/patients/:id", function(req, res) {
    // Delete the Patient with the id available to us in req.params.id
    db.Patient.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });
};
