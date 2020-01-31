var readlineSync = require('readline-sync');

// var languages = [];
//
// var language = readlineSync.question('What is your mother language?');
// languages.push(language);
//
// console.log(languages);

var pet = {};

var name = readlineSync.question('Your pet name :');
var age = readlineSync.question('Age is :');

pet.name = name;
pet.age = parseInt(age);

console.log(pet);
