const PERSON = {
  surname: 'Старк',
  knows(what, name) {
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
  }
};

PERSON.knows('всё', 'Бран');

const John = {surname: 'Сноу'};

PERSON.knows.call(John,'ничего не','Джон');
PERSON.knows.apply(John, ['ничего не','Джон']);
PERSON.knows.bind(John, 'ничего не','Джон')();

function logThis() {
  console.log(this); // создаёт свой собственный контекст
}

let arrowLogThis = () => console.log(this); // не создаёт свой собственный контекст

const person = {
  name: 'John',
  age: 23,
  logThis,
  arrowLogThis
};

person.logThis(); // контекст - это наш объект 'person'
person.arrowLogThis(); // контекст - это window

const WORKER1 = {
  name: 'Elena',
  position: 'Junior Dev',
  salary: 500
};

const WORKER2 = {
  name: 'Oleg',
  position: 'Senior Dev',
  salary: 2000
};

function promote(newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;

  return console.log(`${this.name} is ${this.position} and earns $${this.salary}`);
}

promote.call(WORKER1, 'Middle Dev', 700); // Elena is Middle Dev and earns $1200
promote.call(WORKER2, 'Guru Dev', 10000); // Oleg is Guru Dev and earns $12000

promote.apply(WORKER1, ['Senior Dev', 800]); // Elena is Senior Dev and earns $2000

let promoteWORKER2 = promote.bind(WORKER2, 'Guru++', 1);
promoteWORKER2(); // Oleg is Guru++ and earns $12001

function demote(newPosition, salaryRise) {
  this.position = newPosition;
  this.salary -= salaryRise;

  return console.log(`${this.name} is ${this.position} and earns $${this.salary}`);
}

console.log(WORKER2); // { name: 'Oleg', position: 'Guru++', salary: 12001 }

demote.call(WORKER2, 'Junior Dev', 11500); // Oleg is Junior Dev and earns $501