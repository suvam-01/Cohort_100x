const a=`{"name":"suvam","age":24,"gender":"male"}`;

const user=JSON.parse(a);
console.log(user["name"]);


const b={
    name:"suvam",
    age:23,
    gender:"male"
}

let finalstr=JSON.stringify(b);
console.log(b);