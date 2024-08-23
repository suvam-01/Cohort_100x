const zod=require("zod")

function validate(a){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response=schema.safeParse(a);
    console.log(response);
    
}

validate({
    email:"aajgmail.com",
    password:"ladlamaph"
})