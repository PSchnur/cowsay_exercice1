const name = "Priscilia";
const campus = "WCS-Lyon";

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello, I'm ${name} from ${campus}!`,
    e: "oO",
    T: "U ",
  })
);

module.exports = cowsay;
