var mongoose = require('mongoose');    //引用mongoose模块
var config = require('./../config/config.js');
var mongodb_uri = "mongodb://" + config.mongoDB + ":" + config.mongoPort + "/" + config.mongoCollection
var db = mongoose.connect(mongodb_uri);

db.connection.on("error", function (error) {
    console.log("CONNECT TO " + mongodb_uri + " FAILED: " + error);
});
db.connection.on("open", function () {
    console.log("CONNECT TO " + mongodb_uri + " SUCCESS!" );
});
