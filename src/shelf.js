

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

function listTitles(shelf) {
  var titles = [];
  for (i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  return titles.join(', ');
}

function searchShelf(shelf, title_name) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title_name) {
      return true
    }
  }
  return false
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
