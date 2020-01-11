exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, description: 'Log on to github.', notes: "Click on the clickety click.com", completed: false, project_id: 1},
        {id: 2, description: 'Take sprint exam', notes: "Code for your liiiiiife", completed: false, project_id: 1},
        {id: 3, description: 'Vacuum', notes: "vacuum up the dirt in the great room. The puppies have a tendency of bringing in dirt from the yard.", completed: false, project_id: 2},      
        {id: 4, description: 'Scrub sink', notes: "Use the sponges from under the sink and the cleaner to get it looking nice. Mom always hates a dirty sink.", completed: false, project_id: 2}, 
      ]);
    });
};
