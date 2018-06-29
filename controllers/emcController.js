const db = require("../models");

// Defining methods for the emcController
module.exports = {

    findAll: function (req, res) {
        db.EMC
            .find(req.query)
            .sort({ date: -1 })
            .then(EMCdata => res.json(EMCdata))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        console.log("emc create", req.body);
        db.EMC
            .create(req.body)
            .then(EMCdata => res.json(EMCdata))
            .catch(err => res.status(422).json(err));
        console.log('db.EMC');
    }

};