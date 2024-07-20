 function mySettimeout(){
    console.log("inside fun");
    let p=new Promise(function (resolve){
        console.log("working on promise");

        setTimeout(resolve,1000);
        console.log("promise Done");

    })
    return p;
 }

 mySettimeout().then(function(){
    console.log("After resolvein promise");
 })


 