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

// To find the intersection of these two arrays ////
// let arr1 = [1, 2, 3];
// let arr2 = [1, 5, 8, 3, 4, 5];
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       var x = arr2;
//     }
//   }
// }
// let a = [...arr1, ...arr2];
// let myset = new Set(a);
// a = [...myset];
// console.log(a);
// // console.log(arr1.findIndex());
// console.log(arr1);

// Find the 2nd Last Smallest Number in arrays ////
// arr2.sort();
// let sets = new Set(arr2);
// console.log(sets);
// let arr = [...sets];
// console.log(arr);
// let element;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[1]) {
//     element = arr[i];
//   }
// }
// console.log(element);

// for (let i = 0; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// console.log("script start");

// setTimeout(() => {
//   console.log("set time out");
// }, 0);

// Promise.resolve()
//   .then(() => console.log("Promise resolve"))
//   .then(() => console.log("Promise resolve 2"));

// console.log("script end");

function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
x();
