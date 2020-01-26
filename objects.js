const PERS = {
  name: 'Roman',
  surname: 'Schigolev',
  age: 20,
  sayHello() {
    console.log(`Hello! My name is ${this.name} ${this.surname}. I am ${this.age} years old.`);
  }
};

PERS.sayHello(); // Hello! My name is Roman Schigolev. I am 20 years old.

function person(name, surname, age) {
  let person = {
    name,
    surname,
    age,
    sayHi() {
      console.log(`Hi, my name is ${this.name} ${this.surname}`);
    }
  };
  return person;
}

const PERSON = person('Roman', 'Schigolev', 20);
console.log(PERSON);
// { name: 'Roman',
//   surname: 'Schigolev',
//   age: 20,
//   sayHi: [Function: sayHi]
// }
PERSON.sayHi(); // Hi, my name is Roman Schigolev

const city = 'town';
const job = 'Fronted Developer';
const CHARACTER = {
  name: 'John',
  age: 23,
  [city]: 'Moscow',
  job,
  skill: 'do nothing',
  allKeys() {
    return Object.keys(this)
      .filter(item => item !== 'allKeys')
      .join(', ');
  }
};
console.log(CHARACTER.allKeys()); // name, age, town, job, skill
console.log(CHARACTER);

const first = {a: 1};
const second = {b: 2};
console.log(Object.assign(first, second)); // { a: 1, b: 2 }
console.log(first); // { a: 1, b: 2 }
const third = {c: 3};
console.log(Object.assign({}, third, second)); // { c: 3, b: 2 }. Создали новый массив, объединив два других
console.log(third); // { c: 3 }
const obj = {
  one: 1,
  two: 2,
  three: 3
};
console.log(Object.keys(obj)); // [ 'one', 'two', 'three' ]
console.log(Object.values(obj)); // [ 1, 2, 3 ]
console.log(Object.entries(obj)); // [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ]

