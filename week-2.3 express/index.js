const express=require("express");
const app=express();

app.use(express.json())
const users=[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}]

app.get("/", function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberofKidneys=johnKidneys.length;
    let healthyKidneys=0;

    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            healthyKidneys=healthyKidneys+1;
        }
    }

    const unHealthyKidneys=numberofKidneys-healthyKidneys;
    
    res.json({
        johnKidneys,
        healthyKidneys,
        unHealthyKidneys
    })
})

app.post("/", function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"done"
    })
})

app.put("/", function(req,res){

    if(isAtleastOneUnhealthyKidney()){
        for(let i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy=true;
        }
        res.json({})
    }

    res.status(411).json({
        msg:"you have no unhealthy kidney"
    })
})



//removing all the unhealthy kidneys
app.delete("/", function(req,res){

    if(isAtleastOneUnhealthyKidney()){
        const newKidneys=[]
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newKidneys;
        res.json({
            msg:"done"
        })
    }

   res.status(411).json({
        msg:"you have no unhealthy kidney"
   });

})

function isAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;

    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
           atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney

}

app.listen(3000);