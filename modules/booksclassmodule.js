import generateBooks from "./generatebooksmodules.js";

const title = document.querySelector('#title');
const author = document.querySelector('#author');
// object class
class BooksTemplate {
  books = [];

  check() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  // methods
  // add book modules
  addBook() {
    const book = {
      author: author.value,
      title: title.value,
      id: Date.now(),
    };
    this.check();
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    generateBooks(book);
  }

  // remove book modules
  removeBook(removedBotton) {
    const removedBook = removedBotton.parentElement;
    const removedBookarr = this.books.filter((book) => book.id === Number(removedBotton.id));
    this.books.splice(this.books.indexOf(removedBookarr[0]), 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    removedBook.remove();
  }
}

export default BooksTemplate;