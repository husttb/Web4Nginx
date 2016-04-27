var swig  = require('swig');
var config = require('../config/config.js');
var json = {
    "server_name": "test1"，
    "listen_port": 80，
    "upstreams": [{  //对应nginx作为LB时的upstream
      "upstream_name": "test_lb",
      "servers": [{
        "node": "10.23.134.19",
        "port": 80,
      },
      {
        "node": "10.23.134.19",
        "port": 8090,
      }
      ]
    },
    {
      "upstream_name": "hello",
      "servers": [{
        "node": "10.23.134.19",
        "port": 8070,
      },
      {
        "node": "10.23.134.19",
        "port": 8100,
      }
      ]
    }
    ],
    "createTime": "4/27/2016 21:21:55",
    "locations": [{
      "path": "/",
      "proxy_pass": "test_lb",
      "proxy_type": "http"
    },
    {
      "path": "/hello",
      "proxy_pass": "hello",
      "proxy_type": "https"
    }
    ]
}；


console.log(swig.renderFile('../templates/default.conf.tmp', json));
