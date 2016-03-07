'use strict';
var ConfigModule = require('./mongodb.js');
var config = require('../config/config.js');
var moment = require('moment');
var now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

var ConfigEntity = new ConfigModule({
  "server_name" : "test",
  "listen" : 80,
  "upstream" : {
    "upstream_name":"test_1",
    "server" : "192.168.7.1",
    "port" : 80
  },
  "createTime" : now,
  "location" : [
  {
    "path" : "/",
    "proxy_pass" : "192,199.33.1"
  }
  ]
});

ConfigEntity.save(function(error,doc){
  if(error) {
     console.log("error :" + error);
  } else {
     console.log("[" + now + "]" + "INSERT SUCCESS!");
  }
});
