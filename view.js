var mustache = require("mustache"),
          fs = require('fs');


var view = {
  render: function (path, data) {
    var file = fs.readFileSync(path + '.html')
    return mustache.render(file.toString(), data)
  }
}

module.exports = view;
