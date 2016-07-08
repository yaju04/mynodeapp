var express = require('express'),
  router = express.Router(),
  marko = require('marko'),
  mongoose = require('mongoose'),
  _und = require("underscore"),
  Book = mongoose.model('Book');

module.exports = function (app) {
  app.use('/', router);
};

var indexTemplate = marko.load(require.resolve('../views/books/index.marko'));
router.get('/', function (req, res, next) {
  Book.find(function (err, books) {
    if (err) return next(err);
    indexTemplate.render({
      $global: {locals: req.app.locals},
      title: 'Book Review Application',
      greetingName: 'Frank',
      articles: books
    }, res);
  });
});

router.get('/addbook', function (req, res, next) {
var addTemplate = marko.load(require.resolve('../views/books/addbook.marko'));
console.log("addbook");
 addTemplate.render({
      $global: {locals: req.app.locals},
    }, res);
});


router.get('/searchbook', function (req, res, next) {

var addTemplate = marko.load(require.resolve('../views/books/searchbook.marko'));
 addTemplate.render({
      $global: {locals: req.app.locals},
      title:"Search Book",
      author:req.query.author ,
       price:req.query.price ,
      id:req.query.id,
    }, res);
});

router.get('/deletebook', function (req, res, next) {
  var sarchbook={ISBN:req.query.id}
  console.log("in delete"+req.query.id);


Book.findById(req.query.id, function(err, book) {
 book.remove(function(err,doctor){

  if(err){
            res.status = 200
            res.format({
              json: function(){
                res.json({"Message": "Error removing doctor"});
              }
            })
          }
          else{
             Book.find({}, function(err, books) {

              if (err) return next(err);
              indexTemplate.render({
                $global: {locals: req.app.locals},
                title: 'Book Review Application',
                articles: books
                 }, res);
            });
            
          }

 });

});


});



router.post('/search_new_book', function (req, res, next) {
  var sarchbook={ "$or":[
         {
            "title": req.body.bookTitle
        },
        {
            "author": req.body.author
        }]
    }

Book.find(sarchbook ,function(err,books){
   if (err) return next(err);
 
 indexTemplate.render({
                $global: {locals: req.app.locals},
                title: 'Book Review Application',
                articles: books
                              }, res);
});

});



router.get('/addreview', function (req, res, next) {

var addTemplate = marko.load(require.resolve('../views/books/addreview.marko'));
 addTemplate.render({
      $global: {locals: req.app.locals},
      title:req.query.title ,
      author:req.query.author ,
       price:req.query.price ,
      id:req.query.id,
    }, res);
});

router.post('/add_new_review', function (req, res, next) {
  console.log(req.body.isbnCode+" =="+req.body.review)
Book.findById(req.body.isbnCode, function(err, book) {
       if (err)throw err;
     
        book.reviews.push({ name: req.body.reviewer_name,review:req.body.review,rating:req.body.rating });
       //book.reviews.push(req.body.reviewer_name);
         console.log("book.reviews",book.reviews);
         var temp=0;
         for(var i in book.reviews)
         {
           console.log(book.reviews[i]["rating"])
           temp=temp+ book.reviews[i]["rating"];
            
         }
       console.log("temp"+temp+"rating"+(temp/book.reviews.length));
       var avgrat=temp/book.reviews.length;
       book.average_rating=avgrat;

      //   var avg=[
      //       {$group:{
      //               _id:req.body.isbnCode,
      //               avgRating:{ $avg: req.body.rating }
      //             }
      //           }

      //        ]
      //    book.aggregate(avg,function(err, result){
      //           if(err)throw err;
      //          console.log("result",result);
      // });
 

        book.save(function(err) {
               if (err)throw err;
            Book.find({}, function(err, books) {

              if (err) return next(err);
              indexTemplate.render({
                $global: {locals: req.app.locals},
                title: 'Book Review Application',
                articles: books
                              }, res);
            });
        });
    });
});

router.post('/add_new_book', function (req, res, next) {
var addTemplate = marko.load(require.resolve('../views/books/addbook.marko'));
console.log("addbook post",req.body.bookTitle);
 var book=new Book();
 book.title=req.body.bookTitle;
 book.author=req.body.author;
 //book.ISBN=req.body.isbnCode;
 book.price=req.body.price;
// book.reviews=req.body.review;
 book.save(function(err) {
            if (err)throw err;
            Book.find({}, function(err, books) {
              if (err) return next(err);
              indexTemplate.render({
                $global: {locals: req.app.locals},
                title: 'Book Review Application',
                articles: books
                              }, res);
            });
        });
 

 
});
