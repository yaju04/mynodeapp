function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>' +
      escapeXml(data.title) +
      '</title><link rel="stylesheet" href="/css/style.css"></head><div class="container main-container"><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"></div><a href="/addbook" class="navbar-brand">Add Book</a><a href="/searchbook" class="navbar-brand">Search Book</a></div></div></div><body></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);