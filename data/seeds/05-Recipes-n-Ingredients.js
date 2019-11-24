exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        /*Jelly*/ {
          recipeId: 1,
          ingredientId: 3,
          quantity: 1,
          measurement: "Tablespoon"
        },
        /*PB*/
        {
          recipeId: 1,
          ingredientId: 2,
          quantity: 1,
          measurement: "Tablespoon"
        },
        /*Bread*/ {
          recipeId: 1,
          ingredientId: 1,
          quantity: 2,
          measurement: "Slices"
        },
        /*Bread*/ {
          recipeId: 2,
          ingredientId: 1,
          quantity: 2,
          measurement: "Slices"
        },
        /*Ham*/ {
          recipeId: 2,
          ingredientId: 4,
          quantity: 3,
          measurement: "Slices"
        },
        /*Swiss*/ {
          recipeId: 2,
          ingredientId: 5,
          quantity: 1,
          measurement: "slice"
        },
        /*Lettuce*/ {
          recipeId: 2,
          ingredientId: 7,
          quantity: 1,
          measurement: "leaf"
        },
        /*Tomato*/ {
          recipeId: 2,
          ingredientId: 8,
          quantity: 1,
          measurement: "slice"
        },
        /*Mayo*/ {
          recipeId: 2,
          ingredientId: 6,
          quantity: 1,
          measurement: "Tablespoon"
        },
        /*Mustard*/ {
          recipeId: 2,
          ingredientId: 9,
          quantity: 1,
          measurement: "Tablespoon"
        },
        /*Pickle*/ {
          recipeId: 2,
          ingredientId: 10,
          quantity: 4,
          measurement: "Slices"
        },
        /*Tortilla*/ {
          recipeId: 3,
          ingredientId: 11,
          quantity: 1,
          measurement: "Tortilla"
        },
        /*Cheese*/ {
          recipeId: 3,
          ingredientId: 12,
          quantity: 1,
          measurement: "Cup"
        },
        /*Water*/ {
          recipeId: 5,
          ingredientId: 15,
          quantity: 12,
          measurement: "Fluid-Ounces"
        },
        /*Huel*/ {
          recipeId: 5,
          ingredientId: 13,
          quantity: 2,
          measurement: "Scoops"
        },
        /*Almond Milk */ {
          recipeId: 4,
          ingredientId: 16,
          quantity: 12,
          measurement: "Fluid-Ounces"
        },
        /*Soylent*/ {
          recipeId: 4,
          ingredientId: 14,
          quantity: 2,
          measurement: "Scoops"
        }
      ]);
    });
};
