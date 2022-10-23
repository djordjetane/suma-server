
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then( () => {
      // Inserts seed entries
      return knex('user').insert([
        { 
          first_name: 'Dejan',
					last_name: 'Stanković'
        },
        { 
          first_name: 'Tijana',
					last_name: 'Tošković'
        },
        { 
          first_name: 'Marija',
					last_name: 'Konatar' 
        },
        { 
          first_name: 'Jelena',
					last_name: 'Vukojičić'
        },
        { 
          first_name: 'Emilija',
					last_name: 'Knežević'
        },
        { 
          first_name: 'Lenka',
					last_name: 'Dobrodolac'
        },
        { 
          first_name: 'Mirjana',
					last_name: 'Stefanovic'
        },
        { 
          first_name: 'Đorđe',
					last_name: 'Tanasković'
        },
        { 
          first_name: 'Anđela',
					last_name: 'Živadinović'
        },
        { 
          first_name: 'Andjela',
					last_name: 'Ostojić'
        },
        { 
          first_name: 'Olivera',
					last_name: 'Džonić'
        },
        { 
          first_name: 'Emilija',
					last_name: 'Piljojčić' 
        },
        { 
          first_name: 'Đorđe',
					last_name: 'Polomčić'
        },
        { 
          first_name: 'Tamara',
					last_name: 'Baranin'
        },
        { 
          first_name: 'Ema',
					last_name: 'Marinković'
        },
        { 
          first_name: 'Blagoje',
					last_name: 'Rozgić' 
        },
        { 
          first_name: 'Nikola',
					last_name: 'Čuturić'
        },
        { 
          first_name: 'Milena',
					last_name: 'Stojić'
        },
        { 
          first_name: 'Lazar',
					last_name: 'Jovanović'
        },
        { 
          first_name: 'Darko',
					last_name: 'Setavanovic'
        },
        { 
          first_name: 'Mina',
					last_name: 'Blagojević'
        },
        { 
          first_name: 'Radivoje',
					last_name: 'Vlaškalić'
        },
        { 
          first_name: 'Nevena',
					last_name: 'Milisavljević'
        },
        { 
          first_name: 'Mira',
					last_name: 'Milosavljević' 
        },
        { 
          first_name: 'Marina',
					last_name: 'Stanojlović'
        },
        { 
          first_name: 'Miloš',
					last_name: 'Milićev'
        },
        { 
          first_name: 'Luka',
					last_name: 'Petković'
        },
        { 
          first_name: 'Ivan',
					last_name: 'Ćurić'
        },
        { 
          first_name: 'Maša',
					last_name: 'Milivojević' 
        },
        { 
          first_name: 'Jovana',
					last_name: 'Urošević'
        },
        { 
          first_name: 'Boris',
					last_name: 'Stanković'
        },
        { 
          first_name: 'Nevena',
					last_name: 'Dinić'
        },
        { 
          first_name: 'Milica',
					last_name: 'Mladenović'
        },
        { 
          first_name: 'Natalija',
					last_name: 'Djuric'
        },
        { 
          first_name: 'Tijana',
					last_name: 'Petrovic'
        },
        { 
          first_name: 'Stefan',
					last_name: 'Kovač'
        },
        { 
          first_name: 'Stefan',
					last_name: 'Nešković'
        },
        { 
          first_name: 'Mihailo',
					last_name: 'Jakovljevic' 
        },
        { 
          first_name: 'David',
					last_name: 'Pantović'
        },
        { 
          first_name: 'Jelena',
					last_name: 'Pejin' 
        },
        { 
          first_name: 'Milana',
					last_name: 'Novakovic'
        },
        { 
          first_name: 'Anastasija',
					last_name: 'Divjak'
        },
        { 
          first_name: 'Nevena',
					last_name: 'Marković'
        },
        { 
          first_name: 'Iva',
					last_name: 'Djukic'
        },
        { 
          first_name: 'Katarina',
					last_name: 'Backović'
        },
        { 
          first_name: 'Marko',
					last_name: 'Veljović'
        },
        { 
          first_name: 'Mateja',
					last_name: 'Janić'
        },
        { 
          first_name: 'Jovana',
					last_name: 'Brkljač'
        },
        { 
          first_name: 'Jelena',
					last_name: 'Tešić'
        },
        { 
          first_name: 'Branko',
					last_name: 'Cvetković'
        },
        { 
          first_name: 'Jovan',
					last_name: 'Samardžić'
        },
        { 
          first_name: 'Ivona',
					last_name: 'Matijevic'
        },
        { 
          first_name: 'Jana',
					last_name: 'Stojanovic'
        },
        { 
          first_name: 'Isidora',
					last_name: 'Kozic'
        },
        { 
          first_name: 'Tijana',
					last_name: 'Petrovic'
        },
        { 
          first_name: 'Anastasija',
					last_name: 'Kozić'
        },
        { 
          first_name: 'Nevena',
					last_name: 'Janković'
        },
        { 
          first_name: 'Nevena',
					last_name: 'Janković'
        },
        { 
          first_name: 'Anastasija',
					last_name: 'Polić' 
        },
        { 
          first_name: 'Borislav',
					last_name: 'Petrović' 
        },
        { 
          first_name: 'Nikola',
					last_name: 'Stojanović'
        },
        { 
          first_name: 'Iva',
					last_name: 'Krstić'
        },
        { 
          first_name: 'Jana',
					last_name: 'Zivkovic' 
        },
        { 
          first_name: 'Natalija',
					last_name: 'Vitas'
        },
        { 
          first_name: 'Nevena',
					last_name: 'Stojanović'
        },
        { 
          first_name: 'Ognjen',
					last_name: 'Petrov'
        },
        { 
          first_name: 'Ognjen',
					last_name: 'Nešković'
        },
        { 
          first_name: 'Jovana',
					last_name: 'Lazić'
        },
        { 
          first_name: 'Nikola',
					last_name: 'Vučić' 
        },
        { 
          first_name: 'Gala',
					last_name: 'Posedi'
        },
        { 
          first_name: 'Pavle',
					last_name: 'Sekešan'
        },
        { 
          first_name: 'Sara',
					last_name: 'Crnomarković'
        },
        { 
          first_name: 'Luka',
					last_name: 'Vulovic'
        },
        { 
          first_name: 'Nemanja',
					last_name: 'Zivkovic'
        },
        { 
          first_name: 'Jovan',
					last_name: 'Arizanović'
        },
        { 
          first_name: 'Emilija',
					last_name: 'Timotijevic' 
        },
        { 
          first_name: 'Kristina',
					last_name: 'Timotijevic'
        },
        { 
          first_name: 'Luka',
					last_name: 'Vuksanović' 
        },
        { 
          first_name: 'Matija',
					last_name: 'Radulovic'
        },
        { 
          first_name: 'Filip',
					last_name: 'Jankovic'
        },
        { 
          first_name: 'Filip',
					last_name: 'Petrović'
        },
        { 
          first_name: 'Matija',
					last_name: 'Obradović'
        },
        { 
          first_name: 'Boris',
					last_name: 'Cvitak'
        },
        { 
          first_name: 'Olga',
					last_name: 'Obradović'
        },
        { 
          first_name: 'Teodora',
					last_name: 'Ilic'
        },
        { 
          first_name: 'Uroš',
					last_name: 'Paunković'
        },
        { 
          first_name: 'Ilija',
					last_name: 'Kocinac'
        },
        { 
          first_name: 'Ana',
					last_name: 'Milinović'
        },
        { 
          first_name: 'Kristina',
					last_name: 'Mićić'
        },
        { 
          first_name: 'Dragana',
					last_name: 'Maljković'
        }
      ]);
  });
};