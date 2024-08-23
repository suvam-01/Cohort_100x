const express=require("express")
const zod=require("zod")

const app=express();

app.use(express.json());

function validate(a){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response=schema.safeParse(a);
    console.log(response);
    
}

app.post("/login",function (req,res){
    const response=validate(req.body)
    if(!response.success){
        res.json({
            msg:"invalid inputs"
        })
    }
})

app.listen(3000);