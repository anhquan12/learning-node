var fs = require('fs');


//read file with readFileSync
var text = fs.readFileSync('./corona.txt', { encoding: 'utf8'});
console.log(text);

// write file with writeFileSync
fs.writeFileSync('./node-again.txt', 'I am learn node');