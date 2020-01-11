
exports.seed = function(knex) {
  return knex('projects_resources').del()
    .then(function () {
      return knex('projects_resources').insert([
        {project_id: 1, resources_id: 1, quantity: 1},
        {project_id: 1, resources_id: 2, quantity: 1},
        {project_id: 2, resources_id: 3, quantity: 1},
        {project_id: 2, resources_id: 4, quantity: 3},
      ]);
    });
};
