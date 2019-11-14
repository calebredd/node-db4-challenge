exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "PB&J" },
        { recipe_name: "Ham&Swiss" },
        { recipe_name: "Quesadilla" }
      ]);
    });
};
