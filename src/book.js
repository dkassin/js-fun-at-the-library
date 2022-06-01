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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook
  // editBook
}
