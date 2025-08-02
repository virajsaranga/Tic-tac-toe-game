const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Game routes are working!");
});

module.exports = router;
