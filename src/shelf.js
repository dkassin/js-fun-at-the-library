

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(book_name, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book_name) {
      shelf.splice(i,1)
    }
  }
}





module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
