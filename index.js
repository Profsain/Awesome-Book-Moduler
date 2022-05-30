import BooksTemplate from "./modules/booksclassmodule.js";
import generateBooks from "./modules/generatebooksmodules.js";
import isEmpty from "./modules/isemptycheckmodule.js";
import setDateTime from "./modules/datetimemodule.js";

const bookSection = document.querySelector('.book-section');
const form = document.querySelector('#add-form');
const bookListSection = document.querySelector('#book-list');
const formSection = document.querySelector('#form-section');
const contactSection = document.querySelector('#contact');
const formLink = document.querySelector('#form-link');
const bookLink = document.querySelector('#book-link');
const contactLink = document.querySelector('#contact-link');

const bookObj = new BooksTemplate();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    bookObj.addBook();
    form.reset();
  }
});

bookSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const removedBotton = e.target;
    bookObj.removeBook(removedBotton);
    isEmpty(bookObj);
  }
});

bookObj.check();
bookObj.books.forEach(generateBooks);
isEmpty(bookObj);

bookLink.addEventListener('click', (e) => {
  e.preventDefault();
  bookListSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
  isEmpty(bookObj);
  bookLink.classList.add('active');
  formLink.classList.remove('active');
  contactLink.classList.remove('active');
});

formLink.addEventListener('click', (e) => {
  e.preventDefault();
  bookListSection.style.display = 'none';
  formSection.style.display = 'block';
  contactSection.style.display = 'none';
  formLink.classList.add('active');
  bookLink.classList.remove('active');
  contactLink.classList.remove('active');
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  bookListSection.style.display = 'none';
  formSection.style.display = 'none';
  contactSection.style.display = 'block';
  contactLink.classList.add('active');
  formLink.classList.remove('active');
  bookLink.classList.remove('active');
});

// update dateTime is 1 minute interval
setInterval(setDateTime, 1000)