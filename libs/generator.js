var fs = require('fs');
var swig  = require('swig');
var config = require('../config/config.js');



var generator = function(res, req){
  var json = req.body;
  var template_file = config.default_template;
  var target_file_name = './tmp/default.conf';
  var content = swig.renderFile(template_file, json);
  fs.writeFile(target_file_name, content, function (err) {
    if (err) throw err;
    console.log('文件写入成功');
  });
  res.send('generate conf done!');
};

module.exports = generator;
