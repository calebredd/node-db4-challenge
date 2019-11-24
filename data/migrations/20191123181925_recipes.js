exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipeName", 128).notNullable();
      tbl.string("recipeDescription", 128).notNullable();
      tbl.string("recipeImageLink");
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl.string("stepName", 128).notNullable();
      tbl.string("stepDescription", 128).notNullable();
    })
    .createTable("recipes_steps", tbl => {
      tbl
        .integer("recipeId")
        .references("id")
        .fromTable("recipes");
      tbl
        .integer("stepId")
        .references("id")
        .fromTable("steps");
      tbl.integer("stepOrder").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredientName", 128);
    })
    .createTable("recipes_ingredients", tbl => {
      tbl
        .integer("recipeId")
        .references("id")
        .fromTable("recipes");
      tbl
        .integer("ingredientId")
        .references("id")
        .fromTable("ingredients");
      tbl.integer("quantity").notNullable();
      tbl.string("measurement", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .deleteTableIfExists("recipes_ingredients")
    .deleteTableIfExists("ingredients")
    .deleteTableIfExists("recipes_steps")
    .deleteTableIfExists("steps")
    .deleteTableIfExists("recipes");
};
