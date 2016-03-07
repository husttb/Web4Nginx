'use strict';
var mongoose = require('mongoose');    //引用mongoose模块
var config = require('./../config/config.js');
var mongodb_uri = "mongodb://" + config.mongoDB + ":" + config.mongoPort + "/" + config.mongoCollection;
var db = mongoose.connect(mongodb_uri);

db.connection.on("error", function (error) {
    console.log("CONNECT TO " + mongodb_uri + " FAILED: " + error);
});
db.connection.on("open", function () {
    console.log("CONNECT TO " + mongodb_uri + " SUCCESS!");
});


var ConfigSchema = new mongoose.Schema({
    server_name : { type: String },//对应nginx default.conf中的server_name
    listen  : { type: Number, default: 80 },//对应nginx default.conf中的listen,类型为Number,默认为0
    upstream : [{  //对应nginx作为LB时的upstream
      upstream_name : { type: String },
      server : { type: String },
      port : { type: Number, default: 80 },
    }],
    createTime : { type: Date, default: Date.now },
    location : [{
      path: { type: String, default:'/'},
      proxy_pass: { type: String },
    }]
});

var ConfigModule = db.model(config.mongoCollection, ConfigSchema);

module.exports = ConfigModule;
