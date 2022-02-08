'use strict'

let title 
let screens 
let screenPrice 
let adaptive 
let rollback = 36
let fullPrice             
let allServicePrices 
let servicePercentPrice 
let service1 
let service2

const isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
      title = prompt('Как называется ваш проект?', "Калькулятор верстки"); 
      screens = prompt('Какие типы экранов необходимо разработать?', "Простые, Сложные, Интерактивные?")

      do {
            screenPrice = +prompt('Сколько будет стоить данная работа?');
      } while (!isNumber(screenPrice))

      adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function () {
      let sum = 0

      for (let i = 0; i < 2; i++) {

            if (i === 0) {
                  service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                  service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            sum += +prompt('Сколько это будет стоить?')
            
            while (!isNumber(sum)) {
                  sum += +prompt('Сколько это будет стоить?') 
            }

      }
      return sum
}

const showTypeOf = function (variable) {
      console.log(variable, typeof variable);
}

function getFullPrice() {
      return screenPrice + allServicePrices;
}

const getTitle = function () {
      return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
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
       
asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle()

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(typeof serviceChng1);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");



  


  
