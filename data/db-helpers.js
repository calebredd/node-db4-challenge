const db = require("./db-config");
function find() {
  return db("recipes");
}
function findById(id) {
  return db("recipes").where({ id });
}
function remove(id) {
  return db("recipes")
    .where({ id })
    .del();
}
function insert(recipeData) {
  return db("recipes").insert(recipeData);
}
function update(id, recipeData) {
  return db("recipes")
    .where({ id })
    .update(recipeData);
}
function findIngredients(id) {
  return db("recipes as r")
    .join("recipes_ingredients as r_i", "r_i.recipeId", "r.id")
    .join("ingredients as i", "i.id", "r_i.ingredientId")
    .select(
      "r.id",
      "r.recipeName",
      "i.ingredientName",
      "r_i.quantity",
      "r_i.measurement"
    )
    .where({ id });
}
function findSteps(id) {
  return db("recipes as r")
    .join("recipes_steps as r_s", "r_s.recipeId", "r.id")
    .join("steps as s", "s.id", "r_s.stepsId")
    .select(
      "r.id",
      "r.recipeName",
      "s.stepNumber",
      "s.stepName",
      "s.stepDescription"
    )
    .where({ id })
    .orderBy("r_s.stepNumber");
}

module.exports = {
  find,
  findById,
  remove,
  insert,
  update,
  findIngredients,
  findSteps
};
