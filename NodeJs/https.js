const { response } = require("express");
const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/about") {
      res.write("acerca de");
      return res.end();
    }

    if (req.url === "/") {
      res.write("Welcome to the server");
      return res.end();
    }

    res.write(`
    <h1>Not found</h1>
    <p>Esta pagina no se encontro</p>
    <a href="/">Volver a la pagina principal</a>`);
    res.end();
  })
  .listen(3000);

console.log("Servidor escuchando");
