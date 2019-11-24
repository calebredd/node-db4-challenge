exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_steps").insert([
        //Spread Jelly on Bread
        { recipeId: 1, stepId: 4, ingredientId: 3, stepOrder: 1 },
        //Spread PB on Bread
        { recipeId: 1, stepId: 4, ingredientId: 2, stepOrder: 2 },
        //Slice Bread Corner to Corner
        { recipeId: 1, stepId: 1, ingredientId: 1, stepOrder: 3 },
        //Slice Bread Corner to Corner
        { recipeId: 2, stepId: 1, ingredientId: 1, stepOrder: 8 },
        //Slice Ham
        { recipeId: 2, stepId: 1, ingredientId: 4, stepOrder: 1 },
        //Slice Swiss
        { recipeId: 2, stepId: 1, ingredientId: 5, stepOrder: 2 },
        //Slice Lettuce
        { recipeId: 2, stepId: 1, ingredientId: 7, stepOrder: 3 },
        //Slice Tomato
        { recipeId: 2, stepId: 1, ingredientId: 8, stepOrder: 4 },
        //Spread Mayo
        { recipeId: 2, stepId: 4, ingredientId: 6, stepOrder: 5 },
        //Spread Mustard
        { recipeId: 2, stepId: 4, ingredientId: 9, stepOrder: 6 },
        //Spread Pickle
        { recipeId: 2, stepId: 4, ingredientId: 10, stepOrder: 7 },
        //Slice Quesadilla
        { recipeId: 3, stepId: 1, ingredientId: 11, stepOrder: 3 },
        //Heat Tortilla
        { recipeId: 3, stepId: 6, ingredientId: 11, stepOrder: 2 },
        //Spread Cheese
        { recipeId: 3, stepId: 4, ingredientId: 12, stepOrder: 1 },
        //Poor Water
        { recipeId: 5, stepId: 3, ingredientId: 15, stepOrder: 1 },
        //Blend Huel with Water
        { recipeId: 5, stepId: 2, ingredientId: 13, stepOrder: 2 },
        //Poor Almond Milk
        { recipeId: 4, stepId: 3, ingredientId: 16, stepOrder: 1 },
        //Blend Soylent with Almond Milk
        { recipeId: 4, stepId: 2, ingredientId: 14, stepOrder: 2 }
      ]);
    });
};
