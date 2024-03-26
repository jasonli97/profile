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
                serveStaticFile(res, '/public/index.html', 'text/html');
                break;
            case '/style.css':
                serveStaticFile(res, '/public/style.css', 'text/css');
                break;
            case '/index':
                serveStaticFile(res, '/public/index.html', 'text/html');
                break;
            case '/logo.webp':
                 serveStaticFile(res, '/public/logo.webp', 'image/webp');
                 break;
            default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
        }
 
 }).listen(port);
 
 console.log('listening...go to http://localhost:' + port);