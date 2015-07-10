var routes = require('routes'),
      db = require('monk')('localhost/aliens'),
      aliens = db.get('aliens'),
      fs = require('fs'),
      qs = require('qs'),
      mime = require('mime'),
      view = require('./view')
