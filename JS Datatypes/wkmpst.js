// let john = {
//     name: "John"
// };

// let map = new Map();
// map.set(john, "agnel");
// alert(map.get(john));
// john = null;
// alert(john);
// alert(map.get(john));

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "ok"); // works fine (object key)

// // can't use a string as the key
// weakMap.set("test", "Whoops"); //Error

// let john = {
//     name: "John"
// };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null;

// let john = {
//     name: "John"
// };

// let weakMap = new WeakMap();
// weakMap.set(john, "agnel");
// alert(weakMap.get(john));
// alert(john.name);
// john = null;
// alert(weakMap.get(john));
// alert(john.name);

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically

// let visitsCountMap = new Map(); // map: user => visits count

// // increase the visits count
// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// // 📁 main.js
// let john = {
//     name: "John"
// };

// countUser(john); // count his visits

// // later john leaves us
// john = null;
// let cache = new Map();

// // calculate and remember the result
// function process(obj) {
//     if (!cache.has(obj)) {
//         let result = /* calculations of the result for */ obj;

//         cache.set(obj, result);
//     }

//     return cache.get(obj);
// }

// // Now we use process() in another file:

// // 📁 main.js
// let obj = {
//     /* let's say we have an object */
// };

// let result1 = process(obj); // calculated

// // ...later, from another place of the code...
// let result2 = process(obj); // remembered result taken from cache

// // ...later, when the object is not needed any more:
// obj = null;

// alert(cache.size); // 1

// // 📁 cache.js
// let cache = new WeakMap();

// // calculate and remember the result
// function process(obj) {
//     if (!cache.has(obj)) {
//         let result = /* calculate the result for */ obj;

//         cache.set(obj, result);
//     }

//     return cache.get(obj);
// }

// // 📁 main.js
// let obj = {
//     /* some object */ };

// let result1 = process(obj);
// let result2 = process(obj);

// // ...later, when the object is not needed any more:
// obj = null;

// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again

// // visitedSet has 2 users now

// // check if John visited?
// alert(visitedSet.has(john)); // true

// // check if Mary visited?
// alert(visitedSet.has(mary)); // false

// john = null;