'use strict'

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 36,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();
    
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    do {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки")
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let naming = ""
      do {
      naming = prompt("Какие типы экранов необходимо разработать?","Простые, Сложные?");
      } while (appData.isNumber(naming));
      let price = 0

      do {
      price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({id: i, name: naming, price: price})

    }

    for (let i = 0; i < 2; i++) {
      let name = ""
      do {
      name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(name));
      let price = 0

        do {
          price = prompt("Сколько это будет стоить?");
        } while (!appData.isNumber(price));
      
      appData.services[name] = +price

      }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function() {
    for(let screen of appData.screens) {
      appData.screenPrice += +screen.price
}

    for(let key in appData.services) {
      appData.allServicePrices += appData.services[key]
}
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
  },

  getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем cкидку в 10%";
    } else if (price < 30000 && price >= 15000) {
      return "Даем cкидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.screenPrice);
  }
};

appData.start();
