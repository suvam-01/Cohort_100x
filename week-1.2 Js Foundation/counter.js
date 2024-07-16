
let num=30;

let interval= setInterval(()=>{
    console.log(num);
    if(num==0){
        clearInterval(interval);
    }
    num=num-1;
},1000);

