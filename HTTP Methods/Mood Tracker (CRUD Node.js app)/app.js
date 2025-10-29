const http = require('http');

let mood = '';

const server = http.createServer((request, response) => {
    
    if(request.url == '/'){
        response.writeHead(200, {'Content-type' : "text/plain; charset=utf8"});
        response.write(mood);

        if(request.method === "GET"){
            console.log(mood);
        }
        else if(request.method === "POST"){
            
        }
        else if(request.method === "PUT"){
            
        }
        else if(request.method === "PATCH"){
            
        }
        else if(request.method === "DELETE"){
            
        }
        else{
            response.writeHead(404, {'Content-type' : "text/plain; charset=utf8"});
            response.end("404 Not Found");
        }
    }
    else{
        response.writeHead(404, {'Content-type' : "text/plain; charset=utf8"});
        response.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});