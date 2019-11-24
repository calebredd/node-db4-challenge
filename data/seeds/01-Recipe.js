exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipeName: "PB&J",
          recipeDescription:
            "The simplest lunchtime nostalgic sandwich of American Childhood! Peanut Butter stuck to your tongue and Jelly for your Sweet Tooth. With a glass of Milk it becomes a Fancy Combo!"
        },
        {
          recipeName: "Ham-n-Swiss",
          recipeDescription:
            "When you're feeling fancy and want to sink your teeth into something, this is the go-to sandwich for a Saturday afternoon!"
        },
        {
          recipeName: "Quesadilla",
          recipeDescription:
            "When you need a warm bite of gooey cheese, grab the hot sauce or bbq sauce and you're in for a good time!"
        },
        {
          recipeName: "Soylent",
          recipeDescription:
            "Modern food made of Powder. Personally, I enjoy the Chocolate flavor, but shake well to avoid clumps!"
        },
        {
          recipeName: "Huel",
          recipeDescription:
            "Another Powder Food alternative to drink down. Human-Fuel AKA HUEL!"
        }
      ]);
    });
};
