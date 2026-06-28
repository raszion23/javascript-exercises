const sumAll = function (num1, num2) {
    if (!Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 <= 0 ||
        num2 <= 0) {
        return 'ERROR';
    }

    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let sum = 0;

    if (min <= 0) {
        return 'ERROR';
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

console.log(sumAll(-9, 14));

// Do not edit below this line
module.exports = sumAll;
