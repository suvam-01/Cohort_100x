// const personArray=["suvam","rakesh","Raju"];
// console.log(personArray);
// console.log(personArray[0]);;

// array of objects

const obj=[{
        name:"suvam",
        gender:"male"
    },
    {
        name:"Rakesh",
        gender:"male"
    },
    {
        name:"Raju",
        gender:"male"
    }
]

for(let i =0; i<obj.length; i++){
    if(obj[i]["gender"]=="male"){
        console.log(obj[i]["name"]);
    }
}


const a=["suvam", "jha","the","sun",];

a.forEach(element => {console.log(element);});