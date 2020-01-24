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
}
console.log(CHARACTER.allKeys()); // name, age, town, job, skill
console.log(CHARACTER);
