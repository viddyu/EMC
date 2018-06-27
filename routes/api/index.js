const router = require("express").Router();
const emcRoutes = require("./emcs");

// EMC routes
router.use("/emcs", emcRoutes);

module.exports = router;