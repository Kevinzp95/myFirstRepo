'use strict'

let title = prompt('Как называется ваш проект?'); 
let screens = prompt('Какие типы экранов необходимо разработать?', "Простые, Сложные, Интерактивные?")
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm("Нужен ли адаптив на сайте?"); 
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько будет стоить дополнительная услуга?');
let service2 = prompt('Какой еще дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько будет стоить данная дополнительная услуга?');
let rollback = 63;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let kickbackmoney = fullPrice - (fullPrice * (rollback / 100));                
let allServicePrices = servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - kickbackmoney;

const showTypeOf = function(variable) {
      console.log(variable, typeof variable);
}

const getAllServicePrices = function(price1, price2) {
      return price1 + price2;
}

function getFullPrice(price3, price4) {
      return price3 + price4;
}

function getTitle(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const getServicePercentPrices = function(price5, price6) {
      return price5 - price6;
}

const getRollbackMessage = function(price) {
      if (price > 30000) {
            return 'Даем cкидку в 10%'
      } else if (price < 30000 && price > 15000) {
            return 'Даем cкидку в 5%'
      } else if (price < 15000 && price > 0) {
            return 'Скидка не предусмотрена'
      } else if (price < 0) {
            return 'Что-то пошло не так'
      }
}
       
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getAllServicePrices(servicePrice1, servicePrice2);
getFullPrice(screenPrice, allServicePrices);
getTitle(title);
getServicePercentPrices(fullPrice, kickbackmoney);
getRollbackMessage(fullPrice);


console.log(Math.ceil(servicePercentPrice));

console.log(getRollbackMessage(fullPrice));
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");



  


  
