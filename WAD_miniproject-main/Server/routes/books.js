const express = require('express');
const bodyParser = require('body-parser');

const Book = require('../modals/book');

const bookRouter = express.Router();
bookRouter.use(bodyParser.json());

bookRouter.route('/')
.get((req, res, next) =>{
  Book.find({})
  .then(book => {
    res.statusCode = 200;
    res.json(book);
  }, err=>next(err))
  .catch(err=>next(err));
})

.post((req, res, next) =>{
  Book.create(req.body)
  .then(book =>{
    res.statusCode = 200;
    res.json(book);
  }, err=> next(err))
  .catch(err=>next(err));
})

.delete((req, res, next)=>{
  Book.remove({})
  .then(response =>{
    res.status = 200;
    res.json(response);
  }, err=>next(err))
  .catch(err=>next(err));
})

bookRouter.route('/:bookid')
.get((req, res, next)=>{
  Book.findById(req.params.bookid)
  .then(book =>{
    res.statusCode = 200;
    res.json(book);
  }, err=>next(err))
  .catch(err=>next(err));
})


.delete((req, res, next) => {
  Book.findByIdandRemove(req.params.bookid)
  .then(resp => {
    res.statusCode = 200;
    res.json(resp);
  }, err=>next(err))
  .catch(err=>next(err));
})
module.exports = bookRouter;

