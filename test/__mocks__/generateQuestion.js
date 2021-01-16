async function createPeopleObject() {
  return Promise.resolve({
    image: 'people/4.jpg',
    answers: ['Darth Vader', 'Leia Organa', 'Beru Whitesun lars', 'Zam Wesell'],
    rightAnswer: 'Darth Vader',
  });
}

exports.createPeopleObject = createPeopleObject;