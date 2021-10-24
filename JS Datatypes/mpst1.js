// let map = new Map();

// map.set('1', 'str1'); // a string key
// map.set(1, 'num1'); // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// alert(map.get(1)); // 'num1'
// alert(map.get('1')); // 'str1'
// alert(map.get(true));

// alert(map.size);

// let john = {
//     name: "John"
// };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);

// alert(visitsCountMap.get(john));

// let map = new Map();
// map.set('1', 'str1')
//     .set(1, 'num1')
//     .set(true, 'bool1');
// alert(map.get(true));

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// // iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // cucumber, tomatoes, onion
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     alert(entry); // cucumber,500 (and so on)
// }

recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
});