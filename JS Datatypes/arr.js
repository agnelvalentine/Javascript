// let arr = new Array();
// // let arr = [];
// let fruits = ["Apple", "Orange", "Plum"];

// alert(fruits[0]); // Apple
// alert(fruits[1]); // Orange
// alert(fruits[2]);

// let arr = ['Apple', { name: 'John' }, true, function() { alert('hello'); }];

// // get the object at index 1 and then show its name
// alert(arr[1].name); // John

// // get the function at index 3 and run it
// arr[3]();


// let fruits = ["Apple", "Orange", "Pear"];

// alert(fruits.pop()); // remove "Pear" and alert it

// alert(fruits);

// fruits.push("Pear");

// alert(fruits);

// alert(fruits.shift()); // remove Apple and alert it

// alert(fruits);

// fruits.unshift('Apple');

// alert(fruits);

// let fruits = ["Apple", "Orange", "Plum"];

// // iterates over array elements
// for (let fruit of fruits) {
//     alert(fruit);
// }

// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }

// let arr = ["Apple", "Orange", "Pear"];

// for (let key in arr) {
//     alert(arr[key]); // Apple, Orange, Pear
// }

// let arr = new Array("Apple", "Pear", "etc");

// let arr = new Array(2); // will it create an array of [2] ?

// alert( arr[0] ); // undefined! no elements.

// alert( arr.length );

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// alert( matrix[1][1] ); // 5
let arr = ["a", "b"];

arr.push(function() {
    alert(this);
})

arr[2]();