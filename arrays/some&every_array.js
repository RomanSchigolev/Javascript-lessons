const array = [1, 2, 3, -4, 5, 6, 5];
const isEqual5 = item => item === 5;
const newArrayOne = array.some(isEqual5);
console.log(newArrayOne); // true

function mySome(func, array) {
  for (let item = 0; item < array.length; item++) {
    if (func(array[item])) {
      return true;
    }
  }
  return false;
}

const newArrayTwo = mySome(isEqual5, array);
console.log(newArrayTwo); // true


const positiveNumber = item => item > 0
const newArrayThree = array.every(positiveNumber);
console.log(newArrayThree); // false

function myEvery(func, array) {
  for (let item = 0; item < array.length; item++) {
    if (!func(array[item])) {
      return false;
    }
  }
  return true;
}

const newArrayFour = myEvery(positiveNumber, array);
console.log(newArrayFour); // false
