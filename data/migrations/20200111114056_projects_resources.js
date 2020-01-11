exports.up = async function(knex) {
    await knex.schema.createTable('projects_resources', (table) => {
      table.integer('project_id')
          .notNullable()
          .references('id')
          .inTable('project')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
  
      table.integer('resources_id')
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
  
      table.integer('quantity')
          .notNullable()
          .unsigned()
          .defaultTo(1)
      table.primary(['project_id', 'resources_id'])
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects_resources')
  };