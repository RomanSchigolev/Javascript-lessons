const array = [0, "a"];
const array2 = ["a", "b"]

const sum = (acc, val) => acc + val;

const res = array.reduce(sum);
console.log(res); // 0a

const res1 = array2.reduce(sum);
console.log(res1); // ab

const myReduce = (reducer, array, initialValue = 0) => {
  if (array.length === 0 && initialValue === null) {
    throw new TypeError('Reduce of empty array with no initial value');
  }
  let accumulatorValue = initialValue;
  for (let item = 0; item < array.length; item++) {
    const currentValue = array[item];
    accumulatorValue = reducer(accumulatorValue, currentValue);
  }
  if (typeof (accumulatorValue) === "string") {
    const result = accumulatorValue.split("");
    if (result[0] === "0") {
      result.splice(0, 1);
      return result.join("");
    } else return result.join("");
  } else return accumulatorValue;
}
const res2 = myReduce(sum, array)
console.log(res2); // a  - не правильно отрабатывает. Исправлял одно - выскочило другое

const res3 = myReduce(sum, array2);
console.log(res3); // ab