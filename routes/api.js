const router = require('express').Router();
const Book = require('../models/Book.js');

router.get('/', (request, response) => {
  Book.find({})
    .then(function (data) {
      response.status(200).json(data);
    })
    .catch(function (error) {
      response.status(404).send(error.message);
    });
});

router.delete('/:id', (request, response) => {
  const mongoID = request.params.id;
  Book.deleteOne({
    _id: mongoID,
  })
    .then((data) => {
      response.status(200).end();
    })
    .catch((error) => {
      response.status(404).send(error.message);
    });
});

router.post('/', (request, response) => {
  console.log('testing!!!!!!!!!!!!!!!!');
  const bookData = request.body;
  Book.create({
    title: request.body.title,
    authors: request.body.authors,
    description: request.body.description,
    thumbnail: request.body.thumbnail,
    link: request.body.link,
    id: request.body.id,
  })
    .then(function () {
      response.status(200).end();
    })
    .catch(function (error) {
      console.log(error);
      response.status(404).send(error.message);
    });
});

module.exports = router;
