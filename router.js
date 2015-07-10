var routes = require('routes'),
      db = require('monk')('localhost/aliens'),
      aliens = db.get('aliens'),
      fs = require('fs'),
      qs = require('qs'),
      db = require('monk')('localhost/space'),
      aliens = db.get('aliens'),
      view = require('./view'),
      mime = require('mime');

routes.addRoute('/', function (req, res, url) {
  res.setHeader('Content-Type', 'text/html');
  if (req.method === 'GET') {
    var template = view.render('/index', {})
    res.end(template)
  }
})


routes.addRoute('/admin', function(req, res, url) {
  if (req.session.get('email')) {
    var template = view.render('/show', {})
    res.end(template)
  }
  else {
    req.session.flush();
    res.writeHead(302, {'Location': '/'})
    res.end()
  }
})
