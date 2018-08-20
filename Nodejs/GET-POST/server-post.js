var http = require('http');
var querystring = require('querystring');
var util=require('util');

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.number) { // 输出提交的数据
            res.write("yourName：" + body.name);
            res.write("<br>");
            res.write("number：" + body.number);
        }
        res.end();
    });
}).listen(3000);
