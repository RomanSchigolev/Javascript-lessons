const array = [1, 2, 3, 4, 5];
const powTwo = item => item ** 2;

const newArrayOne = array.map(powTwo);
console.log(newArrayOne); // [ 1, 4, 9, 16, 25 ]

function myMap(func, array) {
  let newArray = [];
  for (let item = 0; item < array.length; item++) {
    newArray.push(func(array[item]));
  }
  return newArray;
}

const myMapOnReduce = (func, array) => {
  return array.reduce((acc, item) => {
    acc.push(func(item));
    return acc;
  }, [])
}

const newArrayTwo = myMap(powTwo, array);
console.log(newArrayTwo); // [ 1, 4, 9, 16, 25 ]

const newArrayThree = myMapOnReduce(powTwo, array);
console.log("On Reduce:", newArrayThree); // [ 1, 4, 9, 16, 25 ]

const frameworks = myMap(framework => framework.slice(0, 5), ['Knockout', 'Backbone', 'Angular']);
console.log(frameworks); // ["Knock","Backb","Angul"]

