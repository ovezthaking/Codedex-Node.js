const http = require('http');

const server = http.createServer((request, response) => {
    let message = '';
    if (request.method === 'POST'){
        request.on('data', (chunk) => {
            message += chunk;
        });

        request.on('end', () => {
            console.log('New message: ', message);

            response.writeHead('200', {'Content-type' : 'text/plain'});
            response.end("Message received " + message);
        });
    }
    else{
        response.writeHead(404, {'Content-type' : "text/plain"});
        response.end('Back to ur terminal');
    }

});

server.listen(3000, () => {
    console.log('http://localhost:3000/');
});


//send tweet: curl -X POST http://localhost:3000 -d "This is a message"