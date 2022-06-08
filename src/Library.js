function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return(library);
}

function addBook(library, book) {
  // var genre = book.genre;
  // var shelf = library.shelves[genre];
  // shelf.push(book)
  // }
  // Combines the three lines into one
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, book_title, genre) {
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === book_title) {
      library.shelves[genre].splice(i,1)
      return `You have now checked out ${book_title} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${book_title} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
