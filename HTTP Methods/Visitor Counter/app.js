const http = require('http');

let visitors = 0;


const server = http.createServer((request, response) => {
    if (request.method === "GET"){
        visitors++;
        console.log(`Visitor Count: ${visitors}`);
    }
    
});

server.listen(3000, ()=>{
    console.log('http://localhost:3000/');
});