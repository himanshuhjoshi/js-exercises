const palindromes = function (str) {
    const cleanedString = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
    const reverseredString = cleanedString.split('').reverse().join('').toLowerCase();
    return cleanedString === reverseredString;
};

// Do not edit below this line
module.exports = palindromes;
