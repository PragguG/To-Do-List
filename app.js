const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine","ejs");
app.use(express.static('public'));// all static files are in public folder
app.use(express.urlencoded({extended:true}));



// var items = [];
// var example="working";
// app.get("/",function(req,res){
//   // res.send("This webpge is working fine!");
//   res.render("list",{ejes : items})
// });

// connect to mongodb database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/final");
// create schema
const trySchema = new mongoose.Schema({
  name: String
});

// create model
const item=mongoose.model("second",trySchema);
app.get("/",function(req,res){
  item.find({},function(err,foundItems){
    res.render("list",{dayej:foundItems});
  })
});

app.post("/",function(req,res){
  const itemName = req.body.ele1;
  const todo4 = new item({
    name: itemName
  });
  todo4.save();
  res.redirect("/");
});

app.post("/delete", function(req,res){
  const checked=req.body.checkbox1;
  item.findByIdAndRemove(checked,function(err){
    if(!err){
      console.log("deleted");
      res.redirect("/");
    }
  });
});

app.listen(8000,function(){
  console.log("Server started");
});

// const express=require("express");
// const bodyParser = require("body-parser");
// var app = express();
// app.set("view engine","ejs"); // ejs
// app.use(express.urlencoded({extended:true}));//body parser




// const item=mongoose.model("task",trySchema);
//inserting single record
// const todo=new item({
//   name:"Create new videos"
// });