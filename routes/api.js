const router = require("express").Router();
const Book = require("../models/Book.js");

router.get("/api/saved-books", (request, response) => {
    Book.find({})
      .then(function (data) {
        response.status(200).json(data);
      })
      .catch(function () {
        response.status(404);
      });
  });
  
  router.delete("/api/books/:id", (request, response) => {
    const mongoID = request.params.id;
    Book.remove({
      _id: mongoID,
    })
      .then((data) => {
        response.status(200);
      })
      .catch((error) => {
        response.status(404).send(error.message);
      });
  });
  
  router.post("/api/books", (request, response) => {
    const bookData = request.body;
    Book.create(bookData)
      .then(function () {
        response.status(200);
      })
      .catch(function (error) {
        response.status(404).send(error.message);
      });
  });

  module.exports = router;