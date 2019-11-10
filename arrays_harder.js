const PERSON = [
  {name: 'Roman', age: 20, gender: 'male'},
  {name: 'Anna', age: 22, gender: 'female'},
  {name: 'Oleg', age: 30, gender: 'male'},
  {name: 'Elena', age: 25, gender: 'female'},
  {name: 'Masha', age: 15, gender: 'female'},
  {name: 'Alina', age: 17, gender: 'female'},
  {name: 'Lisa', age: 16, gender: 'female'}
];

const SHOPPING_CART = [
  {name: 'iPhone', cost: 1000},
  {name: 'OnePlus', cost: 500},
  {name: 'Pixel', cost: 2000},
  {name: 'Samsung', cost: 400},
  {name: 'Readmi', cost: 300},
  {name: 'Xiaomi', cost: 100},
];

// for (let i = 0; i < PERSON.length; i++) {
//   console.log(PERSON[i]);
// }
// for (person of PERSON) {
//   console.log(person);
// }


// FOREACH
// PERSON.forEach( (item, index, array) => {
//   console.log(item);
//   console.log(index);
//   console.log(array);
//   console.log('-------');
// });


// MAP
// const NEWPERSON = PERSON.map( (item, index, array) => {
//   return {
//     name: item.name,
//     age: item.age
//   };
// });
// console.log(NEWPERSON);


// FILTER
// const YOUNG = PERSON.filter( (item, index, array) => item.age < 18 );
// console.log(YOUNG);


// SOME and EVERY
// const GENDER_IS_MALE = PERSON.some( (item, index, array) => item.gender === 'male' );
// console.log(GENDER_IS_MALE);
//


// REDUCE and REDUCERIGHT
// const AMOUNT = SHOPPING_CART.reduce((total, item) => total += item.cost, 0);
// console.log(AMOUNT);


// FIND
// const MALE = PERSON.filter(item => item.gender === 'male');
// console.log(MALE);


// FINDINDEX - выводит только первый попавшийся индекс
// const MALE_INDEX = PERSON.findIndex(item => item.gender === 'male');
// console.log(MALE_INDEX);

// const UNIQUE = PERSON
//   .filter(item => item.age < 18)
//   .map(item => {
//     return {
//       info: `${item.name}, ${item.age} years old`,
//       age: item.age
//     };
//   });
// console.log(UNIQUE);
