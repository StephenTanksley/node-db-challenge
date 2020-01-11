
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'rowValue1', notes: "", completed: false},
        {id: 2, description: 'rowValue2', notes: "", completed: false},
        {id: 2, description: 'rowValue2', notes: "", completed: false},      
      ]);
    });
};
