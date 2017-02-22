exports.up = function(knex, Promise) {
  return knex.schema.createTable("vacation", function (table) {
    table.increments();
    table.string("location");
    table.date("start_date");
    table.date("end_date");
    table.text("entry");
    table.string("image");
    table.string("map_link");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("vacation");
};
