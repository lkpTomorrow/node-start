const express = require('express')
const app = express()


//引入插件包，解决post请求参数问题
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*express允许跨域*/

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);
    else  next();
});
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/news',function(req,res){

	//console.log(req.body);
	res.jsonp({"msg":'这是新闻数据333'});

})
app.post('/dologin',function(req,res){

	console.log(req.body);

 	res.json({"msg":'post成功'});



})


// 产品中心下拉

app.get('/nav',function (req, res) {
    res.json([ {
        "id" : 55,
        "categoryName" : "研发设计",
        "parentId" : 0,
        "count" : 2,
        "childs" : [ {
            "id" : 56,
            "categoryName" : "CAD",
            "parentId" : 55,
            "count" : 2,
            "childs" : null
        }, {
            "id" : 61,
            "categoryName" : "CAPP",
            "parentId" : 55,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 62,
            "categoryName" : "CAE",
            "parentId" : 55,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 63,
            "categoryName" : "PDM/PLM",
            "parentId" : 55,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 64,
            "categoryName" : "仿真设计",
            "parentId" : 55,
            "count" : 0,
            "childs" : null
        } ]
    }, {
        "id" : 65,
        "categoryName" : "采购供应",
        "parentId" : 0,
        "count" : 1,
        "childs" : [ {
            "id" : 72,
            "categoryName" : "供应协同",
            "parentId" : 65,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 73,
            "categoryName" : "供应链管理",
            "parentId" : 65,
            "count" : 1,
            "childs" : null
        }, {
            "id" : 120,
            "categoryName" : "云供应链",
            "parentId" : 65,
            "count" : 0,
            "childs" : null
        } ]
    }, {
        "id" : 66,
        "categoryName" : "生产制造",
        "parentId" : 0,
        "count" : 6,
        "childs" : [ {
            "id" : 74,
            "categoryName" : "MES",
            "parentId" : 66,
            "count" : 2,
            "childs" : null
        }, {
            "id" : 75,
            "categoryName" : "DNC",
            "parentId" : 66,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 76,
            "categoryName" : "MDC",
            "parentId" : 66,
            "count" : 1,
            "childs" : null
        }, {
            "id" : 121,
            "categoryName" : "工具管理",
            "parentId" : 66,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 122,
            "categoryName" : "计划排查",
            "parentId" : 66,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 123,
            "categoryName" : "生产管理",
            "parentId" : 66,
            "count" : 1,
            "childs" : null
        }, {
            "id" : 124,
            "categoryName" : "制造管理",
            "parentId" : 66,
            "count" : 2,
            "childs" : null
        }, {
            "id" : 125,
            "categoryName" : "质量管理",
            "parentId" : 66,
            "count" : 0,
            "childs" : null
        } ]
    }, {
        "id" : 67,
        "categoryName" : "运营管理",
        "parentId" : 0,
        "count" : 1,
        "childs" : [ {
            "id" : 77,
            "categoryName" : "进销存",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 78,
            "categoryName" : "客户关系管理",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 126,
            "categoryName" : "ERP",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 127,
            "categoryName" : "财务管理",
            "parentId" : 67,
            "count" : 1,
            "childs" : null
        }, {
            "id" : 128,
            "categoryName" : "人力资源管理",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 129,
            "categoryName" : "协同办公",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 130,
            "categoryName" : "渠道管理",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 131,
            "categoryName" : "销售管理",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 133,
            "categoryName" : "移动办公",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 134,
            "categoryName" : "管理机器人",
            "parentId" : 67,
            "count" : 0,
            "childs" : null
        } ]
    }, {
        "id" : 68,
        "categoryName" : "仓储物流",
        "parentId" : 0,
        "count" : 0,
        "childs" : [ {
            "id" : 135,
            "categoryName" : "进销存",
            "parentId" : 68,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 136,
            "categoryName" : "智能物流",
            "parentId" : 68,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 137,
            "categoryName" : "仓库管理",
            "parentId" : 68,
            "count" : 0,
            "childs" : null
        } ]
    }, {
        "id" : 69,
        "categoryName" : "售后服务",
        "parentId" : 0,
        "count" : 3,
        "childs" : [ {
            "id" : 138,
            "categoryName" : "远程运维服务",
            "parentId" : 69,
            "count" : 3,
            "childs" : null
        }, {
            "id" : 139,
            "categoryName" : "安全与运维",
            "parentId" : 69,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 140,
            "categoryName" : "行业应用",
            "parentId" : 69,
            "count" : 0,
            "childs" : null
        } ]
    }, {
        "id" : 70,
        "categoryName" : "工业大数据",
        "parentId" : 0,
        "count" : 1,
        "childs" : [ {
            "id" : 71,
            "categoryName" : "数据挖掘",
            "parentId" : 70,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 142,
            "categoryName" : "数据分析",
            "parentId" : 70,
            "count" : 0,
            "childs" : null
        }, {
            "id" : 143,
            "categoryName" : "数据展示",
            "parentId" : 70,
            "count" : 1,
            "childs" : null
        } ]
    }, {
        "id" : 160,
        "categoryName" : "1112",
        "parentId" : 0,
        "count" : 0,
        "childs" : [ {
            "id" : 161,
            "categoryName" : "222",
            "parentId" : 160,
            "count" : 0,
            "childs" : null
        } ]
    } ])
})





















app.listen(3000,'127.0.0.1');
// app.listen(3000, () => console.log('Example app listening on port 3000!'))