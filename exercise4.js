// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
    var newList = bookList.slice();
    newList.push(bookName);
    return newList;

}

function remove(bookList, bookName) {
    var book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {
        var newArray = bookList.slice();
        newArray.splice(book_index, 1);
        return newArray;

    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);