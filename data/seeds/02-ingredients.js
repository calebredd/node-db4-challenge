exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Peanut Butter" },
        { ingredient_name: "Jelly" },
        { ingredient_name: "Bread" },
        { ingredient_name: "Ham" },
        { ingredient_name: "Swiss" },
        { ingredient_name: "Mayo" },
        { ingredient_name: "Lettuce" },
        { ingredient_name: "Tomato" },
        { ingredient_name: "Cheese" },
        { ingredient_name: "Tortilla" },
        { ingredient_name: "Salsa" }
      ]);
    });
};
