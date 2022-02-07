'use strict'

let title = prompt('Как называется ваш проект?'); 
let screens = prompt('Какие типы экранов необходимо разработать?', "Простые, Сложные, Интерактивные?")
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm("Нужен ли адаптив на сайте?"); 

let rollback = 63;
let fullPrice             
let allServicePrices 
let servicePercentPrice 

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько будет стоить дополнительная услуга?');
let service2 = prompt('Какой еще дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько будет стоить данная дополнительная услуга?');

const getAllServicePrices = function () {
      return servicePrice1 + servicePrice2
}

const showTypeOf = function (variable) {
      console.log(variable, typeof variable);
}

function getFullPrice() {
      return screenPrice + allServicePrices;
}

const getTitle = function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const getServicePercentPrice = function () {
      return fullPrice - (fullPrice * (rollback / 100));
}

const getRollbackMessage = function(price) {
      if (price >= 30000) {
            return 'Даем cкидку в 10%'
      } else if (price < 30000 && price >= 15000) {
            return 'Даем cкидку в 5%'
      } else if (price < 15000 && price >= 0) {
            return 'Скидка не предусмотрена'
      } else {
            return 'Что-то пошло не так'
      }
}
       
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle(title)

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");



  


  
