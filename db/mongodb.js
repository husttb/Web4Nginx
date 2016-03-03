var mongoose = require('mongoose');    //引用mongoose模块
var config = require('./../config/config.js');
var mongodb_uri = "mongodb://" + config.mongoDB + ":" + config.mongoPort + "/" + config.mongoCollection
console.log(mongodb_uri);
var db = mongoose.connect(mongodb_uri);

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});
