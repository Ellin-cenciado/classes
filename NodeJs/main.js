const web = require("./module/myModule.js");
const math = require('./math/index.js');

const { myArray, myNumber } = require("./module/myModule.js"); //Puedo pedir variables en especifico
console.log('--------------------------------------------------------------');
console.log(web);
console.log('--------------------------------------------------------------');
console.log(web.myName);
console.log(myArray);
console.log(myNumber);

console.log('--------------------------------------------------------------');
console.log(math);
console.log('--------------------------------------------------------------');
console.log(math.add(10,20));
console.log(math.substract(10,20));
console.log(math.multiply(10,20));
console.log(math.divide(10,20));
