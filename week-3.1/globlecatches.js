const express=require("express");
const app=express();

app.use(express.json());


app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("u have "+kidneyLength+" kidneys")
})

//global catches

app.use(function(err,req,res,next){
    res.json({
        msg:" its not you its us"
    })
})
app.listen(3000);