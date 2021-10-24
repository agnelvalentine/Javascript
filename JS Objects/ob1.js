// let o={
//     name:"Agnel",
//     age:21,
//     "undergraduate degree":"B.E,CSE"
//     };

//     alert(o.name);
//     alert(o.age);
//     alert(o["undergraduate degree"]);

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple );
// function makeUser(name, age) {
//     return {
//         name,
//         age,
//         // ...other properties
//     };
// }

// let user = makeUser("John", 30);
// alert(user.name);
// alert(user.age);

// let obj = {};
// obj.__proto__ = 5; // assign a number
// alert(obj.__proto__);

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;

//     return {
//         father: man,
//         mother: woman
//     }
// }

// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// });

// alert(family.father.wife.name);

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         // "this" is the "current object"
//         alert(this.name);
//     }

// };

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// // For instance, here arrow() uses this from the outer user.sayHi() method:

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };

// user.sayHi(); // Ilya



//user.sayHi(); // John

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().up().down().showStep(); // 1