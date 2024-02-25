const { readFile, } = require("fs/promises");
/* const {promisify} = require('util');

const readFilePromise = promisify(readFile); */

async function read() {
    try {
      const result = await readFile("./data/first.txt",'utf-8');
      const result2 = await readFile("./data/second.txt",'utf-8');
  
      console.log(result);
      console.log(result2);
    } catch (error) {
      console.log('algo ha salido mal');
    }
  }
  
  read();
  
  
















/* const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}; */
/* 
getText("./data/first.txt")
  .then((result) => console.log(result))
  .then(() => getText("./data/second.txt"))
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
 */

