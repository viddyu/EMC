const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with /api/user
router.route("/user")
    .post(userController.create);

router.route("/user")
    .get(userController.findAll);

module.exports = router;