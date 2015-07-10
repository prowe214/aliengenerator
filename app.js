var http = require('http'),
  fs = require('fs'),
  NodeSession = require('node-session'),
  session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'}),
  router = ('.router');

var server = http.createServer(function (req, res) {
  session.startSession(req, res, function () {
    req.session.put('email', 'link@example.com')
    var template = fs.readFileSync('./index.html')
    res.setHeader('Set-Cookie', ["type=alien", "language=javascript"])
    res.end(template)
  })

})

server.listen(8080);
