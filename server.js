var restify = require('restify');
var server = restify.createServer();

var contentType = {'Content-Type': 'application/json; charset=utf-8'};
server.listen(3000);

server.get("user/:name/:nation", function (req, res, next) {
	var p = req.params;
	var temp ={ name : p.name, nation : p.nation};
	
	res.writeHead(200, contentType);
	res.end(JSON.stringify(temp));
	return next();
});

console.log('server on');