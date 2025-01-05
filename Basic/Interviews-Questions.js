//Question

function testScope() {
    console.log(a); // ?
    console.log(b); // ?
    console.log(c); // ?
  
    var a = 1;
    let b = 2;
    const c = 3;
  
    console.log(a); // ?
    console.log(b); // ?
    console.log(c); // ?
  }
  
  testScope();

//JavaScript Hoisting

console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 1000);

console.log('End');

