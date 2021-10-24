// function sumAll(...args) { // args is the name for the array
//     let sum = 0;

//     for (let arg of args) sum += arg;

//     return sum;
// }

// alert(sumAll(1)); // 1
// alert(sumAll(1, 2)); // 3
// alert(sumAll(1, 2, 3));

// function showName(firstName, lastName, ...titles) {
//     alert(firstName + ' ' + lastName); // Julius Caesar

//     // the rest go into titles array
//     // i.e. titles = ["Consul", "Imperator"]
//     alert(titles[0]); // Consul
//     alert(titles[1]); // Imperator
//     alert(titles.length); // 2
// }

// showName("Julius", "Caesar", "Consul", "Imperator");
// function showName() {
//     alert(arguments.length);
//     alert(arguments[0]);
//     alert(arguments[1]);

//     // it's iterable
//     // for(let arg of arguments) alert(arg);
// }

// // shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// // shows: 1, Ilya, undefined (no second argument)
// showName("Ilya");

// Arrow functions do not have "arguments"

// let arr = [3, 5, 1];

// alert(Math.max(...arr));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// alert(Math.max(...arr1, ...arr2));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// alert(Math.max(1, ...arr1, 2, ...arr2, 25));

// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [0, ...arr, 2, ...arr2];

// alert(merged);
// let str = "Hello";

// alert([...str]);

// let str = "Hello";

// // Array.from converts an iterable into an array
// alert(Array.from(str));

// let arr = [1, 2, 3];

// let arrCopy = [...arr]; // spread the array into a list of parameters
// // then put the result into a new array

// // do the arrays have the same contents?
// alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// // are the arrays equal?
// alert(arr === arrCopy); // false (not same reference)

// // modifying our initial array does not modify the copy:
// arr.push(4);
// alert(arr); // 1, 2, 3, 4
// alert(arrCopy);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// let objCopy = {
//     ...obj
// }; // spread the object into a list of parameters
// // then return the result in a new object

// // do the objects have the same contents?
// alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// // are the objects equal?
// alert(obj === objCopy); // false (not same reference)

// // modifying our initial object does not modify the copy:
// obj.d = 4;
// alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
// alert(JSON.stringify(objCopy));