var mongoose = require('mongoose');  
var reviewSchema = new mongoose.Schema({  
  name: String,
  review: String,
  rating:Number
});
mongoose.model('Review', reviewSchema);