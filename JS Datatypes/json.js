// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };

// alert(user);

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);

// alert(typeof json); // we've got a string!

// alert(json);

// a number in JSON is just a number
// alert( JSON.stringify(1) ) // 1

// // a string in JSON is still a string, but double-quoted
// alert( JSON.stringify('test') ) // "test"

// alert( JSON.stringify(true) ); // true

// alert( JSON.stringify([1, 2, 3]) );

// alert("hello");

// let user = {
//   sayHi() { // ignored
//     alert("Hello");
//   },
//   [Symbol("id")]: 123, // ignored
//   something: undefined // ignored
// };

// alert( JSON.stringify(user) );

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// alert( JSON.stringify(meetup) );

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };

// // meetup.place = room;       // meetup references room
// // room.occupiedBy = meetup; // room references meetup

// // JSON.stringify(meetup);
// alert(JSON.stringify(meetup));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"},{team:"Agnel"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// alert( JSON.stringify(meetup, ['title', 'participants','team']) );
// // {"title":"Conference","participants":[{},{}]}
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   alert(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// alert(JSON.stringify(user, null, 4));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };

// alert( JSON.stringify(meetup) );

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };

// let meetup = {
//   title: "Conference",
//   room
// };

// alert( JSON.stringify(room) ); // 23

// alert( JSON.stringify(meetup) );

// stringified array
// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// alert( numbers[1] );
// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// alert( user.friends[1] );

// let json = `{
//   name: "John",                     // mistake: property name without quotes
//   "surname": 'Smith',               // mistake: single quotes in value (must be double)
//   'isAdmin': false                  // mistake: single quotes in key (must be double)
//   "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
//   "friends": [0,1,2,3]              // here all fine
// }`;

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);

// alert( meetup.date.getDate() ); 

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// alert( meetup.date.getDate() );

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// alert( schedule.meetups[1].date.getDate() ); 

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
