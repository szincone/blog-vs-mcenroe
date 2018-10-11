exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Post")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Post").insert([
        {
          title:
            "Fed square the bulldogs, don dons emerald peacock ball don't paint over the banksy's the hawks, warehouse chic cookie dame edna.",
          content:
            "Four seasons in one day richmond tigers, prahran hipsters swanston fairy penguins naked for satan kylie minogue, dandenong brown alley geoffrey rush spiegeltent melb, the croft institute Rod Laver empire of the sun the australian open swanston, the espy rooftop bars flemington racecourse.",
          score: 0,
          time_stamp: new Date(),
        },
        {
          title:
            "Purple emerald swanston, ball kath and kim NGV culture fix collingwood ferals temper trap, chapel street fairy penguins carlton.",
          content:
            "Citylink laksa king, lygon street spruikers flemington racecourse world's most liveable city richmond tigers don't paint over the banksy's, collins place prahran hipsters myki queues carlton burlesque, yarra geoffrey rush kylie minogue brown alley vic market, secret laneway bars hook turns south of the river.",
          score: 0,
          time_stamp: new Date(),
        },
        {
          title:
            "Yarra tullamarine, secret laneway bars collins place street art aami park shane warne, prahran hipsters MSAC food bloggers.",
          content:
            "Bespectacled girls chapel street, rocking out the espy don dons melbourne central aami park north melbourne shinboners, moomba the australian open old melbourne gaol chopper read emerald peacock, rooftop cinema geoffrey rush the borek woman street art collingwood ferals, the croft institute richmond tigers temper trap.",
          score: 100,
          time_stamp: new Date(),
        },
      ]);
    });
};
