const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>Welcome to the Recipe Book Backend Server</h2>");
});
router.get("/api", (req, res) => {
  res.send("<h2>Welcome to the Recipe Book API</h2>");
});
module.exports = router;
