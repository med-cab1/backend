
exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
        users.increments();
        users.string('username', 255).notNullable().unique();
        users.string('password', 255).notNullable();
    })
    .createTable('effects', effects => {
        effects.increments();
        effects.string('effect', 255).notNullable().unique();
    })
    .createTable('flavors', flavors => {
        flavors.increments();
        flavors.string('flavor', 255).notNullable().unique();
    })
    .createTable('conditions', conditions => {
        conditions.increments();
        conditions.string('condition', 255).notNullable().unique();
    })
    .createTable('recommendations', recommendations => {
        recommendations.increments();
        recommendations.string('strain', 255).notNullable();
        recommendations.string('intake_method', 255).notNullable();
        recommendations.decimal('dosage_cbd');
        recommendations.decimal('dosage_thc');
        recommendations.string('frequency', 255).notNullable();
        recommendations.integer('user_id').unsigned().notNullable().references('users.id').onDelete('CASCADE').onUpdate('Cascade');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recommendations')
        .dropTableIfExists('conditions')
        .dropTableIfExists('flavors')
        .dropTableIfExists('effects')
        .dropTableIfExists('users');
};
