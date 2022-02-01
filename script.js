const title = 'myFirstProject';

let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 3;
let rollback = 63;
let fullPrice = 5000;
let adaptive = true;


console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(screenPrice, fullPrice);
console.log(screens.toLowerCase());
console.log(screens.split());

let percent ;
percent = fullPrice * (rollback/100);
console.log(percent);


