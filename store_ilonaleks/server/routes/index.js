const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes.js"));
router.use("/shoppingCard", require("./shoppingCard.routes.js"));
router.use("/category", require("./category.routes.js"));
router.use("/good", require("./good.rotes.js"));
router.use("/user", require("./user.rotes.js"));

module.exports = router;
