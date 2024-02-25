const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.write('welcome to the server');
        return res.end();
    }
    if(req.url ==='/about'){

/*         for(let i = 0; i < 1000000; i++){
            console.log(Math.random() * i);
        } */

        return res.end('About page');
    }
    res.end('not found')
})

server.listen(3001);
console.log('server on port 3001');