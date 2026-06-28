const removeFromArray = function (array, ...itemsToRemove) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentItem = array[i];

        if (!itemsToRemove.includes(currentItem)) {
            result.push(currentItem);
        }
    }

    return result;

    // if (!Array.isArray(arr) && typeof arr !== "string") {
    //     return 'Not an array or string';
    // }


};

console.log(removeFromArray([1, 2, 2, 3, 4], 2, 'dog'));

// Do not edit below this line
module.exports = removeFromArray;
