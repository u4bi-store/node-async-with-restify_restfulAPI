var restify = require('restify');
var boardController = require('./controller/BoardController.js');

var server = restify.createServer();
server.listen(3000);
server.get("user/:name/:nation", function (req, res, next) {
    var p = req.params;
    var temp ={ name : p.name, nation : p.nation};
    console.log(JSON.stringify(temp));
});

server.post('board',boardController.create); //          생성     : POST방식 Create
server.get('board',boardController.index); //            모두 조회 : GET방식 INDEX
server.get('board/:id',boardController.show); //         특정 조회 : GET방식 Show
server.put('board/:id',boardController.update); //       특정 수정 : PUT방식 Update
server.del('board/:id',boardController.destory); //      특정 삭제 : DEL방식 Destory

console.log('server on');