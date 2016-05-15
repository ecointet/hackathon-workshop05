/*
var http = require('http');
var URL = require('url');

var serv = http.createServer(function (req, res) {
   
    var url = URL.parse(req.url);
    if (req.method == 'GET' && url.pathname == '/') {
        res.statusCode = 200;
        console.log("A page has been requested... Displaying the main page");
        res.end('Hello SILCA ! Please print this page in a HTML style!');
    }
    else {
        res.statusCode = 404;
        res.end("This is not the page you were looking for.");
    }
});
serv.listen(8080);
console.log("Server started!");
*/


var http = require('http');
var server = http.createServer(function (request, response)
{
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hackathon, I love it!");
});
server.listen(process.env.VCAP_APP_PORT || 3000);
console.log("App Server started!");