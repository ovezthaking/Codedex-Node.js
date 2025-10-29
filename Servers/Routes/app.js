const http = require('http');


const server = http.createServer((request, response) => {
    
    let statusCode = 200;
    let content = '';
    let contentType = 'text/html; charset=utf8';

    if (request.url == "/"){
        content = '<b>You are outside of the home</b>';
    }
    else if (request.url == "/kitchen"){
        content = '<p> You are in the kitchen </p>';
    }
    else if (request.url == "/bedroom"){
        content = '<p> You are in the bedroom </p>';
    }
    else {
        statusCode = 404; 
        content = '<h1> 404 Not Found! </h1> <p> Page does not exist </p>';
    }

    response.writeHead(statusCode, {'Content-Type': contentType});
    response.end(content);
});


server.listen(3000, ()=>{
    console.log('http://localhost:3000')
});