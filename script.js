'use strict'

const appData = {
    title: '', 
    screens: '', 
    screenPrice: 0, 
    adaptive: true, 
    rollback: 36,
    fullPrice: 0,            
    allServicePrices: 0,
    servicePercentPrice: 0, 
    service1: '', 
    service2: '',
    start: function () {

    function asking () {
      appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки"); 
      appData.screens = prompt('Какие типы экранов необходимо разработать?', "Простые, Сложные, Интерактивные?")

      do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
      } while (!isNumber(appData.screenPrice))

      appData.adaptive = confirm("Нужен ли адаптив на сайте?");
      }

      function isNumber (num) {
                  return !isNaN(parseFloat(num)) && isFinite(num)
      }

      function getAllServicePrices () {
      let sum = 0
      let servicePrice

      for (let i = 0; i < 2; i++) {

            if (i === 0) {
                  appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
                  servicePrice = +prompt('Сколько это будет стоить?')
                  while (!isNumber(servicePrice)) {
                        servicePrice = +prompt('Сколько это будет стоить?')
                  }
            } else if (i === 1) {
                  appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
                  servicePrice = +prompt('Сколько это будет стоить?')
                  while (!isNumber(servicePrice)) {
                        servicePrice = +prompt('Сколько это будет стоить?')
                  }
            }
                  sum += servicePrice
            }

      return sum
      }

      function getFullPrice () {
            return appData.screenPrice + appData.allServicePrices;
      }

      function getTitle () {
            return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
      }

      function getServicePercentPrice () {
            return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
      }

      function getRollbackMessage (price) {
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
  }      
}   

appData.start()
appData.allServicePrices = getAllServicePrices()
appData.fullPrice = getFullPrice()
appData.servicePercentPrice = getServicePercentPrice()
appData.title = getTitle()


console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);

  
