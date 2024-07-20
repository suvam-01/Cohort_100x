const fs=require("fs");

function putCopyright(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        data=data+"how are you??";
        fs.writeFile("a.txt",data,function(){
            cb();
        });
    })
}



putCopyright(function(){
    console.log("callback added");
})