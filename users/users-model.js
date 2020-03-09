const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function find() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

function update(changes, id) {
    return db('users').where({ id }).update(changes);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function remove(id) {
    return db('users')
        .where({id})
        .del();
}