let a = 10;
let b = a;
b++;
console.log('a', a); // 10
console.log('b', b); // 11

let arr1 = [1, 2, 3];
let arr2 = arr1; // скопировали, как ссылку на массив. В переменной arr2 хранится переменная arr1
console.log('arr1', arr1); // [1, 2, 3]
console.log('arr2', arr2); // [1, 2, 3]

arr2.push(4);
console.log('arr1', arr1); // [1, 2, 3, 4]
console.log('arr2', arr2); // [1, 2, 3, 4]

console.log('---------');

let arr3 = [1, 2, 3];
let arr4 = arr3.concat(); // передали просто копию значений
arr4.push(4);
console.log('arr3', arr3); // [1, 2, 3]
console.log('arr4', arr4); // [1, 2, 3, 4]

console.log('----------------')

let arr5 = [1, 2, 3];
let arr6 = arr5;
arr6.push(4);
let arr7 = [1, 2, 3, 4];

console.log(`arr5 === arr6 ${arr5 === arr6}`); // true - одно и тоже
console.log(`arr5 === arr7 ${arr5 === arr7}`); // false - так как это разные объекты