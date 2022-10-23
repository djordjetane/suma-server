
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('lecture').del()
      .then(function () {
        // Inserts seed entries
        return knex('lecture').insert([
          {
            name: 'Anonimnost Glasanja'
          },
          {
            name: 'SevenBridges'
          },
          {
            name: 'Marija Mikic'
          },          
          {
            name: 'Bosch'
          },
          {
            name: 'Mladen Canovic'
          },
          {
            name: 'Bojana Milosevic'
          },
          {
            name: 'Vladimir Djosovic'
          },
          {
            name: 'Mozzart'
          },
          {
            name: 'Banca Intesa'
          },
          {
            name: 'Bosch'
          },
          {
            name: 'Banca Intesa'
          },
          {
            name: 'PlayStudios'
          }
        ]);
      });
  };
  