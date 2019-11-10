// Define
// let <=> var - область видимости, ограниченная фигурными скобками
// const - constant - область видимости, ограниченная фигурными скобками
// var - deprecated - переменная с область видимости в пределах функции

if (true) {
   var a = 'ES5';
}

console.log(a); // Все окей

if (true) {
   let a = 'ES5';
}

console.log(a); // Ошибка

if (true) {
   const a = 'ES5';
}

console.log(a); // Ошибка


// Hoisting - поднятие переменных и функций

// var a = undefined - до вызова перенной a
console.log(a); // Undefined
var a = 5; // происходит переопределение переменной a


console.log(a); // Ошибка (a is not defined)
let a = 5;


var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function () {
    console.log(i); // При клике по любой кнопке получаем 10
  }
}

var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function () {
    console.log(i); // Все прекрасно работает
  }
}
