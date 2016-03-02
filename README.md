# Web4Ngin
nginx是大家都爱用的东西。在负载均衡方面也是非常好的东西 但是它在支持0停机上线、灰度发布、金丝雀发布、A/Btest方面都还差一点点，这个项目就是提供web UI以及REST API来解决这一问题。

## 主要功能
＊ 支持web UI定义nginx.conf内的内容
＊ 支持web UI查看nginx的access.log及error.log
＊ 提供rest api及web UI重载nginx

## 环境配置
Linux: Ubuntu 14.04/Mac OS X EI Capitan
DB: mongodb-osx-x86_64-3.2.1
Language: Nodejs 5.1.0
Mid-Ware: Express 4.0+
Frontend: Angularjs 1.0

## License
[GPLV3]()