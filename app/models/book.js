// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var reviewSchema = new mongoose.Schema({  
  name: String,
  review: String,
  rating:Number
});

var BookSchema = new Schema({
  title: { type: String, default: ''},
  author: { type: String, default: ''},
  ISBN: { type: String, default: ''},
  price: { type: Number, default: 0.0},
  reviews:[reviewSchema],
  average_rating: { type: Number, default: 0.0},
});

BookSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

var Book = module.exports = mongoose.model('Book', BookSchema);
