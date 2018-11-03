exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Post")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Post").insert([
        {
          title:
            "Joey, burn down the ship. Clamps, burn down the crew. I was having the most wonderful dream.",
          content:
            "Why did you bring us here? Yeah, lots of people did. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. I was having the most wonderful dream. Except you were there, and you were there, and you were there! \n Why did you bring us here? Yeah, lots of people did. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. I was having the most wonderful dream. Except you were there, and you were there, and you were there! \n Why did you bring us here? Yeah, lots of people did. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. I was having the most wonderful dream. Except you were there, and you were there, and you were there! \n Why did you bring us here? Yeah, lots of people did. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. I was having the most wonderful dream. Except you were there, and you were there, and you were there!",
          score: 0,
          time_stamp: new Date(),
        },
        {
          title:
            "You'll have all the Slurm you can drink when you're partying with Slurms McKenzie!",
          content:
            "Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! You've killed me! Oh, you've killed me! You guys realize you live in a sewer, right? \n Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! You've killed me! Oh, you've killed me! You guys realize you live in a sewer, right? \n Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! You've killed me! Oh, you've killed me! You guys realize you live in a sewer, right? \n Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! You've killed me! Oh, you've killed me! You guys realize you live in a sewer, right?",
          score: 100,
          time_stamp: new Date(),
        },
        {
          title:
            "Morbo's good friend, Richard Nixon. Yeah. Give a little credit to our public schools.",
          content:
            "Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon. Yeah. Give a little credit to our public schools. There's one way and only one way to determine if an animal is intelligent. Dissect its brain! \n Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon. Yeah. Give a little credit to our public schools. There's one way and only one way to determine if an animal is intelligent. Dissect its brain! \n Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon. Yeah. Give a little credit to our public schools. There's one way and only one way to determine if an animal is intelligent. Dissect its brain!",
          score: 50,
          time_stamp: new Date(),
        },
        {
          title:
            "Son, as your lawyer, I declare y'all are in a 12-piece bucket o' trouble.",
          content:
            "Fry, you can't just sit here in the dark listening to classical music. Who are those horrible orange men? Say it in Russian! Daylight and everything. Son, as your lawyer, I declare y'all are in a 12-piece bucket o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' mess you caused. \n Fry, you can't just sit here in the dark listening to classical music. Who are those horrible orange men? Say it in Russian! Daylight and everything. Son, as your lawyer, I declare y'all are in a 12-piece bucket o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' mess you caused. \n Fry, you can't just sit here in the dark listening to classical music. Who are those horrible orange men? Say it in Russian! Daylight and everything. Son, as your lawyer, I declare y'all are in a 12-piece bucket o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' mess you caused. \n Fry, you can't just sit here in the dark listening to classical music. Who are those horrible orange men? Say it in Russian! Daylight and everything. Son, as your lawyer, I declare y'all are in a 12-piece bucket o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' mess you caused.",
          score: 125,
          time_stamp: new Date(),
        },
        {
          title:
            "You may have to metaphorically make a deal with the devil. And by 'devil', I mean Robot Devil.",
          content:
            "I don't 'need' to drink. I can quit anytime I want! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by 'devil', I mean Robot Devil. And by 'metaphorically', I mean get your coat. \n I don't 'need' to drink. I can quit anytime I want! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by 'devil', I mean Robot Devil. And by 'metaphorically', I mean get your coat. \n I don't 'need' to drink. I can quit anytime I want! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by 'devil', I mean Robot Devil. And by 'metaphorically', I mean get your coat. \n I don't 'need' to drink. I can quit anytime I want! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by 'devil', I mean Robot Devil. And by 'metaphorically', I mean get your coat. \n I don't 'need' to drink. I can quit anytime I want! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by 'devil', I mean Robot Devil. And by 'metaphorically', I mean get your coat.",
          score: 225,
          time_stamp: new Date(),
        },
      ]);
    });
};
