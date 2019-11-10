console.log(typeof 1); // number
console.log(typeof "string"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof Math); // object
console.log(typeof Symbol("JS")); //symbol
console.log(typeof function(){}); // function, но всё равно это объект
console.log(typeof NaN); // number
console.log(typeof null); // object

// Undefined - если переменная определена, но не инициализирована. Также, если функция ничего не возвращает, то на выходе получаем undefined
// Null - есди вообще ничего нет.
//
// Приведение типов
// Falsy values: '', 0, undefined, null, false, NaN

console.log(Boolean('')); // false
console.log(Boolean('1')); // true
console.log(Boolean(' ')); // true
console.log(Boolean([])); // пустой массив - true
console.log(Boolean({})); // пустой объект - true
console.log(Boolean(function() {})); // функция - true

//Строки и числа
console.log(typeof (1+'2')); // string '12'
console.log('' + 1 + 0); // string '10'
console.log('' - 1 + 0); // number -1, так как у строк нет такой операции, как '-'
console.log('3'*'8'); // number 24
console.log(4 + 10 + 'px'); // string '14px'
console.log('px' + 10 + 30); // string 'px1030'
console.log('42' - 40); // number 2
console.log('42px' - 40); // NaN
console.log(null + 2); // number 2
console.log(undefined + 2); // NaN, потому что undefined нельзя привести к числу
console.log(null * 2); // 0
console.log(null / 2); // 0

//== vs ===
//== сравнивает значения с приведением типов
//=== сравнивает значения без приведения типов
console.log(2 == '2') // true
console.log(2 == '3') // false
console.log(2 === '2') // false
console.log(undefined === null) // false
console.log(undefined == null) // true
console.log('0' == false) // true интепретатор приводит '0' в число и false тоже к числу => 0 == 0
console.log('0' === false) // false
console.log('0' == 0) // true
console.log('0' === 0) // false

//СЛЕДУЕТ ЗАПОМНИТЬ ИЛИ ПОНЯТЬ
console.log(`false == '': ${false == ''}`); // true
console.log(`false === '': ${false === ''}`); // false
console.log(`false == []: ${false == []}`); // true
console.log(`false === []: ${false === []}`); // false
console.log(`false == {}: ${false == {}}`); // false
console.log(`false == function() {}: ${false == function() {}}`); // false
console.log(`'' == 0: ${'' == 0}`); // true
console.log(`'' == []: ${'' == []}`); // true
console.log(`'' == {}: ${'' == {}}`); // false
console.log(`'' == function() {}: ${'' == function() {}}`); // false
console.log(`0 == []: ${0 == []}`); // true
console.log(`0 == {}: ${0 == {}}`); // false
console.log(`0 == null: ${0 == null}`); // false
console.log(`0 == function() {}: ${0 == function() {}}`); // false












