exports.up = async function(knex) {
    await knex.schema.createTable('resources', (table) => {
        table.increments('id')
        table.string('name', 128).notNullable()
        table.string('description', 512)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('resources')
};
