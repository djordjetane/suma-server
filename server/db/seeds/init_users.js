
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('user').del()
      .then( () => {
        // Inserts seed entries
        return knex('user').insert([
          {
           first_name: 'Milos', 
           last_name: 'Obilic', 
           email: 'm@m',
           phone: '06413891389',           
          },
          {
           first_name: 'Marko', 
           last_name: 'Markovic', 
           email: 'markomarkovic123@gmail.com',
           phone: '0641234568',           
          },
          {
           first_name: 'Srecko', 
           last_name: 'Sreckovic', 
           email: 's.sreckovic@gmail.com',
           phone: '0641234569',           
           },
           {
            first_name: 'djordje',
            last_name: 'cvarkov',
            email: 'b@b',
            phone: '0641234567',
          },
          {
            first_name: 'Joe',
            last_name: 'Rogan',
            email: 'j@r.com',
            phone: '21255544156',            
          },
          {
            first_name: 'Ada',
            last_name: 'Lovelace',
            email: 'AdaLoveLace@gmail.com',
            phone: '0659531846',            
          }
        ]);
      });
  };
  