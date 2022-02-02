const title = 'myFirstProject';

let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1500;
let rollback = 63;
let fullPrice = 5000;
let adaptive = true;


console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов", screenPrice, "долларов");
console.log("Стоимость разработки сайта", fullPrice, "долларов");
console.log(screens.toLowerCase());
console.log(screens.split("ы"));

let percent ;
percent = fullPrice * (rollback/100);
console.log(percent);


