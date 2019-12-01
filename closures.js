function generateCostFunction() {
  let cost = 0;

  return function buySomething() {
    cost += 10;
    console.log(cost);
  }
}

let buyOne = generateCostFunction();
console.log(buyOne);

buyOne(); // 10
buyOne(); // 20
buyOne(); // 30
buyOne(); // 40
buyOne(); // 50

console.log('-----------------------');

let buyTwo = generateCostFunction();
console.log(buyTwo);

buyTwo(); // 10
buyTwo(); // 20
buyTwo(); // 30
buyTwo(); // 40
buyTwo(); // 50

console.log('-------------------------');

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  }
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');
const ruUrl_2 = urlGenerator('ru');

console.log(comUrl('google')); // https://google.com
console.log(ruUrl('yandex')); // https://yandex.ru
console.log(ruUrl_2('hi')); // https://hi.ru

console.log('-------------------------');

function sayHelloTo(name) {
  const message = `Hello ${name}`;

  return function () {
    console.log(message);
  }
}

const HelloElena = sayHelloTo('Elena');
const HelloOleg = sayHelloTo('Oleg');

HelloElena();
HelloOleg();

function createFrameworkManager() {
  let fw = ['React', 'Angular'];

  return {
    print() {
      console.log(fw.join(', '));
    },
    add(framework) {
      fw.unshift(framework);
    }
  }
}

let manager = createFrameworkManager();

console.log(manager);

manager.print();
manager.add('VueJs');
manager.print();

console.log('------------------------');

function createCounter() {
  let counter = 0;
  const myFunc = function () {
    counter += 1;
    return counter;
  };
  return myFunc;
}

const increment = createCounter();
console.log(increment);
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(`c1 = ${c1}`); // c1 = 1
console.log(`c2 = ${c2}`); // c2 = 2
console.log(`c3 = ${c3}`); // c3 = 3

console.log(increment()); // 4
console.log(increment()); // 5
console.log(increment()); // 6
console.log(increment()); // 7
console.log(increment()); // 8

console.log('---------------------');

const increment2 = createCounter();
console.log(increment2()); // 1
console.log(increment2()); // 2
console.log(increment2()); // 3
console.log(increment2()); // 4
console.log(increment2()); // 5

const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21];
for (var i = 0; i < fib.length; i++) {
  (function (j) {
    const handler = () => console.log(`fib[${j}] = ${fib[j]}`);
    setTimeout(handler, 1000);
  })(i)
}