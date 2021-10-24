// let arr = ["John", "Smith"]

// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // John
// alert(surname); // Smith

// let [firstName, surname] = "John Smith".split(' ');
// alert(firstName); // John
// alert(surname); // Smith
// second element is not needed
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(title); // Consul

// let [a, b, c] = "abc"; // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);

// alert(one);
// alert(a);

// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');

// alert(user.name); // John
// alert(user.surname); // Smith

// let user = {
//     name: "John",
//     age: 30
// };

// // loop over keys-and-values
// for (let [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`); // name:John, then age:30
// }

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// // Map iterates as [key, value] pairs, very convenient for destructuring
// for (let [key, value] of user) {
//     alert(`${key}:${value}`); // name:John, then age:30
// }

// let guest = "Jane";
// let admin = "Pete";

// // Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];

// alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// // rest is array of items, starting from the 3rd one
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2
// alert(rest);

// let [firstName, surname] = [];

// alert(firstName); // undefined
// alert(surname); // undefined
// // default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(name); // Julius (from array)
// alert(surname); // Anonymous (default used)

// runs only prompt for surname
// let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
// //name wont we prompt
// let [name = prompt('name?'), surname = prompt('surname?')] = [];
// //name is prompted
// alert(name); // Julius (from array)
// alert(surname); // whatever prompt gets

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let {
//     title,
//     width,
//     height
// } = options;
// let {
//     height,
//     width,
//     title
// } = {
//     title: "Menu",
//     height: 200,
//     width: 100
// }
// alert(title); // Menu
// alert(width); // 100
// alert(height); // 200
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let {
    width: w,
    height: h,
    title
} = options;

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200

// let options={
// 	title:"Menu"
// };
// let {width=100, height=200, title}=options;

// alert(title);
// alert(width);
// alert(height);

// let options = {
//   title: "Menu"
// };

// let {width = prompt("width?"), title = prompt("title?")} = options;

// alert(title);  // Menu
// alert(width);

// let options = {
//   title: "Menu"
// };

// let {width: w = 100, height: h = 200, title} = options;

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);  

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // only extract title as a variable
// let { title } = options;

// alert(title);

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };

// // title = property named title
// // rest = object with the rest of properties
// let {title, ...rest} = options;

// // now title="Menu", rest={height: 200, width: 100}
// alert(rest.height);  // 200
// alert(rest.width);

// let title, width, height;

// // okay now
// ({title, width, height} = {title: "Menu", width: 200, height: 100});

// alert( title );

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // destructuring assignment split in multiple lines for clarity
// let {
//   size: { // put size here
//     width,
//     height
//   },
//   items: [item1, item2], // assign items here
//   title = "Menu" // not present in the object (default value is used)
// } = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200
// alert(item1);  // Cake
// alert(item2); 

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...and it immediately expands it to variables
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – taken from options,
//   // width, height – defaults used
//   alert( `${title} ${width} ${height}` ); // My Menu 200 100
//   alert( items ); // Item1, Item2
// }

// showMenu(options);

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({
//   title = "Untitled",
//   width: w = 100,  // width goes to w
//   height: h = 200, // height goes to h
//   items: [item1="Item3", item2="Item4"] // items first element goes to item1, second to item2
// }) {
//   alert( `${title} ${w} ${h}` ); // My Menu 100 200
//   alert( item1 ); // Item1
//   alert( item2 ); // Item2
// }

// showMenu(options);
// showMenu();

// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   alert( `${title} ${width} ${height}` );
// }

// showMenu();

// let user = { name: "John", years: 30 };

// // your code to the left side:
// let{name,years:age,isAdmin=false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert(topSalary(salaries));
function topSalary(salaries){
	let maxSal=0;
	let maxName=null;
	for(const[name,sal] of Object.entries(salaries)){
		if (sal>maxSal)
		{
			maxSal=sal;
			maxName=name;
		}
	}
	return maxName;

}
