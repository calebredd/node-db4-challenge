exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
