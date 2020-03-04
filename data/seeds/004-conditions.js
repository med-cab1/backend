
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('conditions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {condition: "Cancer - Pain"},
        {condition: "Cancer - Nausea"},
        {condition: "Cancer - Wasting"},
        {condition: "Glaucoma"},
        {condition: "HIV/AIDS"},
        {condition: "Seizures"},
        {condition: "Muscle Spasms"},
        {condition: "Autism"},
        {condition: "Sleep Apnia"},
        {condition: "Tourette Syndrome"},
        {condition: "ALS"},
        {condition: "IBS"},
        {condition: "Intractable Pain"},
        {condition: "PSD"}
      ]);
    });
};
