const information = require("./information");

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `I'm ${information.name}, I'm student in ${information.campus}`,
    e: "oO",
    T: "U",
  })
);
