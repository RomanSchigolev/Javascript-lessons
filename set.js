// позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.

let newSet = new Set();
console.log(newSet);
newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);
console.log(newSet); // Set { 1, 2, 3, 4 }
newSet.add(1);
console.log(newSet); // Set { 1, 2, 3, 4 }
console.log(newSet.length); // undefined - всегда 0
console.log(newSet.size); // 4
//console.log(newSet.clear()); // undefined - очищает все элементы
newSet.delete(1); // удаляет элемент. Взвращает булево значение - удачно(true) ли удалился элемент или нет(false)
console.log(newSet); // Set { 2, 3, 4 }

console.log(newSet.entries()); // [Set Entries] { [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] }.  { [value, value] }
newSet.add('hello');
console.log(newSet.keys()); // [Set Iterator] { 2, 3, 4, 'hello' }
console.log(newSet.values()); // [Set Iterator] { 2, 3, 4, 'hello' }

console.log(newSet.has('hello')); // true
console.log(newSet.has(1)); // false

newSet.forEach((item, index, set) => {
  //console.log(item*2);
  // 4
  // 6
  // 8
  // NaN
  //console.log(index);
  // 2
  // 3
  // 4
  // hello
});

for (let item of newSet) {
  console.log(item);
  // 2
  // 3
  // 4
  // hello
}
newSet.add({a: 5, b: 6});
console.log(newSet); // Set { 2, 3, 4, 'hello', { a: 5, b: 6 } }
newSet.add([7,8,9]);
console.log(newSet); // Set { 2, 3, 4, 'hello', { a: 5, b: 6 }, [ 7, 8, 9 ] }

let array = Array.from(newSet);
console.log(array); // [ 2, 3, 4, 'hello', { a: 5, b: 6 }, [ 7, 8, 9 ] ]
console.log(array.flat(1)); // [ 2, 3, 4, 'hello', { a: 5, b: 6 }, 7, 8, 9 ]

// ===================

let uniqueValueOfArray = (array) => {
  return (new Set(array));
};
console.log(uniqueValueOfArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])); // Set { 1, 2, 3, 4, 5 }

