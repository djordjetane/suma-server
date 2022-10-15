
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('lecture').del()
      .then(function () {
        // Inserts seed entries
        return knex('lecture').insert([
          {
            name: 'Python za Pocetnike'
          },
          {
            name: 'Geometrija'
          },
          {
            name: 'Algoritmi i strukture podataka'
          },
          {
            name: 'Html'
          },
          {
            name: 'OOP koncepti'
          },
          {
            name: 'Java Spring'
          },
          {
            name: 'Blockchain programming'
          }
        ]);
      });
  };
  