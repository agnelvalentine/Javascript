// let str = "hello";
// alert(str.toUpperCase());
// alert(str);

// let f = 1.2345;
// alert(f.toFixed(2));

// let zero = new Number(0);

// if (zero) { // zero is true, because it's an object
//     alert("zero is truthy!?!");
// }

// let num = Number("123");
// alert(num);
// let n = "123";
// alert(n);

// let a = 123;
// alert(a.toString(2));
// alert(a.toString(8));
// alert(a.toString(10));

// alert(111..toString(2));
// alert((111).toString(16));


// let num = 1.23456;

// alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// let num = 12.34;
// alert( num.toFixed(1) ); // "12.3"

// let num = 12.36;
// alert( num.toFixed(1) ); // "12.4"

// let num = 12.34;
// alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
// alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
// alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// alert(9999999999999999); //10000000000000000
// alert(parseInt('100px')); // 100
// alert(parseFloat('12.5em')); // 12.5

// alert(parseInt('12.3')); // 12, only the integer part is returned
// alert(parseFloat('12.3.4'));

// alert(parseInt('a123')); // NaN, the first symbol stops the process


// alert(parseInt('0xff', 16)); // 255
// alert(parseInt('ff', 16)); // 255, without 0x also works

// alert(parseInt('2n9c', 36)); // 123456

// alert(Math.random()); // 0.1234567894322
// alert(Math.random()); // 0.5435252343232
// alert(Math.random()); // ... (any random numbers)


// alert(Math.max(3, 5, -10, 0, 1)); // 5
// alert(Math.min(1, 2)); // 1

// alert(Math.pow(2, 10)); // 2 in power 10 = 1024
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }

// alert(random(1, 5)); // 1.2345623452
// alert(random(1, 5)); // 3.7894332423
// alert(random(1, 5)); // 4.3435234525


// function randomInteger(min, max) {
//     // now rand is from  (min-0.5) to (max+0.5)
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }

// alert(randomInteger(1, 3));

alert(isNaN(NaN)); // true
alert(isNaN("str")); // true
alert(NaN === NaN); // false
alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity