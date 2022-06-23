// // "use strict";

// // const age = 23;
// // const str = "hello";

// // const year = (diameter) => console.log("hello");
// // console.log();

// // console.log(this);
// // function x() {
// //   const by = 1991;
// //   console.log(by - 48);
// //   console.log(this);
// // }

// // x();

// // const azeez = {
// //   year: 1991,
// //   firstName: "Ahmad",
// //   calcage: function () {
// //     console.log(this.year);
// //   },

// //   greet: () => {
// //     console.log(`hey this is ${this.firstName}`);
// //   },
// // };
// // azeez.greet();

// const me = {
//   name: "azeez",
//   age: "23",
// };

// const frnd = me;
// // console.log(this);

// function func(x) {
//   x = 7;
//   return x;
// }
// console.log(x);
// {
//   var x = 5;
// }
// console.log(x);
// func(x);
// console.log(x);

let arr1 = [1, 2, 3];
let arr2 = [1, 5, 8, 0, 1, 2, 2, 3, 4, 5];
let a;
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       a.push(arr2[j]);
//     }
//   }
// }
// a = [...arr1, ...arr2];
// let myset = new Set(a);
// console.log(myset);
// console.log(arr1.findIndex());
// console.log(arr1);

arr2.sort();
let sets = new Set(arr2);
console.log(sets);
let arr = [...sets];
console.log(arr);
let element;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[1]) {
    element = arr[i];
  }
}
console.log(element);
