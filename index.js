var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile('index.html',function(error, contents){
    response.write(contents);
    response.end();
  });
}).listen(8000);
console.log("Server Running on http://localhost:8000");
