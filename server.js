var restify = require('restify');

var boardController = require('./controller/BoardController.js');
var userController = require('./controller/UserController.js');

var server = restify.createServer();
server.listen(3000);

server.post('board',boardController.create); //          게시물 생성     : POST방식 Create
server.get('board',boardController.index); //            게시물 모두 조회 : GET방식 INDEX
server.get('board/:id',boardController.show); //         특정 게시물 조회 : GET방식 Show
server.put('board/:id',boardController.update); //       특정 게시물 수정 : PUT방식 Update
server.del('board/:id',boardController.destory); //      특정 게시물 삭제 : DEL방식 Destory

server.post('user',userController.create); //            유저 생성     : POST방식 Create
server.get('users',userController.index); //             유저 모두 조회 : GET방식 INDEX
server.get('user/:id',userController.show); //           특정 유저 조회 : GET방식 Show
server.put('user/:id',userController.update); //         특정 유저 수정 : PUT방식 Update
server.del('user/:id',userController.destory); //        특정 유저 삭제 : DEL방식 Destory

console.log('server on');
