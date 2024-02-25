
const myObject = {
    name: 'Lin',
    lastname: 'Juan'
}
const myArray = [1,2,3]
const myName = 'Lin'
const myNumber = 30
const myWebAdress = "youtube.com"


/* module.exports = {
    myWebAdress,
    myNumber,
    myName,
    myArray,
    myObject
}
 */

//Module al final es un objeto, y puedo modificarlo y agregarle cosas como a cualquier otro

module.exports.myObject = myObject;
module.exports.myName = myName
module.exports.myNumber = myNumber;
module.exports.myArray = myArray;
