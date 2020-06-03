const array = [1, 2, 3, 4, 5, 6, "hello"];
const newArrayOne = array.filter(item => item > 4);
console.log(newArrayOne); // [ 5, 6 ]

const moreThan4 = item => item > 4;

function myFilter(func, array) {
  let newArray = [];
  for (let item = 0; item < array.length; item++) {
    if (func(array[item])) {
      newArray.push(array[item]);
    }
  }
  return newArray;
}

const myFilterOnReduce = (func, array) => {
  return array.reduce((acc, item) => {
    if (func(item)) {
      acc.push(item);
    }
    return acc;
  }, [])
}

const newArrayTwo = myFilter(moreThan4, array);
console.log(newArrayTwo);


const newArrayThree = myFilterOnReduce(moreThan4, array);
console.log("On Reduce:", newArrayThree); // [ 5, 6 ]