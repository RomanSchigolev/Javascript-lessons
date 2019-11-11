// Array Destructuring. Его задача – только скопировать нужные значения в переменные
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [one, two, three, ...otherNumbers] = array;
// console.log(one, two, three, otherNumbers); // 1 2 3 [ 4, 5, 6, 7, 8, 9, 10 ]

const [one,,three, ...otherNumb] = array;
console.log(one, three, otherNumb); // 1 3 [ 4, 5, 6, 7, 8, 9, 10 ]

const array2 = ['one', undefined, 'three', 'four'];
const [a, b = 'two', c, d] = array2;
console.log(a, b, c, d); // one two three four

const color = ['#FFFFFF', [255, 255, 255]];
const [HEX, [red, green, blue]] = color;
console.log(`HEX = ${HEX}, Red: ${red}, Green: ${green}, Blue: ${blue}`); // HEX = #FFFFFF, Red: 255, Green: 255, Blue: 255

let width = 500;
let height = 600;
console.log(`${width}px x ${height}px`); // 500px x 600px
[width, height] = [height, width];
console.log(`${width}px x ${height}px`); // 600px x 500px