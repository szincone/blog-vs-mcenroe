exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Post")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Post").insert([
        { title: "Serena1", content: "Blah", score: 0, time_stamp: new Date() },
        { title: "Venus2", content: "Zlah", score: 0, time_stamp: new Date() },
        {
          title: "Kamal3",
          content: "Clah",
          score: 100,
          time_stamp: new Date(),
        },
      ]);
    });
};
