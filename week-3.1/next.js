const express=require("express");
const app=express();

app.use(express.json());


app.post("/health-checkup",function(req,res,next){
    console.log("hi from req1");
    next()
},function (req,res,next){
    console.log("hi from req2");
    next()
},function(req,res){
    console.log("end")
})

app.listen(3000);