exports.up = async function(knex) {
    await knex.schema.createTable('tasks', (table) => {
        table.increments('id')
        table.string('description', 128).notNullable()
        table.string('notes', 512)
        table.boolean('completed').defaultTo(false)
        table.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks')
};
