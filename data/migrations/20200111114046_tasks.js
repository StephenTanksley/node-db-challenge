exports.up = async function(knex) {
    await knex.schema.createTable('tasks', (table) => {
        table.increments('id')
        table.string('description', 128).notNullable()
        table.string('notes', 512)
        table.boolean('completed').default(false)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks')
};
