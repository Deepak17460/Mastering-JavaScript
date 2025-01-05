// let a=3;
// let b=4;

// let sum=a+b;
// console.log(sum);



let arr = [5, 2, 3, 4, 1];

//Sorting in Descending Order
arr.sort((a, b) => b-a);

//Sorting in Ascending Order
arr.sort((a, b) => a-b);

for(var i of arr){
    console.log(i);
}
