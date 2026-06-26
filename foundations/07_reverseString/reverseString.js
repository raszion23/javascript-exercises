const reverseString = function (str) {
    const arr = str.split('');
    let newArr = arr.reverse();
    return newArr.join('');
};

console.log(reverseString('Hello'));

// Do not edit below this line
module.exports = reverseString;
