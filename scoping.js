
//global scope

var a = 100
function test(){
    console.log(a);

}
test()
console.log(a);

//Function  scope
//var is function scope

function Demo(){
    var x = 20
    console.log("inside the function",x);
}
Demo();
console.log("outside the function",x);
// console.log("outside the function",x)
  
//console.log("outside the function",x);

 //block scope{} let &Const are block scope
 //if condtion is true

 if (true){
    let a=50
    const b=100
    console.log("accessing the block inside", a,b);
    console.log("outside the function",x)
 } 

 
