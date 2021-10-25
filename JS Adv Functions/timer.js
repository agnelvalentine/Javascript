// function sayHi(phrase, who) {
//     alert(phrase + ', ' + who);
// }

// setTimeout(sayHi, 1000, "Hello", "John");

// setTimeout("alert('Hello')", 1000);

// setTimeout(() => alert('Hello'), 2000);

// let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

// clearTimeout(timerId);
// alert(timerId);

// repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => {
//     clearInterval(timerId);
//     alert('stop');
// }, 5000);

// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// let delay = 5000;

// let timerId = setTimeout(function request() {
//     ...send request...

//     if(request failed due to server overload) {
//         // increase the interval to the next run
//         delay *= 2;
//     }

//     timerId = setTimeout(request, delay);

// }, delay);

// let i = 1;
// setInterval(function() {
//     func(i++);
// }, 100);
// console.log("hi");
let start = Date.now();
let times = [];

setTimeout(function run() {
    times.push(Date.now() - start); // remember delay from the previous call

    if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
    else setTimeout(run); // else re-schedule
});
// alert("Hi");
// alert("Hi");