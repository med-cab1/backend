
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('effects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('effects').insert([
        {effect: "Creative"},
        {effect: "Energetic"},
        {effect: "Tingly"},
        {effect: "Euphoric"},
        {effect: "Relaxed"},
        {effect: "Aroused"},
        {effect: "Happy"},
        {effect: "Uplifted"},
        {effect: "Hungry"},
        {effect: "Talkative"},
        {effect: "None"},
        {effect: "Giggly"},
        {effect: "Focused"},
        {effect: "Sleepy"},
        {effect: "Dry Mouth"}
      ]);
    });
};
