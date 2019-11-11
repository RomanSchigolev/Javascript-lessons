// SPREAD - выдергивает элементы из массива "наружу" (разворачивает данные)
let staticLang = ['C', 'C++', 'Java'];
let dynamicLang = ['Javascript', 'PHP', 'Ruby'];
let allLang = [...staticLang, 'C#', 'Python', ...dynamicLang];
console.log(allLang); // [ 'C', 'C++', 'Java', 'C#', 'Python', 'Javascript', 'PHP', 'Ruby' ]

let es5Lang = [].concat(staticLang, 'Go', 'Pascal', dynamicLang);
console.log(es5Lang); // [ 'C', 'C++', 'Java', 'Go', 'Pascal', 'Javascript', 'PHP', 'Ruby' ]

let array = [1, 2, 3];

function add(a, b, c) {
  console.log(a + b + c);
}

add(array); // 1,2,3undefinedundefined
add(...array); // 6

let arr = [20, 12, 241, 2334, 1, 2, 7, 10, 64];
console.log(Math.max(...arr)); // 2334
console.log(Math.min(...arr)); // 1


// REST - делает массив из последовательности элементов (сворачивает данные)
function average(array) {
  return console.log(array.reduce((total, item) => total += item, 0) / array.length);
}

let ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
average(ar); // 55

function averageRest(...array) {
  return console.log(array.reduce((total, item) => total += item, 0) / array.length);
}

averageRest(10, 20, 30, 40, 50, 60, 70, 80, 90, 100); // 55

function res(arg1, arg2, ...array) {
  console.log(arg1, arg2, array);
  let newArray = array.map((item, index, array) => {
    return item * 2;
  });
  console.log(arg1, arg2, newArray);
}

res(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//1 2 [ 3, 4, 5, 6, 7, 8, 9, 10 ]
//1 2 [ 6, 8, 10, 12, 14, 16, 18, 20 ]

