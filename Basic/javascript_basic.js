// let a=3;
// let b=4;

// let sum=a+b;
// console.log(sum);



// let arr = [5, 2, 3, 4, 1];

// //Sorting in Descending Order
// arr.sort((a, b) => b-a);

// //Sorting in Ascending Order
// arr.sort((a, b) => a-b);

// for(var i of arr){
//     console.log(i);
// }


// let a=2;
// var b=2;
// var b=2;

function example() {
    var x = 10; // Function-scoped
    let y = 20; // Block-scoped
    const z = 30; // Block-scoped and immutable
  
    if (true) {
      var x = 40; // Re-declared, same variable (function-scoped)
      let y = 50; // New variable (block-scoped)
      const z = 60; // New variable (block-scoped)
      console.log('Inside block:');
      console.log('x:', x); // 40
      console.log('y:', y); // 50
      console.log('z:', z); // 60
    }
  
    console.log('Outside block:');
    console.log('x:', x); // 40 (var is function-scoped, so it changes)
    console.log('y:', y); // 20 (let is block-scoped, so it remains the same)
    console.log('z:', z); // 30 (const is block-scoped, so it remains the same)
  }
  
  example();
  