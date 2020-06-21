
exports.up = function(knex) {
    return knex.schema.createTable('user', function (table){
        table.string('id').notNullable();
        table.string('name').notNullable();
        table.string('email').primary;
        table.string('password').notNullable();
        table.boolean('admin').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};