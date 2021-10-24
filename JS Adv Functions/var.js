// /* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) );

// function inBetween(a,b){
// 	return function(x){
// 		return x>=a && x<=b;
// 	}
// }

// function inArray(a){
// 	return function(x){
// 		return a.includes(x);
// 	}
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
//   ];
//   // users.sort((a,b)=> a.name>b.name?1:-1);
// users.sort(byField('name'));
//   function byField(fieldName){
//   	return (a,b)=>a[fieldName]>b[fieldName]?1:-1;
//   }
// for(let a of users){
// 	alert(a.name);
// }

// function makeArmy() {
//   let shooters = [];

//   let i = 0;

//   while (i < 10) {
//         	let j=i;
//     let shooter = function() { // create a shooter function,

//       alert( j ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//     i++;
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// for(let i=0;i<10;i++)army[i](); // 10 from the shooter number 0

// if (true) {
//   var test = true; // use "var" instead of "let"
// }

// alert(test);
// function sayHi() {
//   alert(phrase);

//   var phrase = "Hello";
// }

// sayHi();

// (function() {

//   var message = "Hello";

//   alert(message); // Hello

// })();
// (function () { // <-- SyntaxError: Function statements require a function name

//   var message = "Hello";

//   alert(message); // Hello

// })();

// (function() {
//   alert("Parentheses around the function");
// })();

// (function() {
//   alert("Parentheses around the whole thing");
// }());

// !function() {
//   alert("Bitwise NOT operator starts the expression");
// }();

// +function() {
//   alert("Unary plus starts the expression");
// }();

// alert("Hello");
// window.alert("hello");

// var gVar=5;
// alert(window.gVar);

// let glet=3;
// alert(window.gLet);

// window.currentUser={
// 	name:"John"
// };
// alert(window.currentUser.name);

// if(!window.Promise)
// {
// 	alert("Your Browser is very Old");
// }