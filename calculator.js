const express = require("express");
const bodyparser= require("body-parser");
var app = express();
app.use(bodyparser.urlencoded({extended :true}));
app.get("/", function(req,res){

    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req,res){

   var sum = Number( req.body.num1) + Number( req.body.num2);
     res.send( "The result is " +sum);
 });

 
 app.get("/bmiCalculator", function(req,res){

    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
var weight =Number( req.body.weight);
var height = Number( req.body.height);

   var bmi =  weight / (height * height);
     res.send( "BMI is " +bmi);
 });


app.listen(3000, function(){
console.log("erver is running on port 3000");
});