const getTheTitles = function(booksObj) {
    const bookTitles = booksObj.map(book => book.title);
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
