const Users = require('../users/users-model');
const db = require('../data/dbConfig');

function getRecommendations(user_id) {
    return db('recommendations').where({ user_id })
};

async function addRecommendations(recommendation) {
    const [id] = await db('recommendations').insert(recommendation);
    return id;
};

function getEffects() {
    return db('effects');
};

function getFlavors() {
    return db('flavors');
};

function getConditions() {
    return db('Conditions');
};

module.exports = {
    getRecommendations,
    addRecommendations,
    getEffects,
    getFlavors,
    getConditions
}