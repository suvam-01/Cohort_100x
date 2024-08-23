const express=require("express");
const zod=require("zod");
const app=express();

const schema=zod.array(zod.number);

app.use(express.json());


app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);

    res.send({
        response
    })
})

//global catches

app.use(function(err,req,res,next){
    res.json({
        msg:" its not you its us"
    })
})
app.listen(3000); 