exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("recipe_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("ingredient_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .text("step_name", 128)
        .notNullable()
        .unique();
      tbl.text("description", 128).notNullable();
    })
    .createTable("recipes_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .references("id")
        .inTable("ingredients")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .float("quantity")
        .notNullable()
        .unsigned();
      tbl.primary(["recipe_id", "ingredient_id"]);
    })
    .createTable("recipes_steps", tbl => {
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("step_id")
        .references("id")
        .inTable("steps")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["recipe_id", "step_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_steps")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
