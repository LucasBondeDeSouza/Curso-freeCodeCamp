// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Function to add a book to the list
function add(bookList, bookName) {
    // Create a new array by concatenating the existing array with the new bookName
    return [...bookList, bookName];
}

// Function to remove a book from the list
function remove(bookList, bookName) {
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {
        // Create a new array by filtering out the bookName
        return bookList.filter((book, index) => index !== book_index);
    }
}

// Example usage:
const newBookListAfterAdd = add(bookList, "A Brief History of Time");
console.log(newBookListAfterAdd);

const newBookListAfterRemove = remove(newBookListAfterAdd, "On The Electrodynamics of Moving Bodies");
console.log(newBookListAfterRemove);

const finalBookList = remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");
console.log(finalBookList);