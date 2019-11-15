
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity:3.5},
        {recipe_id: 1, ingredient_id: 2, quantity:3.5},
        {recipe_id: 1, ingredient_id: 3, quantity:3.5},
        {recipe_id: 2, ingredient_id: 3, quantity:3.5},
        {recipe_id: 2, ingredient_id: 4, quantity:3.5},
        {recipe_id: 2, ingredient_id: 5, quantity:3.5},
        {recipe_id: 2, ingredient_id: 6, quantity:3.5},
        {recipe_id: 2, ingredient_id: 7, quantity:3.5},
        {recipe_id: 2, ingredient_id: 8, quantity:3.5},
        {recipe_id: 3, ingredient_id: 9, quantity:3.5},
        {recipe_id: 3, ingredient_id: 10, quantity:3.5},
        {recipe_id: 3, ingredient_id: 11, quantity:3.5}
      ]);
    });
};
