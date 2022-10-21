
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then( () => {
      // Inserts seed entries
      return knex('user').insert([
        { 
          name: 'Dejan Stanković'
        },
        { 
          name: 'Tijana Tošković'
        },
        { 
          name: 'Marija Konatar' 
        },
        { 
          name: 'Jelena Vukojičić'
        },
        { 
          name: 'Emilija Knežević'
        },
        { 
          name: 'Lenka Dobrodolac'
        },
        { 
          name: 'Mirjana Stefanovic'
        },
        { 
          name: 'Đorđe Tanasković'
        },
        { 
          name: 'Anđela Živadinović'
        },
        { 
          name: 'Andjela Ostojić'
        },
        { 
          name: 'Olivera Džonić'
        },
        { 
          name: 'Emilija Piljojčić' 
        },
        { 
          name: 'Đorđe Polomčić'
        },
        { 
          name: 'Tamara Baranin'
        },
        { 
          name: 'Ema Marinković'
        },
        { 
          name: 'Blagoje Rozgić' 
        },
        { 
          name: 'Nikola Čuturić'
        },
        { 
          name: 'Milena Stojić'
        },
        { 
          name: 'Lazar Jovanović'
        },
        { 
          name: 'Darko Setavanovic'
        },
        { 
          name: 'Mina Blagojević'
        },
        { 
          name: 'Radivoje Vlaškalić'
        },
        { 
          name: 'Nevena Milisavljević'
        },
        { 
          name: 'Mira Milosavljević' 
        },
        { 
          name: 'Marina Stanojlović'
        },
        { 
          name: 'Miloš Milićev'
        },
        { 
          name: 'Luka Petković'
        },
        { 
          name: 'Ivan Ćurić'
        },
        { 
          name: 'Maša Milivojević' 
        },
        { 
          name: 'Jovana Urošević'
        },
        { 
          name: 'Boris Stanković'
        },
        { 
          name: 'Nevena Dinić'
        },
        { 
          name: 'Milica Mladenović'
        },
        { 
          name: 'Natalija Djuric'
        },
        { 
          name: 'Tijana Petrovic'
        },
        { 
          name: 'Stefan Kovač'
        },
        { 
          name: 'Stefan Nešković'
        },
        { 
          name: 'Mihailo Jakovljevic' 
        },
        { 
          name: 'David Pantović'
        },
        { 
          name: 'Jelena Pejin' 
        },
        { 
          name: 'Milana Novakovic'
        },
        { 
          name: 'Anastasija Divjak'
        },
        { 
          name: 'Nevena Marković'
        },
        { 
          name: 'Iva Djukic'
        },
        { 
          name: 'Katarina Backović'
        },
        { 
          name: 'Marko Veljović'
        },
        { 
          name: 'Mateja Janić'
        },
        { 
          name: 'Jovana Brkljač'
        },
        { 
          name: 'Jelena Tešić'
        },
        { 
          name: 'Branko Cvetković'
        },
        { 
          name: 'Jovan Samardžić'
        },
        { 
          name: 'Ivona Matijevic'
        },
        { 
          name: 'Jana Stojanovic'
        },
        { 
          name: 'Isidora Kozic'
        },
        { 
          name: 'Tijana Petrovic'
        },
        { 
          name: 'Anastasija Kozić'
        },
        { 
          name: 'Nevena Janković'
        },
        { 
          name: 'Nevena Janković'
        },
        { 
          name: 'Anastasija Polić' 
        },
        { 
          name: 'Borislav Petrović' 
        },
        { 
          name: 'Nikola Stojanović'
        },
        { 
          name: 'Iva Krstić'
        },
        { 
          name: 'Jana Zivkovic' 
        },
        { 
          name: 'Natalija Vitas'
        },
        { 
          name: 'Nevena Stojanović'
        },
        { 
          name: 'Ognjen Petrov'
        },
        { 
          name: 'Ognjen Nešković'
        },
        { 
          name: 'Jovana Lazić'
        },
        { 
          name: 'Nikola Vučić' 
        },
        { 
          name: 'Gala Posedi'
        },
        { 
          name: 'Pavle Sekešan'
        },
        { 
          name: 'Sara Crnomarković'
        },
        { 
          name: 'Luka Vulovic'
        },
        { 
          name: 'Nemanja Zivkovic'
        },
        { 
          name: 'Jovan Arizanović'
        },
        { 
          name: 'Emilija Timotijevic' 
        },
        { 
          name: 'Kristina Timotijevic'
        },
        { 
          name: 'Luka Vuksanović' 
        },
        { 
          name: 'Matija Radulovic'
        },
        { 
          name: 'Filip Jankovic'
        },
        { 
          name: 'Filip Petrović'
        },
        { 
          name: 'Matija Obradović'
        },
        { 
          name: 'Boris Cvitak'
        },
        { 
          name: 'Olga Obradović'
        },
        { 
          name: 'Teodora Ilic'
        },
        { 
          name: 'Uroš Paunković'
        },
        { 
          name: 'Ilija Kocinac'
        },
        { 
          name: 'Ana Milinović'
        },
        { 
          name: 'Kristina Mićić'
        },
        { 
          name: 'Dragana Maljković'
        }
      ]);
  });
};