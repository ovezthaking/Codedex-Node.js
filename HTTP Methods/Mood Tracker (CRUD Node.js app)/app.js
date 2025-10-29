const http = require('http');

let mood = '';

const server = http.createServer((request, response) => {
        if(request.method === "GET"){
            if(!mood){
                console.log("You haven\'t posted any mood yet");
                response.writeHead(200, {'Content-type' : "text/plain; charset=utf8"});
                response.end("No mood...");
            }
            else{
                console.log(mood);
                response.writeHead(200, {'Content-type' : "text/plain; charset=utf8"});
                response.end(mood);
            }
        }
        else if(request.method === "POST"){
            if(!mood){
                let newMood = '';
                request.on('data', (chunk) => {
                    newMood += chunk;
                });
                
                request.on('end', () => {
                    mood = newMood;
                    console.log(`Your current mood: ${mood}`);
                });
                response.writeHead(200, {'Content-type' : "text/plain; charset=utf8"});
                response.end(mood); 
            }
            else{
                response.writeHead(200, {'Content-type' : "text/plain; charset=utf8"});
                response.end(`Here exist your past mood: ${mood}`); 
            }
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
    
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});



// example cURL commands:

// POST a new mood:
// curl -X POST http://localhost:3000 -d "Feeling great 💅"

// GET the mood:
// curl http://localhost:3000

// PUT a mood instead:
// curl -X PUT http://localhost:3000 -d "Feeling not great "

// PATCH the mood:
// curl -X PATCH http://localhost:3000 -d "Feeling sad 😢"

// DELETE the mood:
// curl -X DELETE http://localhost:3000