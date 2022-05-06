const https = require('https');
const http = require('http');
const express = require("express");
const app = express();




function spider(name, a, b) {
    var i = 0;
    var aref = new Array();
    for (page = 2; page <= 5; page++) {
        https.get(a + page + b, function (res) {
            // 分段返回的 自己拼接
            var html = "";
            // 有数据产生的时候 拼接
            res.on('data', function (chunk) {
                html += chunk;
            })
            // 拼接完成
            res.on('end', function () {
                //console.log(html);
            })

            setTimeout(function () {
                //var array = html.match(/bvid":"(.*?)","title/g);
                //console.log(array);
                var reg = /arcurl":"(.*?)","aid"/g;
                var result;
                //var i = (num - 1) * 42;
                while ((result = reg.exec(html)) != null) {
                    aref[i] = result[1];
                    //console.log(aref[i]);
                    i++;
                }

            }, 1000)
        })
    }
    console.log(name + '正则匹配完毕\n');
    //num = num + 1
    //设置接口(在localhost目录下的/bvid才能接收到这段返回值)，回调函数(输入，输出，执行下一段方法(如果有下一段方法的话))
    //app.get("/Diana",function(req,res,next){
    //发送数据到前端页面
    //    var back = '<a href=' + aref[1] + '>点我开溜</a>';
    //    res.send(back);
    //})
    app.get("/" + name, function (req, res, next) {
        //发送数据到前端页面
        random = Math.floor(Math.random() * 160)
        //console.log(random + "\n")
        //console.log(aref.length + "\n")
        var acao = 'https://wx2.sinaimg.cn/mw2000/007VSXeBgy1h1kltwpq5dj307g0bqaac.jpg'
        var back = '<a href=' + aref[random] + '>点我开溜</a>' + '<img width="200"  src=' + acao + '>';
        res.send(back);
    })
}


app.listen(80, function () {
    console.log("-----后端已挂起-----");
})


var i = 0
var page = 2;
spider('Ava', 'https://api.bilibili.com/x/web-interface/search/type?__refresh__=true&_extra=&context=&page=', '&page_size=42&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=%E5%90%91%E6%99%9A&category_id=&search_type=video&dynamic_offset=30&preload=true&com2co=true')

var i = 0
var page = 2;
spider('Bella', 'https://api.bilibili.com/x/web-interface/search/type?__refresh__=true&_extra=&context=&page=', '&page_size=42&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=%E8%B4%9D%E6%8B%89&category_id=&search_type=video&dynamic_offset=30&preload=true&com2co=true')


var i = 0
var page = 2;
spider('Carol', 'https://api.bilibili.com/x/web-interface/search/type?__refresh__=true&_extra=&context=&page=', '&page_size=42&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=%E7%8F%88%E4%B9%90&category_id=&search_type=video&dynamic_offset=30&preload=true&com2co=true')


var i = 0
var page = 2;
spider('Diana', 'https://api.bilibili.com/x/web-interface/search/type?__refresh__=true&_extra=&context=&page=', '&page_size=42&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=%E5%98%89%E7%84%B6&category_id=&search_type=video&dynamic_offset=30&preload=true&com2co=true')

var i = 0
var page = 0;
spider('Eileen', 'https://api.bilibili.com/x/web-interface/search/type?__refresh__=true&_extra=&context=&page=', '&page_size=42&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=%E4%B9%83%E7%90%B3&category_id=&search_type=video&dynamic_offset=30&preload=true&com2co=true')




