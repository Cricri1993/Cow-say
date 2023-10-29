const user = require ("./informations.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello, I'm " + user.name + " from " + user.campus,
    e : "oO",
    T : "U "
}));