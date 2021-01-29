//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const wrapper = document.querySelector("#counter ");
const span = document.querySelector("#value");
const sub = document.querySelector("[data-action='increment']");
const add = document.querySelector("[data-action='decrement']");

let counterValue = 0;

const increment = sub.addEventListener("click", () => {
  counterValue += 1;

  span.textContent = counterValue;
});

const decrement = add.addEventListener("click", () => {
  counterValue -= 1;

  span.textContent = counterValue;
});
