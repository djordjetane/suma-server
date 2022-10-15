//use from console npx knex migrate:latest
exports.up = function (knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable().unique();
      table.string('phone').notNullable();
    })
    .createTable('lecture', (table) => {
      table.increments();
      table.string('name').notNullable();
    })
    .createTable('attendance', (table) => {
      table.increments();
      table.unique(['user_id', 'lecture_id']);      
      table.integer('user_id').unsigned().notNullable().references('id').inTable('user');
      table.integer('lecture_id').unsigned().notNullable().references('id').inTable('lecture');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('lecture')
                    .dropTableIfExists('attendance')
                    .dropTableIfExists('user');
};
