const db = require("./db-config"),
  express = require("express");

function find() {
  return db("recipes");
}

function findById(id) {
  return db("recipes").where({ id });
}

function insert(recipeData) {
  return db("recipes").insert(recipeData);
}
function update(id, recipeData) {
  return db("recipes")
    .where({ id })
    .update(recipeData);
}
function remove(id) {
  return db("recipes")
    .where({ id })
    .del();
}
function findIngredients(id) {
  return db("recipes_ingredients as r_i")
    .where({ recipe_id: id })
    .join("recipes as r", "r.id", "r_i.recipe_id")
    .join("ingredients as i", "i.id", "r_i.ingredient_id")
    .select("r_i.ingredient_id", "i.ingredient_name", "r_i.quantity");
}
function findSteps(id) {
  return db("recipes_steps as r_s")
    .where({ recipe_id: id })
    .join("recipes as r", "r.id", "r_s.recipe_id")
    .join("steps as s", "s.id", "r_s.step_id")
    .join("ingredients as i", "i.id", "r_s.ingredient_id")
    .select("r_s.orderStep", "s.step_name", "i.ingredient_name")
    .orderBy("r_s.orderStep");
}

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  findIngredients,
  findSteps
};
