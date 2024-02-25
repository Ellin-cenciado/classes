const fs = require("fs");

/* const first = fs.readFileSync('./data/first.txt', 'utf-8');
const second = fs.readFileSync('./data/second.txt');

console.log(first);
console.log(second.toString());

fs.writeFileSync('./data/third.txt', 'Escribo hola desde el codigo'); //No usar quokka al escribir un archivo asdghjaskdf lmao

//Puedo agregar cosas a un archivo?

const third = fs.readFileSync('./data/third.txt','utf-8');
let testeo = third + ', esta parte la agregue yo';

fs.writeFileSync('./data/fourth.txt', testeo);

const fourth = fs.readFileSync('./data/fourth.txt','utf-8');
console.log(fs.readFileSync('./data/fourth.txt','utf-8'));

//Hay una mejor forma duh

fs.writeFileSync('./data/fourth.txt', '. Esta parte tambien es nueva',{
    flag: 'a' //Esto significa append
}) */

fs.readFile("./data/first.txt", "utf-8", (err, data) => {
  err != null ? console.log(err) : console.log(data);
  readSecond();
});

function readSecond() {
  fs.readFile("./data/second.txt", "utf-8", (err, data) => {
    err != null ? console.log(err) : console.log(data);
    writeThird();
  });
}

function writeThird() {
  fs.writeFile("./data/fifth.txt", "archivo creado desde fs", (err) => {
    err != null
      ? console.log(err)
      : console.log("El archivo se ha creado satisfactoriamente");
  });
}
