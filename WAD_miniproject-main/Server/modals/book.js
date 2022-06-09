const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment:{
        type: String
    },
    rating:{
        type: Number
        
    }
})

const book = new Schema({
    name : {
        type : String
    },
    author:{
        type: String
    },
    description : {
        type : String
    },
    rating:{
        type: Number
    },
    image: {
        type: String
    },
    review: [reviewSchema]
})

bookSchema = mongoose.model('book', book);
module.exports = bookSchema;