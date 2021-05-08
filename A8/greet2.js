const fs = require("fs");
var http = require("http");
const url = require("url");

http.createServer(function(req,res){
  const query = url.parse(req.url,true).query;
  res.writeHead(200,{'Content-Type':'text/plain'});
  name = query.name;
  fs.readFile('greetings.txt',function(err,data){
    var read = data.toString().split("\n");
    if(err){
      res.end("404");
    }
    len= read.length;
    res.end(read[Math.floor(Math.random()*len+1)-1] + " " + name);
  });
}).listen(8080);
