const repeatString = function (str, num) {
    let returnStr = '';

    if (num > 0) {
        for (let i = 0; i < num; i++) {
            returnStr = str.concat(returnStr);
        }
    } else if (num < 0) {
        returnStr = 'ERROR'
    }
    return returnStr;
}

// Do not edit below this line
module.exports = repeatString;
