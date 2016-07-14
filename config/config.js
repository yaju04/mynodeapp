var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bookrating'
    },
    port: process.env.PORT || 3000,
   // db: 'mongodb://localhost/bookrating-development'
    //db: 'mongodb://yaju04:rajyog14@ds017155.mlab.com:17155/heroku_b7xn2p3v'
    db:'mongodb://yaju04:123@ds017544.mlab.com:17544/heroku_42g4rgh4'
  }

 
};

module.exports = config[env];
