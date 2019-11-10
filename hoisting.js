
console.log('Function Declaration:');
console.log(`sum(1, 3): ${sum(1, 3)}`); // 4 - потому что объявление через function declaration

console.log('Объявление функции');

function sum(a, b) {
  return a + b;
}

console.log(`sum(1, 3): ${sum(1, 3)}`); // 4

console.log('-----------------------');

console.log('Function Expression');

console.log('Без разницы: var, let или const')

console.log('square(4): square is not defined'); // square is not defined
console.log('Объявление функции');

let square = function(a) {
  return a ** 2;
}

console.log(`square(4): ${square(4)}`);

console.log('-----------------------');

console.log('Var:');
console.log(`a, ${a}`); // undefined - через var
console.log('Объявление переменной через var');
var a = 4;
console.log(`a, ${a}`); // 4

console.log('Let and Const:');
console.log(`b - Error`); // Error - потому что через let(const)
console.log('Объявление переменной через let(const)');
let b = 4;
console.log(`b, ${b}`); // 4

