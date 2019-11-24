exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredientName: "Bread" },
        { ingredientName: "Peanut Butter" },
        { ingredientName: "Jelly" },
        { ingredientName: "Ham" },
        { ingredientName: "Swiss" },
        { ingredientName: "Mayo" },
        { ingredientName: "Lettuce" },
        { ingredientName: "Tomato" },
        { ingredientName: "Mustard" },
        { ingredientName: "Pickle" },
        { ingredientName: "Tortilla" },
        { ingredientName: "Shredded Cheese" },
        { ingredientName: "Huel Powder" },
        { ingredientName: "Soylent Powder" },
        { ingredientName: "Water" },
        { ingredientName: "Almond Milk" }
      ]);
    });
};
