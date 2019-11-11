// Object Destructuring
const PERSON = {
  name: 'Jack',
  age: 25,
  job: {
    profession: 'Frontend developer',
    salary: 3000
  },
  address: {
    country: 'Russia',
    city: 'Moscow',
    street: 'Unknown'
  }
};

let {name, surname = 'Doe', age} = PERSON;
console.log(`${name} ${surname}, ${age} years old`); // Jack Doe, 25 years old

function getData({name: firsName, lastName = 'Doe', age: yearsOld, address: {city: place}}) {
  return {firsName, lastName, yearsOld, place};
}

let res = getData(PERSON);
console.log(res);
// { firsName: 'Jack',
//   lastName: 'Doe',
//   yearsOld: 25,
//   place: 'Moscow' }
let {city, ...otherData} = PERSON.address;
console.log(city); // Moscow
console.log(otherData); // { country: 'Russia', street: 'Unknown' }
console.log(`other data is ${Object.values(otherData).join(', ')}`); // other data is Russia, Unknown

console.log('---------------------------------------');
//-----------------------------------------
const STUDENT = {
  firsName: 'John',
  lastName: 'Doe',
  stats: {
    maths: 5,
    physics: 4,
    foreignLang: 5
  }
};
console.log(STUDENT);
// { firsName: 'John',
//   lastName: 'Doe',
//   stats: { maths: 5, physics: 4, foreignLang: 5 } }

console.log('---------------------------------------');

const STUDENT_2 = {...STUDENT, firsName: 'David', lastName: 'Boe', age: 22};
console.log(STUDENT_2);
// { firsName: 'David',
//   lastName: 'Boe',
//   stats: { maths: 5, physics: 4, foreignLang: 5 },
//   age: 22 }

console.log('---------------------------------------');

function marks({firsName: name, lastName: surname, stats: {maths, physics}}) {
  console.log({name, surname, maths, physics});
  console.log(`${name} ${surname} scored ${maths} in math and ${physics} in physics`);
}

marks(STUDENT);
// { name: 'John', surname: 'Doe', maths: 5, physics: 4 }
// John Doe scored 5 in math and 4 in physics


