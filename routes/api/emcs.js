const router = require("express").Router();
const emcController = require("../../controllers/emcController");

// Matches with /api/emc
router.route("/")
    .post(emcController.create);

module.exports = router;