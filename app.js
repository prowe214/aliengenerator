var http = require('http'),
  fs = require('fs'),
  NodeSession = require('node-session'),
  session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'}),
  url = require('url'),
  router = require('./router');



var server = http.createServer(function (req, res) {
  session.startSession(req, res, function() {
    var path = url.parse(req.url).pathname
    var currentRoute = router.match(path)
    if (currentRoute) {
      currentRoute.fn(req, res, currentRoute)
    } else {
      res.end('404')
    }
  })
})


server.listen(8080);
