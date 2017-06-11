var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ， 周杰伦，我是朴树！this is a message from lihux, enjoy your life ^_^');
}

var server = restify.createServer();
server.get('/hello/lihux', respond);

server.listen(8080, function() {
  console.log('listening at %s', server.url);
});
