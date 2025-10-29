const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead('200', {'content-type': 'text/plain; charset=utf8'});
    response.write('Welcome to Neon Noodles!');
    response.write('\n\n\n==============');
    response.write('\nLATE NITE MENU');
    response.write('\n==============');
    response.write('\n\nRAMEN')
    response.write('\n1. Quantum Truffle Ramen');
    response.write('\n\n\nEXTRA TOPPINGS');
    response.write('\n1. Hacktivist Pork');
    response.write('\n2. Cybernetic Egg');
    response.end('\n3. Glowing Scallions');
});

server.listen(3000, () => {
    console.log('http://localhost:3000');
});