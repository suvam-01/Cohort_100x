const express = require("express");
const mongoose= require("mongoose")
const app=express()
app.use(express.json())

mongoose.connect("mongodb+srv://admin:root123@cluster0.hkint.mongodb.net/userappnew")


const User = mongoose.model('users', { name: String, email: String, password: String});

app.get("/signup",function(req,res){

  const username=req.body.username;
  const password=req.body.password;
  const name=req.body.name;

  const existingUser=User.findOne({email:username});
  
  if(existingUser){
    res.status(400).send({
      msg:"user already exists"
    });
  }

  
  const user = new User({ 
    name: 'Raju',
    email: 'r@example.com',
    password:'1200'
  });
  user.save()
})

app.listen(3000)
