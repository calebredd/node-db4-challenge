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
  db.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access database" });
    });
});
router.get("/api/recipes/:id", (req, res) => {
  db.findById(req.params.id)
    .then(recipe => {
      if (recipe.length > 0) {
        res.status(200).json(recipe);
      } else {
        res.status(404).send("Error 404: Page Not Found");
      }
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access recipe details" });
    });
});
router.post("/api/recipes", (req, res) => {
  const addRecipe = req.body;
  db.insert(addRecipe)
    .then(() => {
      res.status(200);
      db.find()
        .then(recipes => {
          res.status(200).json(recipes);
        })
        .catch(() => {
          res.status(500).json({ errorMessage: "Unable to access database" });
        });
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Unable to add recipe to database" });
    });
});
router.put("/api/recipes/:id", (req, res) => {
  const editRecipe = req.body;
  db.update(req.params.id, editRecipe)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access database" });
    });
});
router.delete("/api/recipes/:id", (req, res) => {
  db.remove(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Unable to remove Recipe from database" });
    });
});
router.get("/api/recipes/:id/ingredients", (req, res) => {
  db.findIngredients(req.params.id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access Shopping List" });
    });
});
router.get("/api/recipes/:id/instructions", (req, res) => {
  db.findSteps(req.params.id)
    .then(Steps => {
      res.status(200).json(Steps);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access Instructions" });
    });
});

module.exports = router;
