var MongoClient = require("mongodb").MongoClient;
var fs = require("fs");
var url = "mongodb://localhost:27017/";

var obj = [{
  title: "Indian Song 1",
  artist: "Sid Sriram",
  country: "India",
  company: "ISC",
  price: "99.99",
  year: "2016"
},
{
  title: "Indian Song 2",
  artist: "YSR",
  country: "India",
  company: "ISC",
  price: "199.99",
  year: "2013"
},
{
  title: "American Song 1",
  artist: "Michael Jackson",
  country: "USA",
  company: "USC",
  price: "399.99",
  year: "2005"
},
{
  title: "Indian Song 3",
  artist: "Spb",
  country: "India",
  company: "ISC",
  price: "59.99",
  year: "2000"
},
{
  title: "American Song 2",
  artist: "Elton John",
  country: "USA",
  company: "USC",
  price: "299.99",
  year: "2011"
},
{
  title: "Indian Song 4",
  artist: "Anirudh",
  country: "India",
  company: "ISC",
  price: "159.99",
  year: "2019"
},
{
  title: "American Song 3",
  artist: "David Bowie",
  country: "USA",
  company: "USC",
  price: "139.99",
  year: "2010"
},
{
  title: "Indian Song 5",
  artist: "Arr",
  country: "India",
  company: "ISC",
  price: "599.99",
  year: "2014"
}
];

MongoClient.connect(url, function(err,db){
  if(err) throw err;
  var music = db.db("music");
  music.collection("music").insertMany(obj,function(err,data){
    if(err) throw err;
    console.log("Inserted "+ data.insertedCount+"documents!");
  });

 music.collection("music").find({country:"India"}).sort({artist:1}).toArray(function(err,data){
    if(err) throw err;
    console.log(data);
    console.log("Writing to file");
    fs.writeFile('output.txt',JSON.stringify(data),function(err){
      if(err) throw err;
      console.log("File Content");
      fs.readFile('output.txt',function(err,data){
        if(err) throw err;
        console.log(data.toString());
      });
    });
  });

  db.close();
});
