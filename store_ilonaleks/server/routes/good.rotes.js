const express = require("express");
const Good = require("../models/Good.js");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Good.find();
    res.status(200).json({ list });
  } catch (e) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

module.exports = router;
