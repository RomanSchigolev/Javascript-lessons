// 1. push, pop, shift, unshift

//push - добавление элемента в конец массива
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

// pop - удалаяем с конца
arr1.pop();
console.log(arr1); // [1, 2, 3]

// shift - удаляет с начала
arr1.shift();
console.log(arr1); // [2, 3]

// unshift - добавление элемента в начале массива
arr1.unshift(5);
console.log(arr1); // [5, 2, 3]


// 2. join, split

// join: array -> string
let arr2_1 = ['a', 'b', 'c', 'd'];
let string2_1 = arr2_1.join(' ');
console.log(string2_1); // a b c d


// split: string -> array
let string2_2 = 'hello';
let arr2_2 = string2_2.split('');
console.log(arr2_2); // [ 'h', 'e', 'l', 'l', 'o' ]

let string2_3 = 'a,b,c,d,e,f,g';
let arr2_3_1 = string2_3.split(',');
console.log(arr2_3_1); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

let arr2_3_2 = string2_3.split('');
console.log(arr2_3_2); // [ 'a', ',', 'b', ',', 'c', ',', 'd', ',', 'e', ',', 'f', ',', 'g' ]

let arr2_3_3 = string2_3.split(' ');
console.log(arr2_3_3); // [ 'a,b,c,d,e,f,g' ]


// 3. slice: [начальный индекс, конечный индекс)
let arr3_1 = [1, 2, 3, 4, 5];
let arr3_1_1 = arr3_1.slice(0, 3);
console.log(arr3_1_1); // [ 1, 2, 3 ]
let arr3_1_2 = arr3_1.slice(-1);
console.log(arr3_1_2); // [ 5 ]


// 4. concat - копирование элементов
let arr4_1 = [1, 2, 3, 4];
let arr4_1_1 = arr4_1.concat();
console.log(arr4_1_1); // [ 1, 2, 3, 4 ]


// 5. splice: (с какого индекса начинать, сколько элементов убирать, элементы на замену или какой-нибудь массив)
let arr5_1 = ['a', 'b', 'c', 'd'];
arr5_1.splice(1, 2, 'js');
console.log(arr5_1); // [ 'a', 'js', 'd' ]
arr5_1.splice(1);
console.log(arr5_1); // [ 'a' ]

// 6. reverse
let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.reverse()); // [ 5, 4, 3, 2, 1 ]

let palindrome = str => {
  str = str.toLowerCase();
  return console.log(str === str.split('')
                                .reverse()
                                .join(''));
};
palindrome('Anna'); // true
palindrome('Roman'); // false


console.log('test'.split('')); // [ 't', 'e', 's', 't' ]
console.log('test'.split('').reverse()); // [ 't', 's', 'e', 't' ]
console.log('test'.split('').reverse().join()); // t,s,e,t
console.log('test'.split('').reverse().join('')); // tset


// 7. sort
console.log(['b', 'a', 'd', 'e', 'c'].sort()); // [ 'a', 'b', 'c', 'd', 'e' ]

let numbers = [50, 30, 20, 10, 2];
numbers.sort((prev, next) => {
  console.log(prev, next);
});
numbers.sort((prev, next) => prev - next);
console.log(numbers); // [ 2, 10, 20, 30, 50 ]

numbers.sort((prev, next) => next - prev);
console.log(numbers); // [ 50, 30, 20, 10, 2 ]

// 8. flat - поднимает вложенные массивы на указанный уровень depth
const ARRAY = [[1, 2, 3], 4, 5, [7, 8,]];
const ARRAY_NEW = ARRAY.flat(0);
console.log(ARRAY_NEW); // [ [ 1, 2, 3 ], 4, 5, [ 7, 8 ] ]
console.log(ARRAY.flat(1)); // [1, 2, 3, 4, 5, 7, 8]

// 9. flatMap - метод применяет функцию к каждому элементу массива, а затем сглаживает результат в новый массив. Объединяет метод flat() и метод map() в одну функцию.
const ARR = [1,2,3,4,5,6,7,8,9,10];
const ARR_NEW = ARR.flatMap((item, index, array) => [[item * 10]]);
console.log(ARR_NEW);
// [[ 10 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ], [ 60 ], [ 70 ], [ 80 ], [ 90 ], [ 100 ]]

// 10. fill - метод заполняет все элементы массива одинаковым значением, от начального индекса (по умолчанию 0) до конечного индекса (невключительно) (по умолчанию array.length).
const mySomeArray = [1,2,3,4,5,6];
console.log(mySomeArray.fill(10, 1, 3)); // [ 1, 10, 10, 4, 5, 6 ]

// 11. includes - метод возвращает значение true, если массив содержит определенный элемент, и значение false — если нет.
console.log(mySomeArray.includes(1, 2)); // false
console.log(mySomeArray.includes(1, 0)); // true

const a = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let sum = 0;
let b = '';

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    b += `${a[i][j]} `;
  }
  b += '\n';
}
console.log(b);
// 1 2 3
// 4 5 6
// 7 8 9



