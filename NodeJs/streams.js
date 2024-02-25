/* const {writeFile} = require('fs/promises')
const createBigFile = async () => {
    await writeFile('./data/bigFile.txt', 'hello world')
}

createBigFile(); */
const {createReadStream} = require('fs');
const stream = createReadStream('./data/bigFile.txt','utf-8');

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('archivo terminado de leer')
})

stream.on('error', (error) => {
    console.log(error);
})