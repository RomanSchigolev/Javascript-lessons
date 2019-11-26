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


// КЛАССЫ
// < ES6
function Hero(firstName, lastName, years) {
  this.firsName = firstName;
  this.lastName = lastName;
  this.years = years;
  this.sayHi = () => {
    console.log(`Hello! My name is ${this.firsName} ${this.lastName}`);
  }
}

Hero.prototype.car = 'BMW';

const pers = new Hero('Roman', 'Schigolev', 20);
console.log(pers);
// Person {
//   firsName: 'Roman',
//   lastName: 'Schigolev',
//   years: 20,
//   sayHi: [Function]
// }
pers.sayHi(); // Hello! My name is Roman Schigolev

console.log(pers.car); // BMW - находится в классе Person, то есть сначала ищем свойство у экземпляра класса, если не находим, то ищем в прототипе класса
console.log(pers);
// Person {
//   firsName: 'Roman',
//   lastName: 'Schigolev',
//   years: 20,
//   sayHi: [Function]
// }
// ES6
class Person {
  constructor(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.years = age;
  }

  sayHello() {
    console.log(`Hi!!`);
  }
}

const character = new Person('Roman', 'Schigolev', 20);
console.log(character); // Person { firstName: 'Roman', lastName: 'Schigolev', years: 20 }

for (let key in character) {
  console.log(`character.${key} = ${character[key]}`);
  // character.firstName = Roman
  // character.lastName = Schigolev
  // character.years = 20

}

class Animal {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.type = options.type;
    this.voice = options.voice;
    this.speed = null;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name} бежит со скоростью ${speed}.`);
  }

  saySomething() {
    console.log(this.voice);
  }
}

const cow = new Animal({
  name: 'Jack',
  age: 4,
  type: 'mammal',
  voice: 'Muuuu',
});
console.log(cow); // Animal { name: 'Jack', age: 4, type: 'mammal', voice: 'Muuuu', speed: null }
cow.saySomething(); // Muuuu

const dog = new Animal({
  name: 'Marusya',
  age: 11,
  type: 'mammal',
  voice: 'gav-gav'
});
console.log(dog); // Animal { name: 'Marusya', age: 11, type: 'mammal', voice: 'gav-gav', speed: null }
dog.saySomething(); // gav-gav


// Наследование
class Rabbit extends Animal {
  constructor(options) {
    super(options); // вызывает родительский конструктор (работает только внутри нашего конструктора).
    this.color = options.color;
  }

  hide() {
    console.log('Прячется');
  }
}

const rabbit = new Rabbit({
  name: 'Bunny',
  age: 4,
  type: 'mammal',
  voice: 'Unknown',
  color: 'White'
});

console.log(rabbit);
// Rabbit {
//   name: 'Animal',
//   age: undefined,
//   type: undefined,
//   voice: undefined,
//   speed: null,
//   color: 'White'
// }
rabbit.run(10); // Bunny бежит со скоростью 10.
rabbit.hide(); // Прячется
rabbit.saySomething(); // Unknown


class Cat extends Animal {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  get trueAge() {
    return this.age * 7;
  }

  set trueAge(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: 'CAT',
  age: 10,
  type: 'mammal',
  voice: 'Myau',
  color: 'Black'
});

console.log(cat);
// Cat {
//   name: 'CAT',
//   age: 10,
//   type: 'mammal',
//   voice: 'Myau',
//   speed: null,
//   color: 'Black'
// }
cat.saySomething(); // Myau
cat.run(15); // CAT бежит со скоростью 15.
console.log(cat.trueAge); // 70

cat.trueAge = 9;
//9
cat.trueAge;
//63
console.log(cat);
// Cat {
//   name: 'CAT',
//   age: 9,
//   type: 'mammal',
//   voice: 'Myau',
//   speed: 15,
//   color: 'Black'
// }

class Button {
  constructor(text = Button.getDefaultText(), color = Button.getDefaultColor()) {
    this.text = text;
    this.color = color;
    this.isPressed = false;
  }

  static getDefaultText() {
    return 'Click me';
  }

  static getDefaultColor() {
    return 'black';
  }

  pressButton() {
    this.isPressed = !this.isPressed;
  }
}

class SocialButton extends Button {
  constructor(text, color, icon) {
    super(text, color);
    this.icon = icon;
  }
}

const SUPERBUTTON = new SocialButton('Hello', 'blue', 'VK');
console.log(SUPERBUTTON); // SocialButton { text: 'Hello', color: 'blue', isPressed: false, icon: 'VK' }

const SUPERBUTTON_2 = new SocialButton(undefined, 'red', 'youtube');
console.log(SUPERBUTTON_2); // SocialButton {text: 'Click me', color: 'red', isPressed: false, icon:'youtube'}

SUPERBUTTON.pressButton();
console.log(SUPERBUTTON); // SocialButton { text: 'Hello', color: 'blue', isPressed: true, icon: 'VK' }
