//Assignment Operators

const strict = require("node:assert/strict");

y=10

console.log(7/2)//3.5
console.log(7%2)//1

//post increment
let a = 5;
console.log(a++)//5
console.log(a)//6

//pre increment
let b = 5;
console.log(++b)//6
console.log(b)//6

//post decrement

c=10
console.log(c--)//10
console.log(c)//9

//=== strict equality --both value and type should be same  
console.log(1===1);//true
console.log(1==='1');//false
  
//==loose equality --only value should be same and data type may differ

console.log(1=="1");//true
console.log(1==true);//true

console.log(null==undefined);//true
console.log(null===undefined);//false

