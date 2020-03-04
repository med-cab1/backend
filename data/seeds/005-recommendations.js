
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recommendations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recommendations').insert([
        {strain: 'Blueberry-Trainwreck', info: 'Daily Dosage: 17mg THC or 16mg CBD, in 6 sprays spread out over a 24-hour period.', user_id: 1},
        {strain: 'Boggle-Gum', info: 'Daily Dosage: 17mg THC or 16mg CBD, in 6 sprays spread out over a 24-hour period.', user_id: 1},
        {strain: 'Huckleberry-Hound', info: 'Daily Dosage: 17mg THC or 16mg CBD, in 6 sprays spread out over a 24-hour period.', user_id: 1}
      ]);
    });
};
