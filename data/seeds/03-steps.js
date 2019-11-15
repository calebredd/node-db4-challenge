exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { step_name: "Toast", description: "Toast the bread" },
        { step_name: "Apply", description: "Apply layers" },
        { step_name: "Fold", description: "Fold in half" },
        { step_name: "Spread", description: "Use knife to Spread on surface" },
        { step_name: "Slice", description: "Use knife Cut things into thin slices" }
      ]);
    });
};
