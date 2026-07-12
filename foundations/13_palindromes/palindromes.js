const palindromes = function (string) {
    let cleanedString = string.toLowerCase();
    cleanedString = cleanedString.replace(/[^a-z0-9]/g, "");
    return cleanedString === cleanedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
