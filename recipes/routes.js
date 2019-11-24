const express = require("express"),
  db = require("../data/db-helpers"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>Welcome to the Recipe Book Backend Server</h2>");
});
router.get("/api", (req, res) => {
  res.send("<h2>Welcome to the Recipe Book API</h2>");
});
router.get("/api/recipes", (req, res) => {
  db.get()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to access database" });
    });
});

module.exports = router;
