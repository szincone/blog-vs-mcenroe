exports.up = function(knex, Promise) {
  return knex.schema.createTable("Post", table => {
    table.increments("id").primary();
    table.string("title", 120).notNullable();
    table.text("content").notNullable();
    table
      .integer("score")
      .notNullable()
      .defaultTo(0);
    table.datetime("time_stamp", 6);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Post");
};
