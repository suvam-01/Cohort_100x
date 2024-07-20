const fs=require("fs");

function someFun(){
    console.log("indside someFun");
    fs.readFile("a.txt","utf-8",function(err,data){
        console.log(data);;
   })
}

function onDone(){
    console.log("onDone is called");
}

someFun();
console.log("after the funs");
for(let  i=0; i<10000000000; i++){
    // console.log(i);
}