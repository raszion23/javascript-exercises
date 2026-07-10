const add = function (num1, num2) {

  let sum = num1 + num2;

  return sum;
};

const subtract = function (num1, num2) {

  let difference = num1 - num2;

  return difference;
};

const sum = function (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function (array) {
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }

  return product;
};

const power = function (base, exp) {

  return base ** exp;
};

const factorial = function (num) {

  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
