var api = require('../service/send-JSON.js');

function create(req, res){
    var userInsert = require('../model/user/insert.js');
	api(res, userInsert(req));
}

function index(req, res){
    var userSelectAll = require('../model/user/selects.js');
    api(res, userSelectAll());
}

function show(req, res){
    var userSelect = require('../model/user/select.js');
    api(res, userSelect(req));
}

function update(req, res){
    var userUpdate = require('../model/user/update.js');
    api(res, userUpdate(req));
}
function destory(req, res){
    var userDelete = require('../model/user/delete.js');
    api(res, userDelete(req));
}

exports.create = create;
exports.index = index;
exports.show = show;
exports.update = update;
exports.destory = destory;