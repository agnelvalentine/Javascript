// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size
// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));

// alert( map.get('name') );
// let recipeMap = new Map([
//   ['cucumber', 500],
//   ['tomatoes', 350],
//   ['onion',    50]
// ]);
// recipeMap.forEach( ( value, key,map) => {
//   alert(`${key}: ${value} : ${map.get(key)}`); // cucumber: 500 etc
// });


// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));
// alert(map.size);
// alert( map.get('name') ); // John

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);

// // now prices = { banana: 1, orange: 2, meat: 4 }

// alert(prices.orange);

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// // let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// // // done!
// // // obj = { banana: 1, orange: 2, meat: 4 }

// // alert(obj.orange);

// let obj = Object.fromEntries(map)
// alert(obj.orange);


//SET

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// alert( set.size ); // 3

// for (let user of set) {
//   alert(user.name); // John (then Pete and Mary)
// }

// let set = new Set(["oranges", "apples", "bananas"]);
// set.forEach((value)=>{alert(set.entries())});
// for(let us of set.entries())
// {
//   alert(us);
// }
// for (let value of set) alert(value);

// // the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(`${value}:${valueAgain}:${set}`);
// });

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

// function unique(arr) {
  
//   return Array.from(new Set(arr));
//   /* your code */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); 

function aclean(arr){
  //my solution
  // let i=0;
  // let s=new Set();
  // let m=new Map();
  // while(i<arr.length){
  //   let t=arr[i].split('').sort().join("").toLowerCase();
  //   m.set(t,arr[i]);
  //   s.add(t);
  //   i++;
  // }
  // let k=new Set();
  // s.forEach((v)=>{
  //   k.add(m.get(v));
  // });
  // return Array.from(k);

//their solution
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }

//   return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); 