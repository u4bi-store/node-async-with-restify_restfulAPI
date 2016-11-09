var async = require('async');

function query(){
    var data;
    async.waterfall([function(callback){
        callback(null, "1");
    },function(arg,callback){
        
        var temp = { selects_sql : arg};
        callback(null, temp);
        
    }],function(err, result){
        if(err) console.log(err);
        data = result;
    });
    return data;
}

module.exports = query;