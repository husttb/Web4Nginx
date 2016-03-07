var ConfigModule = require('./mongodb.js');
var config = require('../config/config.js');

var FindAll = ConfigModule.find({},function(error,docs){
   //若没有向find传递参数，默认的是显示所有文档
   console.log(docs);
});
