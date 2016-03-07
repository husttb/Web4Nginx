var ConfigModule = require('./mongodb.js');
var config = require('../config/config.js');
var conditions = {server_name : 'test'};

var update = {$set : { listen : 16 }};

ConfigModule.update(conditions, update, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('Update success!');
    }
});
