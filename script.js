'use strict'

let title = 'myFirstProject';
let aim = 'цель'
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1500;
let rollback = 63;
let fullPrice = 3000;
let service1 = 300;
let service1Price = 26;
let adaptive = true;
let adaptivePrice = 30;


console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");
console.log(screens.toLowerCase().split(","));

  let percent;
      percent = fullPrice * (rollback/100);
      console.log(percent);


// -------  Задание 3-его урока ----------

/*
title = prompt('Как называется ваш проект?');
aim = prompt('Какова цель вашего проекта?');
screens = prompt('Какие типы экранов необходимо разработать?', "Простые, Сложные, Интерактивные?")
screenPrice = prompt('Сколько будет стоить данная работа?'); 
service1 = prompt('Какой дополнительный тип услуги нужен?'); */
service1Price = +prompt('Сколько будет стоить дополнительная услуга?'); 
adaptive = confirm("Нужен ли адаптив на сайте?"); 

  switch (true) {
      case adaptive == true:
            adaptivePrice = prompt('Сколько будет стоить адаптив?');
            break
      case adaptive == false:
            alert('Жаль, адаптивность улучшила бы ваш проект');
}

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
