const express=require("express");
const bodyPaerser=require("body-parser");
const app=express();
const port=3000;
app.use(bodyPaerser.json());

app.post('/',function(req,res){
    console.log(req.body);
    res.send("please Login")
})

app.get('/home',function(req,res){
    res.send("welcome to home")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  }) 