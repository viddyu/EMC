// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the vitals
  app.get("/api/vitals", function(req, res) {
    var query = {};
    if (req.query.patient_id) {
      query.PatientId = req.query.patient_id;
    }
    db.Vitals.findAll({
      where: query
    }).then(function(dbVitals) {
      res.json(dbVitals);
    });
  });

  // Get route for retrieving a single vitals
  app.get("/api/vitals/:id", function(req, res) {
    db.Vitals.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbVitals) {
      console.log(dbVitals);
      res.json(dbVitals);
    });
  });

  // POST route for saving a new vitals
  app.post("/api/vitals", function(req, res) {
    db.Vitals.create(req.body).then(function(dbVitals) {
      res.json(dbVitals);
    });
  });

  // DELETE route for deleting vitals
  app.delete("/api/vitals/:id", function(req, res) {
    db.Vitals.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbVitals) {
      res.json(dbVitals);
    });
  });

  // PUT route for updating vitals
  app.put("/api/vitals", function(req, res) {
    db.Vitals.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbVitals) {
      res.json(dbVitals);
    });
  });
};
