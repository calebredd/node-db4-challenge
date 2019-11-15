const express = require("express"),
  server = express(),
  port = process.env.PORT || 5000,
  cors = require("cors"),
  Recipes = require("./data/db-helpers");
server.use(cors());
server.use(express.json());
server.get("/api", (req, res) => {
  res.status(200).send("<h1>Welcome to the API</h1>");
});
server.get("/api/recipes", (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Unable to access Cookbook database" });
    });
});
server.get("/api/recipes/:id", (req, res) => {
  const { id } = req.params;
  Recipes.findById(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access that Recipe" });
    });
});
server.get("/api/recipes/:id/ingredients", (req, res) => {
  const { id } = req.params;
  Recipes.findIngredients(id)
    .then(ingredients => {
      res.status(200).json({ ingredients });
    })
    .catch(() => {
      res.status(500).json({
        errorMessage: "Unable to access that Recipe's Ingredients List"
      });
    });
});
server.get("/api/recipes/:id/steps", (req, res) => {
  const { id } = req.params;
  Recipes.findSteps(id)
    .then(steps => {
      res.status(200).json({ steps });
    })
    .catch(() => {
      res.status(500).json({
        errorMessage: "Unable to access that Recipe's Steps List"
      });
    });
});
server.listen(port, () => console.log(`Server running on port: ${port}`));
