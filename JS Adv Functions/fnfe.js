// function af()
// {
// 	alert("hi");}
// alert(af.name);

// let a=function(){
// 	alert("hi");
// }
// alert(a.name);

// let user = {

//   sayHi() {
//     // ...
//   },

//   sayBye: function() {
//     // ...
//   }

// }

// alert(user.sayHi.name); // sayHi
// alert(user.sayBye.name); // sayBye
// let arr = [function() {}];

// alert( arr[0].name ); 

// let a=[1,2,3,4];
// alert(a.length);

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// alert(f1.length); // 1
// alert(f2.length); // 2
// alert(many.length); 
// alert(confirm("Hi"));

// function ask(question, ...handlers) {
//   let isYes = confirm(question);

//   for(let handler of handlers) {
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }

// }

// // for positive answer, both handlers are called
// // for negative answer, only the second one
// ask("Question?", () => alert('You said yes'), result => alert(result));

// function sayHi() {
//     console.log("Hi");

//     // let's count how many times we run
//     sayHi.counter++;
// }
// sayHi.counter = 0; // initial value

// sayHi(); // Hi
// sayHi(); // Hi

// console.log(`Called ${sayHi.counter} times`);

// function makeCounter() {
//     // instead of:
//     // let count = 0

//     function counter() {
//         return counter.count++;
//     };

//     counter.count = 0;

//     return counter;
// }

// let counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1