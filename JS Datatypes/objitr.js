// let user = {
//     name: "John",
//     age: 30
// };
// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [
//     ["name", "John"],
//     ["age", 30]
// ]
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };

// let doublePrices = Object.fromEntries(
//     // convert prices to array, map each key/value pair into another pair
//     // and then fromEntries gives back the object
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );

// alert(doublePrices.meat); // 8

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// alert(sumSalaries(salaries));

// // function sumSalaries(obj) {
// //     sum = 0;
// //     for (let a of Object.values(obj)) {
// //         sum += a;
// //     }
// //     return sum;
// // }

// function sumSalaries(obj) {
//     return Object.values(obj).reduce((a, b) => (a + b), 0);
// }

// let user = {
//     name: 'John',
//     age: 30
// };

// alert(count(user));

// function count(obj) {
//     return Object.keys(obj).length;
// }