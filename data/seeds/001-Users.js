const bcrypt = require('bcryptjs');

let user = {};
user.password = bcrypt.hashSync('ms2020', 10);;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'mattsteele', password: user.password}
      ]);
    });
};
