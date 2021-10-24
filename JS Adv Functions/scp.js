// {
//     // show message
//     let message = "Hello";
//     alert(message);
// }

// {
//     // show another message
//     let message = "Goodbye";
//     alert(message);
// }

// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter());

// function f() {
//     let value = Math.random();
//     // alert(value);
//     return function() {
//         alert(value);
//     };
// }

// // 3 functions in array, every one of them links to Lexical Environment
// // from the corresponding f() run
// let arr = [f(), f(), f()];
// alert(arr);

// function f() {
//     let value = Math.random();

//     function g() {
//         debugger; // in console: type alert(value); No such variable!
//     }

//     return g;
// }

// let g = f();
// g();

// console.log("Hi");