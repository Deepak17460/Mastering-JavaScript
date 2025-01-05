//Const

const z = 10;
if (true) {
  const z = 20; // Different variable, block-scoped
  console.log(z); // 20
}
console.log(z); // 10

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]



//Let

let y = 10;
if (true) {
  let y = 20; // Different variable, block-scoped
  console.log(y); // 20
}
console.log(y); // 10


//Var 
var x = 10;
if (true) {
  var x = 20; // Same variable, re-declared
  console.log(x); // 20
}
console.log(x); // 20
