const arr=[1,2,3,4]
arr.push(2);
arr.push(2);
arr.push(2);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(44);
console.log(arr);


const arr1=[1,2,3,4]
const arr2=[5,6,7,8]

// console.log(arr1.concat(arr2)); 

for(let i=0; i<arr2.length; i++){
    arr1.push(arr2[i]);
    
}

console.log(arr1);

let initialArray=[1,2,3,4];

function fun(str){
    console.log(str);
}

initialArray.forEach(fun)
