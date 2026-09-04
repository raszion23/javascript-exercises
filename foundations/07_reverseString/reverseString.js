const reverseString = function (str) {
    const arr = str.split('');
    let newArr = arr.reverse();
    return newArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
