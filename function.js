console.log(sum1(1,2)); // 3
// Function Declaration
function sum1(a, b) {
  return a + b;
}

console.log(sum1(1,2)); // 3

//Function Expression

console.log(sum2(1, 3)); // Error

let sum2 = function(a, b) {
  return a + b;
};

console.log(sum2(1, 3)); // 4

//Named Function Expression (NFE)

let func = function sum3(a, b) {
  return a + b;
}

let func = function factorial(n){
  return n ? n * factorial(n - 1) : 1;
}

let g = func;
func = null;

console.log(g(5)); // 120
