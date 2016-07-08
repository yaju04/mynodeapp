function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      ___components_app_header_template_marko = __helpers.l(require.resolve("../components/app-header/template.marko")),
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    ___components_app_header_template_marko.render({"title": data.title}, out);

    out.w('<head><title>Time</title><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"><script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script></head><div class="container"><h2>' +
      escapeXml(data.name) +
      '</h2><table class="table-bordered"><thead>');

    if (notEmpty(data.articles)) {
      out.w('<tr><th>Book Title</th><th>Author</th><th>ISBN</th><th>Price</th><th>Average Rating</th><th> Review</th></tr>');
    }

    out.w('</thead><tbody>');

    forEach(data.articles, function(book) {
      if (notEmpty(data.articles)) {
        out.w('<tr><td>' +
          escapeXml(book.title) +
          '</td><td>' +
          escapeXml(book.author) +
          '</td><td>' +
          escapeXml(book._id) +
          '</td><td>' +
          escapeXml(book.price) +
          '</td><td>' +
          escapeXml(book.average_rating) +
          '</td><td>');

        forEach(book.reviews, function(review) {
          out.w('<span><ul><li>Name :' +
            escapeXml(review.name) +
            '</li><li>Review :' +
            escapeXml(review.review) +
            '</li><li>rating :' +
            escapeXml(review.rating) +
            '</li></ul></span>');
        });

        out.w('</td><td><a href="/addreview?title=' +
          escapeXmlAttr(book.title) +
          '&amp;id=' +
          escapeXmlAttr(book._id) +
          '&amp;author=' +
          escapeXmlAttr(book.author) +
          '&amp;price=' +
          escapeXmlAttr(book.price) +
          '" class="navbar-brand">Add Review</a></td><td><a href="/deletebook?id=' +
          escapeXmlAttr(book._id) +
          '" class="navbar-brand">Delete Book</a></td></tr>');
      }
    });

    if (data.articles.length == 0) {
      out.w('<tr>No Books Available.Add New Book.</tr>');
    }

    out.w('</tbody></table></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);