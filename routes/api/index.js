const router = require("express").Router();
const emcRoutes = require("./emc");

// EMC routes
router.use("/emc", emcRoutes);

module.exports = router;