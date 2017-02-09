var async = require('async');

function query(req){
    var data;
    async.waterfall([function(callback){
        callback(null, "1");
    },function(arg,callback){
        
        var p = req.params;
        var temp = { delete_sql : arg+' '+p.id};
        callback(null, temp);
		
    }],function(err, result){
        if(err) console.log(err);
        data = result;
    });
    return data;
}

module.exports = query;