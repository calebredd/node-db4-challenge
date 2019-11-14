exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.text("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text("description",128).notNullable();
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .notNullable()
        .unsigned();
      tbl
        .integer("ingredients_id")
        .references("id")
        .inTable("ingredients")
        .notNullable()
        .unsigned();
      tbl
        .float("quantity")
        .notNullable()
        .unsigned();
    })
    .createTable("recipes_steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .notNullable()
        .unsigned();
      tbl
        .integer("steps_id")
        .references("id")
        .inTable("steps")
        .notNullable()
        .unsigned();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
