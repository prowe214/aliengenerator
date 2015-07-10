var routes = require('routes')(),
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
    var template = view.render('index', {})
    res.end(template)
  }
})




// routes.addRoute('/login', function (req, res, url))


routes.addRoute('/logout', function (req, resl, url) {
  req.session.flush();
  res.writeHead(302, {'Location': '/'})
  res.end()
})

routes.addRoute('/:id', function(req, res, url) {
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

routes.addRoute('/public/*', function (req, res, url) {
  console.log('hi')
  res.setHeader('Content-Type', mime.lookup(req.url))
  fs.readFile('.' + req.url, function (err, file) {
    if (err) {
      res.setHeader('Content-Type', 'text-html')
      res.end('404')
    }
    res.end(file)
  })
})

module.exports = routes
