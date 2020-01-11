
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Complete webdb sprint.', description: 'take Lambda School web data persistence sprint challenge.', completed: false},
        {id: 2, name: 'Clean the house.', description: 'Clean up the house to make it presentable for guests.', completed: false},
      ]);
    });
};