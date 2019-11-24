exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("recipeName", 128)
        .notNullable()
        .unique();
      tbl.text("recipeDescription", 128).notNullable();
      tbl.text("recipeImageLink");
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .text("stepName", 128)
        .notNullable()
        .unique();
      tbl.text("stepDescription", 128).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("ingredientName", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipes_ingredients", tbl => {
      tbl
        .integer("recipeId")
        .references("id")
        .inTable("recipes")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredientId")
        .references("id")
        .inTable("ingredients")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .float("quantity")
        .notNullable()
        .unsigned();
      tbl.text("measurement", 128).notNullable();
      tbl.primary(["recipeId", "ingredientId"]);
    })
    .createTable("recipes_steps", tbl => {
      tbl
        .integer("recipeId")
        .references("id")
        .inTable("recipes")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("stepId")
        .references("id")
        .inTable("steps")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredientId")
        .references("id")
        .inTable("ingredients")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.integer("stepOrder").notNullable();
      tbl.primary(["recipeId", "stepId", "ingredientId"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .deleteTableIfExists("recipes_steps")
    .deleteTableIfExists("recipes_ingredients")
    .deleteTableIfExists("ingredients")
    .deleteTableIfExists("steps")
    .deleteTableIfExists("recipes");
};
