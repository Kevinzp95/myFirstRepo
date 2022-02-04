'use strict'

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов необходимо разработать?', "Простые, Сложные, Интерактивные?")
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 63;
let fullPrice = 3000;
let adaptive = confirm("Нужен ли адаптив на сайте?"); 
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let service1Price = +prompt('Сколько будет стоить дополнительная услуга?');
let service2 = prompt('Какой еще дополнительный тип услуги нужен?');
let service2Price = +prompt('Сколько будет стоить данная дополнительная услуга?');


  let percent;
      percent = fullPrice * (rollback/100);
      console.log(percent);                   // процент отката посреднику

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");
console.log(screens.toLowerCase().split(","));

fullPrice = screenPrice + service1Price;
console.log(fullPrice);

  let servicePercentPrice = fullPrice - percent;
  console.log(Math.ceil(servicePercentPrice));

  if (fullPrice > 30000) {
        console.log('Даем cкидку в 10%');
  } else if (fullPrice < 30000 && fullPrice > 15000) {
        console.log('Даем cкидку в 5%');
  } else if (fullPrice < 15000 && fullPrice > 0) {
        console.log('Скидка не предусмотрена');
  } else if (fullPrice < 0) {
        console.log('Что-то пошло не так');
  }
