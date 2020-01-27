// Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.
let newMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 'hello'],
]);
console.log(newMap); // Map { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 'hello' }

console.log(newMap.get('a')); // 1. Возвращает значение по ключу
console.log(newMap.size); // 4

// console.log(newMap.clear()); // очистка
newMap.delete('d'); // удаляем ключ, следовательно и значение. Возвращает булевое значение: успешно(true) или неуспешно(false)
console.log(newMap); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }

console.log(newMap.entries());
//[Map Entries] { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }

console.log(newMap.keys());
//[Map Iterator] { 'a', 'b', 'c' }

console.log(newMap.values());
//[Map Iterator] { 1, 2, 3 }

newMap.set('checked', false); // устанавливаем новое отношение ключ-значение
console.log(newMap); // Map { 'a' => 1, 'b' => 2, 'c' => 3, 'checked' => false }

newMap.forEach((value, key, map) => {
  //console.log(value);
  // 1
  // 2
  // 3
  // false
  //console.log(key);
  // a
  // b
  // c
  // checked
});

for (let item of newMap) {
  //console.log(item);
  // [ 'a', 1 ]
  // [ 'b', 2 ]
  // [ 'c', 3 ]
  // [ 'checked', false ]
}
const object = {
  name: 'Roman',
  age: 20,
  city: 'Barnaul'
};

newMap.set(object, 'value of obj');
console.log(newMap);
// Map {
//   'a' => 1,
//   'b' => 2,
//   'c' => 3,
//   'checked' => false,
//   { name: 'Roman', age: 20, city: 'Barnaul' } => 'value of obj'
// }

console.log(newMap.get(object)); // value of obj
console.log(newMap.has(object)); // true

for (let [key, value] of newMap) {
  console.log(key, value);
  // a 1
  // b 2
  // c 3
  // checked false
  // { name: 'Roman', age: 20, city: 'Barnaul' } value of obj
}

const array = [...newMap];
console.log(array);
// [
//   [ 'a', 1 ],
//   [ 'b', 2 ],
//   [ 'c', 3 ],
//   [ 'checked', false ],
//   [ { name: 'Roman', age: 20, city: 'Barnaul' }, 'value of obj' ]
// ]
array.push('hello');
console.log(array);
// [
//   [ 'a', 1 ],
//   [ 'b', 2 ],
//   [ 'c', 3 ],
//   [ 'checked', false ],
//   [ { name: 'Roman', age: 20, city: 'Barnaul' }, 'value of obj' ],
//   'hello'
// ]

const otherArray = Array.from(newMap);
console.log(otherArray);
// [
//   [ 'a', 1 ],
//   [ 'b', 2 ],
//   [ 'c', 3 ],
//   [ 'checked', false ],
//   [ { name: 'Roman', age: 20, city: 'Barnaul' }, 'value of obj' ]
// ]
console.log(array.flat(1));
// [
//   'a',
//   1,
//   'b',
//   2,
//   'c',
//   3,
//   'checked',
//   false,
//   { name: 'Roman', age: 20, city: 'Barnaul' },
//   'value of obj',
//   'hello'
// ]

//====================

const users = [
  {name: 'Oleg'},
  {name: 'Olga'},
  {name: 'Katya'},
];

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date( new Date().getTime() + 1000))
  .set(users[2], new Date(new Date().getTime() + 5000));
function lastVisits(user) {
  return visits.get(user);
}

console.log(lastVisits(users[0])); // 2020-01-27T10:24:07.389Z
console.log(lastVisits(users[1])); // 2020-01-27T10:24:08.389Z
console.log(lastVisits(users[2])); // 2020-01-27T10:24:12.389Z






