const router = require("express").Router();
const emcController = require("../../controllers/emcController");

// Matches with /api/emc
router.route("/")
    .post(emcController.create);

router.route("/")
    .get(emcController.findAll);

module.exports = router;