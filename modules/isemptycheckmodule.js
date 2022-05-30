const emptyList = document.querySelector('#empty-list');
// check if books is empty module
const isEmpty = (bookobj) => {
  if (bookobj.books.length === 0) {
    emptyList.style.display = 'block';
  } else {
    emptyList.style.display = 'none';
  }
};

export default isEmpty;