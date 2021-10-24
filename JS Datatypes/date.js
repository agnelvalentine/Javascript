// let now=new Date();
// alert(now);

// 0 means 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// // now add 24 hours, get 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// alert( Dec31_1969 );

// let date = new Date("2017-01-26");
// alert(date);

// new Date(year, month, date, hours, minutes, seconds, ms)

// let n=new Date(2021,6,27,21,35,0,0);
// alert(n);

// let dt=new Date();
// alert(dt.getFullYear());
// alert(dt.getMonth());
// alert(dt.getDate());
// alert(dt.getHours());
// alert(dt.getMinutes());
// alert(dt.getSeconds());
// alert(dt.getMilliseconds());
// alert(dt.getDay());

// alert(new Date().getUTCDate());
// alert(new Date().getTimezoneOffset());

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds)

// let today = new Date();

// today.setHours(0);
// alert(today); // still today, but the hour is changed to 0

// today.setHours(0, 0, 0, 0);
// alert(today);

// let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// alert(date);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// alert(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// alert(date);

// alert(new Date().getUTCDate());
// alert(new Date().getTimezoneOffset());

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds)

// let today = new Date();

// today.setHours(0);
// alert(today); // still today, but the hour is changed to 0

// today.setHours(0, 0, 0, 0);
// alert(today);

// let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// alert(date);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// alert(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// alert(date);
// let date = new Date(2016, 0, 2);
// // date.setDate(1); // set day 1 of month
// // alert( date );

// // date.setDate(0); // min day is 1, so the last day of the previous month is assumed
// // alert( date ); // 31 Dec 2015

// date.setDate(-2); // min day is 1, so the last day of the previous month is assumed
// alert( date );

// let date = new Date();
// alert(+date); 
// let start = new Date(); // start measuring time

// // do the job
// for (let i = 0; i < 10000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // end measuring time

// alert( `The loop took ${end - start} ms` );

// let start = Date.now(); // milliseconds count from 1 Jan 1970
// let start = new Date();
// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = new Date();
// // let end = Date.now(); // done

// alert( `The loop took ${end - start} ms` ); 
// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
// // alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// alert( 'Total time for diffSubtract: ' + time1 );
// alert( 'Total time for diffGetTime: ' + time2 );

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

// alert(ms); // 1327611110417  (timestamp)

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

// alert(date);

// alert(`Loading started ${performance.now()}ms ago`);

// let d1 = new Date(2012, 1, 20, 3, 12);
// alert( d1 );

// let d2 = new Date("February 20, 2012 03:12:00");
// alert( d2 );

// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 Jan 2014
// alert( getWeekDay(date) );

// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days);
//   return date.getDate();
// }

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) );

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// alert( getLastDayOfMonth(2012, 0) ); // 31
// alert( getLastDayOfMonth(2012, 1) ); // 29
// alert( getLastDayOfMonth(2013, 1) );

// function getSecondsToday() {
//   let now = new Date();

//   // create an object using the current day/month/year
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; // ms difference
//   return Math.round(diff / 1000); // make seconds
// }

// alert( getSecondsToday() );

// function getSecondsToday() {
//   let d = new Date();
//   return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// }

// alert( getSecondsToday() );

// function getSecondsToTomorrow() {
//   let now = new Date();
//   let hour = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//   let totalSecondsInADay = 86400;

//   return totalSecondsInADay - totalSecondsToday;
// }

// function formatDate(date) {
//   let diff = new Date() - date; // the difference in milliseconds

//   if (diff < 1000) { // less than 1 second
//     return 'right now';
//   }

//   let sec = Math.floor(diff / 1000); // convert diff to seconds

//   if (sec < 60) {
//     return sec + ' sec. ago';
//   }

//   let min = Math.floor(diff / 60000); // convert diff to minutes
//   if (min < 60) {
//     return min + ' min. ago';
//   }

//   // format the date
//   // add leading zeroes to single-digit day/month/hours/minutes
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ].map(component => component.slice(-2)); // take last 2 digits of every component

//   // join the components into date
//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }

// alert( formatDate(new Date(new Date - 1)) ); // "right now"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // yesterday's date like 31.12.2016 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// function formatDate(date) {
//   let dayOfMonth = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let diffMs = new Date() - date;
//   let diffSec = Math.round(diffMs / 1000);
//   let diffMin = diffSec / 60;
//   let diffHour = diffMin / 60;

//   // formatting
//   year = year.toString().slice(-2);
//   month = month < 10 ? '0' + month : month;
//   dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//   hour = hour < 10 ? '0' + hour : hour;
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   if (diffSec < 1) {
//     return 'right now';
//   } else if (diffMin < 1) {
//     return `${diffSec} sec. ago`
//   } else if (diffHour < 1) {
//     return `${diffMin} min. ago`
//   } else {
//     return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//   }
// }
