// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// alert(guestList);

let a = "agnel\vvalentine";
console.log(a);
// alert( "\u00A9" ); // ©
// alert( "\u{20331}" ); // 佫, a rare Chinese hieroglyph (long Unicode)
// alert( "\u{1F60D}" ); // 😍
// \n	New line
// \r	Carriage return: not used alone. Windows text files use a combination of two characters \r\n to represent a line break.
// \', \"	Quotes
// \\	Backslash
// \t	Tab
// \b, \f, \v	Backspace, Form Feed, Vertical Tab – kept for compatibility, not used nowadays.
// \xXX	Unicode character with the given hexadecimal Unicode XX, e.g. '\x7A' is the same as 'z'.
// \uXXXX	A Unicode symbol with the hex code XXXX in UTF-16 encoding, for instance \u00A9 – is a Unicode for the copyright symbol ©. It must be exactly 4 hex digits.
// \u{X…XXXXXX} (1 to 6 hex characters)	A Unicode symbol with the given UTF-32 encoding. Some rare characters are encoded with two Unicode symbols, taking 4 bytes. This way we can insert long codes.

// let str = `Hello`;

// // the first character
// alert( str[0] ); // H
// alert( str.charAt(0) ); // H

// let str = 'Hi';

// str[0] = 'h'; // error
// alert( str[0] ); // doesn't work

// for (let char of "Hello") {
//   alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// }

// let str = 'Hi';

// str = 'h' + str[1]; // replace the string

// alert( str ); // hi


// alert("Interface" [1].toLowerCase());

// let str = 'Widget with id';

// alert(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
// alert(str.indexOf('widget')); // -1, not found, the search is case-sensitive

// alert(str.indexOf("id"));

// let str = 'Widget with id';

// alert(str.indexOf('id', 2)) // 12

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     alert(`Found at ${foundPos}`);
//     pos = foundPos + 1; // continue the search from the next position
// }


// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     alert(pos);
// }

// alert(str.lastIndexOf("as"));

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     alert("We found it"); // doesn't work!
// }
// let str = "Widget with id";

// if (~str.indexOf("Widget")) {
//     alert("We found it"); // doesn't work!
// }

// alert("Widget".includes("id")); // true
// alert("Widget".includes("id", 3)); // false,

// alert("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
// alert("Widget".endsWith("get")); // true

// let str = "stringify";
// alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
// alert( str.slice(0, 1) );
// alert( str.slice(2) ); // 'ringify'

let str = "stringify";
// alert(str.substr(2, 4));

// alert(str.substring(2, 6)); // "ring"
// alert(str.substring(6, 2)); // "ring"

// ...but not for slice:
// alert(str.slice(2, 6)); // "ring" (the same)
// alert(str.slice(6, 2)); //""

// alert(str.substr(2, 4)); // returns the part of the string from start, with the given length.
// alert(str.substr(-4, 2));

// slice(start, end)	from start to end (not including end)	allows negatives
// substring(start, end)	between start and end	negative values mean 0
// substr(start, length)	from start get length characters	allows negative start
// alert("z".codePointAt(0)); // 122
// alert("Z".codePointAt(0)); // 90

// alert(String.fromCodePoint(90)); // Zs

alert('Österreich'.localeCompare('Zealand')); // -1