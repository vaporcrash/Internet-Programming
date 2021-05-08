var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var pobj = [{
  name: "John",
  age: 21,
  id: 01,
  gender: "Male",
  address: "ECR",
  marital: "Single",
  dov: "27/06/21",
},
{
  name: "Kate",
  age: 21,
  id: 02,
  gender: "Female",
  address: "OMR",
  marital: "Single",
  dov: "29/06/21",
},
{
  name: "Leo",
  age: 25,
  id: 03,
  gender: "Male",
  address: "Adyar",
  marital: "Married",
  dov: "30/06/21",
}];

MongoClient.connect(url,async function(err,db){
  if(err) throw err;
  var patient = db.db("Patient_Details");

   await patient.collection("patients").insertMany(pobj,function(err,res){
    if(err) throw err;
    console.log("Inserted " + res.insertedCount + " documents");

  });

  await patient.collection("patients").find({}).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
  });

  await patient.collection("patients").deleteOne({name:"Leo"},function(err,res){
    if(err) throw err;
    console.log("1 document deleted");

  });

  await patient.collection("patients").find({}).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
  });



  await patient.collection("patients").updateOne({name: "Kate"},{$set:{age: 23}},function(err,res){
    if (err) throw err;
    console.log("1 doc updated");
  });

  await patient.collection("patients").find({name:"Kate"}).toArray(function(err,res){
   if(err) throw err;
   console.log(res);

 });
  db.close();
});
