exports.up = function(knex) {
    return knex.schema.createTable('recycle', function (table){
        table.increments(); 
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('category').notNullable();
        table.string('description').notNullable();
        table.string('curiosities').notNullable();
        table.string('advantage').notNullable();
        table.string('disadvantage').notNullable();
        table.string('discard').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('recycle');
};
