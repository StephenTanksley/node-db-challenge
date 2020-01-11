
exports.seed = function(knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {id: 1, name: 'computer', description: 'A Dell Inspiron 15 3000 notebook.'},
        {id: 2, name: 'mouse', description: 'logitech wireless mouse'},
        {id: 3, name: 'Vacuum', description: 'Shark modular vacuum'},
        {id: 4, name: 'sponge', description: 'Sponge with scrubber pad on the back.'},
      ]);
    });
};
