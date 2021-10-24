// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// alert(arr); // ["I", "JavaScript"]

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");

// alert(arr) // now ["Let's", "dance", "right", "now"]

// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// alert(arr); // 1,2,3,4,5

// let arr = ["t", "e", "s", "t"];

// alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)

// alert(arr.slice(-2)); // s,t (copy from -2 till the end)

// let arr = [1, 2];

// // create an array from: arr and [3,4]
// alert(arr.concat([3, 4])); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// let arr = [1, 2];

// let arrayLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };

// alert(arr.concat(arrayLike)); // 1,2,something,else

// arr = ["Bilbo", "Gandalf", "Nazgul"];
// arr.forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// });

// let arr = [1, 0, false];

// alert(arr.indexOf(0)); // 1
// alert(arr.indexOf(false)); // 2
// alert(arr.indexOf(null)); // -1

// alert(arr.includes(1));

// const arr = [NaN];
// alert(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
// alert(arr.includes(NaN)); // true (correct)

// let result = arr.find(function(item, index, array) {
//   // if true is returned, item is returned and iteration is stopped
//   // for falsy scenario returns undefined
// });

// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Mary" }
// ];

// let user = users.find(item => item.id == 2);

// alert(user.name); // John


// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// // returns array of the first two users
// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// let arr = [5, 4, 3, 2, 1];

// // the method reorders the content of arr
// arr.sort(function(a, b) { alert(a + "<>" + b); return a - b; });

// alert(arr); // 1, 15, 2

// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (wrong)

// alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)   

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert( arr ); // 5,4,3,2,1

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

// let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

// alert(arr); // Bilbo, Gandalf

// let str = "test";

// alert(str.split(""));

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// let str = arr.join(';'); // glue the array into a string using ;

// alert(str);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15

// alert(typeof {}); // object
// alert(typeof []); // same

// alert(Array.isArray({})); // false

// alert(Array.isArray([])); // true

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23