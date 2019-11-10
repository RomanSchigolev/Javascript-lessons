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

console.log(comUrl('google')); // https://google.com
console.log(ruUrl('yandex')); // https://yandex.ru


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

const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21];

for (var i = 0; i < fib.length; i++) {
  (function(j) {
    const handler = () => console.log(`fib[${j}] = ${fib[j]}`);
    setTimeout(handler, 2000);
  })(i)
}