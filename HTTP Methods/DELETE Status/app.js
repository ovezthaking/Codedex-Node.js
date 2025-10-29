const http = require('http');

let statusMessage = 'This is my status.';

const server = http.createServer((request, response) => {
    if (request.method === "DELETE"){
        if(!statusMessage){
            console.log("No status to delete");
            response.writeHead(200, {'Content-type': 'text/plain'});
            response.end("No status to delete");
        }
        else{
            console.log("Status message for delete: " + statusMessage);
            statusMessage = null;
            console.log("Status message deleted");
            response.writeHead(200, {'Content-type': 'text/plain'});   
            response.end("Status message deleted");
        }
    }
    else{
        response.writeHead(404, {'Content-type': 'text/plain'});
        response.end("404 error");
    }
});

server.listen(3000, () => {
    console.log('http://localhost:3000/');
});


//Instructions: curl -X DELETE http://localhost:3000 into your terminal