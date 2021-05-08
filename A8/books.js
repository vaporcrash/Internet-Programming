const fs = require("fs");
const http = require("http");
const url = require("url");

http.createServer(function(req,res){
  res.writeHead(200,{'Content-type':'text/html'});
  fs.readFile('index.html',function(err,data){
    if(err){
      res.writeHead(404);
      res.write("File Not Found!");
    } else{
      res.write(data);
    }
    res.end();
  });
}).listen(8080);
