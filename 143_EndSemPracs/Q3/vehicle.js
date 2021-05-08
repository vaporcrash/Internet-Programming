var MongoClient = require("mongodb").MongoClient;
var fs = require("fs");
var url = "mongodb://localhost:27017/";

var obj=[{
  reg: "1478",
  cname: "John",
  vtype: "Sedan",
  model: "Fiesta",
  color: "Red"
},
{
  reg: "2346",
  cname: "Kate",
  vtype: "Suv",
  model: "Ecosport",
  color: "Green"
},
{
  reg: "5255",
  cname: "Leo",
  vtype: "Hatchback",
  model: "Polo",
  color: "Blue"
},
{
  reg: "9876",
  cname: "Mary",
  vtype: "Sedan",
  model: "Vento",
  color: "Silver"
},
{
  reg: "4566",
  cname: "Jack",
  vtype: "Hatchback",
  model: "Swift",
  color: "Black"
},
{
  reg: "7869",
  cname: "David",
  vtype: "Sedan",
  model: "Rapid",
  color: "Yellow"
},
{
  reg: "1903",
  cname: "Carol",
  vtype: "Suv",
  model: "Innova",
  color: "White"
}
];

MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var vehicles = db.db("vehicles");
  vehicles.collection("vehicles").insertMany(obj,function(err,data){
    if(err) throw err;
    console.log("Inserted "+data.insertedCount + " documents\n");
  });

  vehicles.collection("vehicles").find().sort({vtype:1}).toArray(function(err,found){
    if(err) throw err;
    console.log("Writing sorted output to file");
    fs.writeFile("output.txt",JSON.stringify(found,null,4),function(err){
      if(err) throw err;
      console.log("\nFile Contents\n");
      fs.readFile("output.txt",function(err,data){
        if(err)throw err;
        console.log(data.toString());
      });
    });
  });
  db.close();
});
