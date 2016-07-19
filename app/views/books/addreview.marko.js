function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      ___components_app_header_template_marko = __helpers.l(require.resolve("../components/app-header/template.marko")),
      attr = __helpers.a,
      ___components_app_footer_template_marko = __helpers.l(require.resolve("../components/app-footer/template.marko"));

  return function render(data, out) {
    ___components_app_header_template_marko.render({"title": data.title}, out);

    out.w('<head><link rel="stylesheet" href="/../../../../css/application.css"></head><div class="row"><div class="col-lg-5 col-sm-offset-3" id="book"><div class="well bs-component"><form class="form-horizontal" id="addForm" action="/add_new_review" method="post"><fieldset><legend>New Book</legend><div class="form-group"><label for="bookName" class="col-lg-2 control-label">Title</label><div class="col-lg-10"><input type="text" class="form-control" id="bookTitle" placeholder="bookTitle" name="bookTitle"' +
      attr("value", data.title) +
      ' required></div></div><div class="form-group"><label for="author" class="col-lg-2 control-label">Author</label><div class="col-lg-10"><input type="text" class="form-control" id="author" placeholder="author" name="author"' +
      attr("value", data.author) +
      ' required></div></div><div class="form-group"><label for="isbncode" class="col-lg-2 control-label">isbnCode</label><div class="col-lg-10"><input type="isbnCode" class="form-control" id="isbnCode" placeholder="isbnCode" name="isbnCode"' +
      attr("value", data.id) +
      ' required></div></div><div class="form-group"><label for="price" class="col-lg-2 control-label">price</label><div class="col-lg-10 chooseGroupUser"><input type="number" class="form-control" id="price" placeholder="price" name="price"' +
      attr("value", data.price) +
      ' required></div></div><div class="form-group"><label for="Review"> Add Your Review :</label><div class="col-lg-10 chooseGroupUser"><label for="review" class=" control-label">Name : </label><input type="text" class="form-control" id="reviewer_name" placeholder="reviewer_name" name="reviewer_name" value required><label for="review" class="control-label"> Review : </label><input type="text" class="form-control" id="review" placeholder="review" name="review" value required><label for="review" class="control-label"> Rating : </label><input type="number" class="form-control" id="rating" placeholder="rating" min="0" max="10" name="rating" value required></div><div class="form-group"><div class="col-lg-10 col-lg-offset-2"><button type="submit" class="btn btn-success">Submit</button></div></div></div></fieldset></form></div></div></div>');

    ___components_app_footer_template_marko.render({}, out);
  };
}
(module.exports = require("marko").c(__filename)).c(create);