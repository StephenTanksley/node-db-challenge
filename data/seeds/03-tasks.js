
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, description: 'rowValue1', notes: "", completed: false},
        {id: 2, description: 'rowValue2', notes: "", completed: false},
        {id: 2, description: 'rowValue2', notes: "", completed: false},      
      ]);
    });
};
