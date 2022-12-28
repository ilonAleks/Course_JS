const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes.js"));
router.use("/comment", require("./comment.routes.js"));
router.use("/profession", require("./profession.routes.js"));
router.use("/quality", require("./quality.rotes.js"));
router.use("/user", require("./user.rotes.js"));

module.exports = router;
