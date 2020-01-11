exports.up = async function(knex) {
    await knex.schema.createTable('projects', (table) => {
        table.increments('id')
        table.string('name', 128).notNullable()
        table.string('description', 512)
        table.boolean('completed').default(false)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects')
};
