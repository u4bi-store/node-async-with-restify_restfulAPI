var async = require('async');
var boardAPI = require('../model/board-api.js');

function create(req, res){
	async.waterfall([function(callback){
        callback(null, boardAPI.create);
	},function(arg,callback){
        var temp = { create_sql : arg};
		callback(null, temp);
	}],function(err, result){
		if(err) console.log(err);
		api(res, result);
	});	
}

function index(req, res){
	async.waterfall([function(callback){
        callback(null, boardAPI.selects);
	},function(arg,callback){
        var temp = { seletes_sql : arg};
		callback(null, temp);
	}],function(err, result){
		if(err) console.log(err);
		api(res, result);
	});	
}
function show(req, res){
	async.waterfall([function(callback){
        callback(null, boardAPI.select);
	},function(arg,callback){
        var temp = { select_sql : arg};
		callback(null, temp);
	}],function(err, result){
		if(err) console.log(err);
		api(res, result);
	});	
}
function update(req, res){
	async.waterfall([function(callback){
        callback(null, boardAPI.update);
	},function(arg,callback){
        var temp = { update_sql : arg};
		callback(null, temp);
	}],function(err, result){
		if(err) console.log(err);
		api(res, result);
	});		
}
function destory(req, res){
	async.waterfall([function(callback){
        callback(null, boardAPI.delete);
	},function(arg,callback){
        var temp = { delete_sql : arg};
		callback(null, temp);
	}],function(err, result){
		if(err) console.log(err);
		api(res, result);
	});		
}

function api(res, results){
	console.log(results);
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	res.end(JSON.stringify(results));
}
exports.create = create;
exports.index = index;
exports.show = show;
exports.update = update;
exports.destory = destory;