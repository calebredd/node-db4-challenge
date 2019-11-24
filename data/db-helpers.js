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
  return db("recipes_ingredients as r_i")
    .where({ recipeId: id })
    .join("recipes as r", "r.id", "r_i.recipeId")
    .join("ingredients as i", "i.id", "r_i.ingredientId")
    .select("i.ingredientName", "r_i.quantity", "r_i.measurement");
}
function findSteps(id) {
  return db("recipes_steps as r_s")
    .where({ recipeId: id })
    .join("recipes as r", "r.id", "r_s.recipeId")
    .join("steps as s", "s.id", "r_s.stepId")
    .select("r_s.stepOrder", "s.stepName", "s.stepDescription")
    .orderBy("r_s.stepOrder");
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
