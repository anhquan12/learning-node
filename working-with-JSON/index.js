// JSON Object
// 1. stringify - convert an Object to a Json String
// 2. parse - convert Json String to an Object

var aTung = { name: 'Co-ho', age: 69, dead: false };

var coHo = JSON.stringify(aTung);
console.log(coHo);

var myCat = '{"name": "Tom", "age": 2}';
var catGauGau = JSON.parse(myCat);
console.log(catGauGau.name);

//Exercise
// 1. Show all students.
// 2. Create a new student.
// 3. Save & exit.
//Note : save to data.json.