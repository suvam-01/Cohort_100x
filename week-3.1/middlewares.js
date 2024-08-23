const express=require("express");

const app=express();

app.get("/health-checkup",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId;
    if(username!="suvam" || password !="pass"){
        //
        res.status(400).json({
            msg:"wrong input "
        })
    }

    if(kidneyId !=1 && kidneyId!=2 ){
        res.status(400).json({
            msg:"wrong input "
        })
    }
    res.json({
        msg:"u are fine"
    })
})

app.listen(3000);