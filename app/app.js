var restify = require('restify');

//V1:since 20170611
function respondV1HelloWorld(req, res, next) {
  res.send('hello ， 周杰伦，我是朴树！this is a message from lihux, enjoy your life ^_^');
}

function respondV1UpdateServer(req, res, next) {
	require("child_process").execFile('/home/ec2-user/restify/updateServer.sh', nil, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
});
  res.send('服务端已经成功更新上线');
}

function respondV1HelloWorld(req, res, next) {
  res.send('hello ， I love you!');
}

//createServer
var server = restify.createServer();
var v1 = '/accumulates/v1'

server.get(v1 + '/hello/lihux', respondV1HelloWorld);
server.get(v1 + '/updateServer', respondV1UpdateServer);
//server.get(v1 + '/love', respondV1Love);



server.listen(1113, function() {
  console.log('listening at %s', server.url);
});
