
const btnStart = document.querySelector('button[data-start]'); //получаем указатель на кнопку старт
const btnStop = document.querySelector('button[data-stop]'); //получаем указатель на кнопку стоп
btnStop.disabled = true; // Блочим кнопку стоп
btnStart.addEventListener("click", changeBgColor); // вешаем обработчик клика на кнопку Старт
btnStop.addEventListener("click", stopBgColor); // вешаем обработчик клика на кнопку Стоп
let timerId; //Объявляем переменную для сохранения значения функции setInterval

function changeBgColor() { //Объявляем функцию смена цвета бекраунда
  if (!timerId) { //Если timerId - undefined или null - запускаем таймер
    timerId = setInterval(onTime, 1000); //Устанавливаем обработчик onTime с помощью setInterval и сохраняем его значение
    btnStop.disabled = false; //Разблокируем кнопку Стоп
    btnStart.disabled = true; //Блочим кнопку Старт
  }
}

function getRandomHexColor() { //Объявляем функцию получения рендомного цвета
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onTime() { //Обработчик события таймера
    document.body.style.background = getRandomHexColor(); //Изменяем цвет с помощью функции getRandomHexColor
}

function stopBgColor() { //Объявляем функуцию остановки таймера
  clearInterval(timerId);//Останавливаем таймер полученный с помощью setInterval
  timerId = null; //Очищаем таймер
  btnStop.disabled = true; // Блочим кнопку стоп
  btnStart.disabled = false; // Разблокируем кнопку старт
}


