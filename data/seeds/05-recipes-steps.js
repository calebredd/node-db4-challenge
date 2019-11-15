exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_steps").insert([
        { recipe_id: 1, step_id: 1, ingredient_id: 3, orderStep: 1 },
        { recipe_id: 1, step_id: 4, ingredient_id: 1, orderStep: 2 },
        { recipe_id: 1, step_id: 4, ingredient_id: 2, orderStep: 3 },
        { recipe_id: 2, step_id: 1, ingredient_id: 3, orderStep: 1 },
        { recipe_id: 2, step_id: 2, ingredient_id: 4, orderStep: 6 },
        { recipe_id: 2, step_id: 2, ingredient_id: 5, orderStep: 7 },
        { recipe_id: 2, step_id: 2, ingredient_id: 7, orderStep: 8 },
        { recipe_id: 2, step_id: 2, ingredient_id: 8, orderStep: 9 },
        { recipe_id: 2, step_id: 4, ingredient_id: 6, orderStep: 2 },
        { recipe_id: 2, step_id: 5, ingredient_id: 5, orderStep: 3 },
        { recipe_id: 2, step_id: 5, ingredient_id: 7, orderStep: 4 },
        { recipe_id: 2, step_id: 5, ingredient_id: 8, orderStep: 5 },
        { recipe_id: 3, step_id: 3, ingredient_id: 10, orderStep: 4 },
        { recipe_id: 3, step_id: 4, ingredient_id: 9, orderStep: 2 },
        { recipe_id: 3, step_id: 4, ingredient_id: 11, orderStep: 3 },
        { recipe_id: 3, step_id: 1, ingredient_id: 10, orderStep: 5 },
        { recipe_id: 3, step_id: 5, ingredient_id: 10, orderStep: 6 },
        { recipe_id: 3, step_id: 5, ingredient_id: 9, orderStep: 1 }
      ]);
    });
};
