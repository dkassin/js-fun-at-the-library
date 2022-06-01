function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns ) {
  return {
    name,
    age,
    pronouns
  }
}

function saveReview(review, reviews) {
  if (reviews.includes(review)){
    return review;
  } else {
    reviews.push(review);
    return reviews;
  }
}

function calculatePageCount(title) {
  var pageCount = 20 * title.length;
  return pageCount;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
