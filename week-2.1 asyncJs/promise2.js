function sum(a,b){
    return new Promise(function(resolve){
        resolve(a+b);
    })
}


sum(10,20).then(function(ans){
    console.log(ans);
})
