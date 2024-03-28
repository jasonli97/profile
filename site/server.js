const http = require('http'),
  fs = require('fs');

const port = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
   if (!responseCode) responseCode = 200;
   fs.readFile(__dirname + path, function(err, data) {
       if (err) {
           res.writeHead(500, { 'Content-Type': 'text/plain' });
           res.end('500 - Internal Server Error');
       } else {
           res.writeHead(responseCode, { 'Content-Type': contentType });
           res.end(data);
       }
   });
}


http.createServer(function(req,res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
 
 
 switch(path) {
            case '':
                serveStaticFile(res, '/public/chart.html', 'text/html');
                break;
            case '/chart':
                serveStaticFile(res, '/public/chart.html', 'text/html');
                break;
            case '/chart.js':
                 serveStaticFile(res, '/public/chart.js', 'text/javascript');
                 break;
            default:
            serveStaticFile(res, '/public/chart.html', 'text/html', 404);
            break;
        }
 
 }).listen(port);
 
 console.log('listening...go to http://localhost:' + port);