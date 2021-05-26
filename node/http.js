// 中国人在地有为有一有一圾震震霏霏这无人之境国土厅无可奈何花落去df
var http = require('http');
http.createServer(function (request, response) {
  if(request.url='/api'){
    response.end('Hello World');
  }
  response.writeHead(301, {'Content-Type': 'text/plain','Location':'http://127.0.0.1:8081/api'});
 
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
