let start=Date.now();

setTimeout(function(){
    let end=Date.now();

    let difference=(end-start);

    console.log(`elapsed time is ${difference}`);
},1000);