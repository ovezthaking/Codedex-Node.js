const http = require('http');


const server = http.createServer((request, response) => {
    let statusCode = 200;
    let content = '';
    let contentType = 'text/html; charset=utf8';

    if(request.url == "/"){
        content = '<h1> Welcome to Pokemon Center!</h1>';
    }
    else if(request.url == "/pikachu"){
        content = '<img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR32y7KLH_jRvDDq2RsHm-_sXhqJqmgwKwLKAzW5X9p2Zi7cVA1amHVWUbe8bCDFGyCJdP1wY44vwQg-UzijnlwlDzyjd8BuUlVkrS0qEyLR1uHpfnSrRFrD_60-IH7y96WJwoeaQ&usqp=CAc"/>';
        console.log('Pika Pika!');
    }
    else if(request.url == '/sylveon'){
        content = '<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBgLNvVmP9QCwlAq0TrP6jBNdgY2RJMTjfccKnqyoIx9PI2JGHEWoEI5-11GYWTruNagkk2K8Akt2Q5xgsGqGb-8BPz7BmPhM36I-Bsgt4uQ"/>';
        console.log('Sylv Sylv!');
    }
    else{
        statusCode == 404;
        content = '<b>404 Page Not Found<b>';
    }

    response.writeHead(statusCode, {'Content-type': contentType});
    response.end(content);
});

server.listen(3000, () => {
    console.log('http://localhost:3000')
});