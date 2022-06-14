class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.greetPatron = function (name, time_of_day) {
      if (time_of_day === true) {
        return `Good morning, ${name}!`
      }
      return `Hello, ${name}!`
    }
    this.findBook = function (book_title) {
      var avail_books = Object.values(this.library.shelves).flat();
      for ( var i = 0; i < avail_books.length; i++) {
        if (avail_books[i].title === book_title) {
          return `Yes, we have ${book_title}`
        }
        else {
          return `Sorry, we do not have ${book_title}`
        }
      }
    }
  }
}

module.exports = Librarian;
