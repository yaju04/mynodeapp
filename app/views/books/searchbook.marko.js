function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      ___components_app_header_template_marko = __helpers.l(require.resolve("../components/app-header/template.marko")),
      ___components_app_footer_template_marko = __helpers.l(require.resolve("../components/app-footer/template.marko"));

  return function render(data, out) {
    ___components_app_header_template_marko.render({"title": data.title}, out);

    out.w('<head><title>Time</title><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"><script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script></head><div class="row"><div class="col-lg-5 col-sm-offset-3" id="book"><div class="well bs-component"><form class="form-horizontal" id="addForm" action="/search_new_book" method="post"><fieldset><legend>Search Book</legend><div class="form-group"><label for="bookName" class="col-lg-2 control-label">Title</label><div class="col-lg-10"><input type="text" class="form-control" id="bookTitle" placeholder="bookTitle" name="bookTitle" value></div></div><div class="form-group"><label for="author" class="col-lg-2 control-label">Author</label><div class="col-lg-10"><input type="text" class="form-control" id="author" placeholder="author" name="author" value></div></div><div class="form-group"><div class="col-lg-10 col-lg-offset-2"><button type="submit" class="btn btn-success">Submit</button></div></div></fieldset></form></div></div></div>');

    ___components_app_footer_template_marko.render({}, out);
  };
}
(module.exports = require("marko").c(__filename)).c(create);