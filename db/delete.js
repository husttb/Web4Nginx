var ConfigModule = require('./mongodb.js');
var config = require('../config/config.js');

var conditions = { server_name: 'test' };

ConfigModule.remove(conditions, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('Delete success!');
    }
});
