const http = require('http');
const {info, error} = require('./modules/log');
const consts = require('./utils/consts');
const queryString = require('querystring');
const firebase = require('../libs/firebase');
const { countries } = require('countries-list');
const url = require('url');
const express = require('express');

const app = express();

app.get('/', function(request, response){
    response.status(200).send({mensaje: "Bienvenido a NodeJS"})
});

app.get("/info", function(request, response){
    info("Hola info nodemon");
    response.send("Info");
})

app.get('*', function(request, response){
    response.status(404).send({mensaje: "Página no encontrada :("})
})


// const server = http.createServer(function(request, response){
    
//     var parsed = url.parse(request.url);
//     //console.log("parsed: ", parsed);

//     const pathName = parsed.pathname;
//     const query = queryString.parse(parsed.query);
//     //console.log("query :", query);

//     if(pathName === "/"){
//         response.writeHead(200, {'Content-Type' : 'text/html'});
//         response.write('<html><body>Página de Inicio</body></html>');
//         response.end();
//     } else if(pathName === "/exit"){
//         response.writeHead(200, {'Content-Type' : 'text/html'});
//         response.write('<html><body>Hasta la próxima</body></html>');
//         response.end();
//     }
//     else if(pathName === "/info"){
//         var result = info(pathName);
//         response.writeHead(200, {'Content-Type' : 'text/html'});
//         response.write(result);
//         response.end();
//     }
//     else if(pathName === "/error"){
//         var result = error(pathName);
//         response.writeHead(200, {'Content-Type' : 'text/html'});
//         response.write(result);
//         response.end();
//     }
//     else if(pathName === "/country"){
//         response.writeHead(200, {'Content-Type' : 'application/json'});
//         var result = info(request.url);
//         response.write(JSON.stringify(countries[query.code]));
//         response.write(result);
//         response.end();
//     }
//     else{
//         response.writeHead(200, {'Content-Type' : 'text/html'});
//         response.write('<html><body>Página no encontrada</body></html>');
//         response.end();
//     }
// });


app.listen(3000, function(){
    console.log("Servidor en el puerto: " + 3000);
});