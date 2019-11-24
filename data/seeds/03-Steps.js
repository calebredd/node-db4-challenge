exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        //1 Slice
        { stepName: "Slice", stepDescription: "Use a knife to section" },
        //2 Poor
        { stepName: "Poor", stepDescription: "Add liquid to container" },
        //3 Blend
        {
          stepName: "Blend",
          stepDescription: "Add and mix by hand, spoon or blender"
        },
        //4 Spread
        { stepName: "Spread", stepDescription: "Shmear over the surface" },
        //5 Layer
        {
          stepName: "Layer",
          stepDescription: "Stack and pile as high as you can stomach"
        },
        //6 Heat
        {stepName:"Head",stepDescription:"Heat on stove top until crisp or brown."}
      ]);
    });
};
