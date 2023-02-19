let http = require('http');
let fs = require('fs');
let url = require("url");

//create a server object:
http.createServer(function (req, response) {
    var q = url.parse(req.url, true);
    
    if(q.pathname === "/"){
        fs.readFile("index.html", {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                console.log('received data: ' + data);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            } else {
                console.log(err);
            }
            
        });
    }
        
    else if(q.pathname === "/about"){
        fs.readFile("about.html", {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                console.log('received data: ' + data);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            } else {
                console.log(err);
            }
            
        });
    }

        
    else if(q.pathname === "/contact-me"){
        fs.readFile("contact-me.html", {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                console.log('received data: ' + data);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            } else {
                console.log(err);
            }
            
        });
    }

    else{
        fs.readFile("404.html", {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                console.log('received data: ' + data);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            } else {
                console.log(err);
            }
            
        });
    }

}).listen(8080); //the server object listens on port 8080

