
function yourFun(){
    console.log("hello");
}

function my_fun(a,thisFun){
    thisFun();
    console.log(a+10);
}

my_fun(20,yourFun);
