const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with /api/emc
router.route("/")
    .post(userController.create);

router.route("/")
    .get(userController.findAll);

module.exports = router;