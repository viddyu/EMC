const db = require("../models");

// Defining methods for the userController
module.exports = {

    findAll: function (req, res) {
        db.USER
            .find(req.query)
            .sort({ date: -1 })
            .then(USERdata => res.json(USERdata))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        console.log("user create", req.body);
        db.USER
            .create(req.body)
            .then(USERdata => res.json(USERdata))
            .catch(err => res.status(422).json(err));
        console.log('db.USER');
    }

};