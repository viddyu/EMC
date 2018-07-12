const router = require("express").Router();
const emcRoutes = require("./emcs");
const userRoutes = require("./users");

// EMC routes
router.use("/emcs", emcRoutes);
router.use("/users", userRoutes);

module.exports = router;