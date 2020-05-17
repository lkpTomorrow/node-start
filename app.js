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

app.get('/category',function (req, res) {
    res.json(
        [ {
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
        } ]
    )
})




app.get('/classinfo',function (req, res) {
    res.json(
        [ {
            "id" : 55,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-24/dHLYNEWL/OPBfeB83.jpg",
            "categoryName" : "研发设计",
            "categoryDesc" : null,
            "bpUrllist" : [ {
                "parentId" : 55,
                "productCode" : "QYMNJHNV",
                "productName" : "5555",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-04/uZiahxVO/ySUTUGHi.png"
            }, {
                "parentId" : 55,
                "productCode" : "LRFPYVZK",
                "productName" : "可阿达撒阿达",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-22/WsIyo9a0/65d6KskT.PNG"
            } ]
        }, {
            "id" : 65,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2018-10-29/HowhwlMy/dyQnUZiI.jpg",
            "categoryName" : "采购供应",
            "categoryDesc" : null,
            "bpUrllist" : [ {
                "parentId" : 65,
                "productCode" : "SX95D3P6",
                "productName" : "123",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-10/WAmub8c0/vkIiw0IP.jpg"
            } ]
        }, {
            "id" : 66,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2018-10-29/OewKGlhx/ScwAzpF5.jpg",
            "categoryName" : "生产制造",
            "categoryDesc" : null,
            "bpUrllist" : [ {
                "parentId" : 66,
                "productCode" : "VNJW85YW",
                "productName" : "云MES智能管理系统",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/8fnl55O1/PyabmrwP.jpg"
            }, {
                "parentId" : 66,
                "productCode" : "SUTFCJ6F",
                "productName" : "工业综合能源管理平台",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/gyqxEoxo/kdDp96yY.jpg"
            }, {
                "parentId" : 66,
                "productCode" : "46ADPVMN",
                "productName" : "空压机智能物联管理平台",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-04/LaCj6HRm/xQMrfZq3.jpg"
            }, {
                "parentId" : 66,
                "productCode" : "2LMU77HK",
                "productName" : "222",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-09/6GENd0m8/GWUxkrAd.jpg"
            }, {
                "parentId" : 66,
                "productCode" : "RAJDUX4N",
                "productName" : "新兴应用",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-15/M0R89yQF/KmTUmLst.png"
            }, {
                "parentId" : 66,
                "productCode" : "HLU3BJS4",
                "productName" : "电机产品",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-24/V9wlvbCf/8tGCNKpq.jpg"
            } ]
        }, {
            "id" : 67,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2018-10-29/4qiaMguP/67UWQR9Y.jpg",
            "categoryName" : "运营管理",
            "categoryDesc" : null,
            "bpUrllist" : [ {
                "parentId" : 67,
                "productCode" : "2DED8L7F",
                "productName" : "111",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-08/heMsPLu6/zOeaFvsP.jpg"
            } ]
        }, {
            "id" : 68,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2018-10-29/YIS8WYI0/7gt9KqjU.jpg",
            "categoryName" : "仓储物流",
            "categoryDesc" : null,
            "bpUrllist" : null
        }, {
            "id" : 69,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2018-10-29/0D0T5l9V/rsIvnmWV.jpg",
            "categoryName" : "售后服务",
            "categoryDesc" : null,
            "bpUrllist" : [ {
                "parentId" : 69,
                "productCode" : "NAB5RCBQ",
                "productName" : "智慧风电监控云平台",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/lbBrpVyT/xM2X9Vps.jpg"
            }, {
                "parentId" : 69,
                "productCode" : "4GUPMSYS",
                "productName" : "智能叉车管理平台",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/v8R35pJE/mRsuCCZM.jpg"
            }, {
                "parentId" : 69,
                "productCode" : "PW7YJYD2",
                "productName" : "发电机监控云平台",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/S8Q0DDrq/lXLDxMcQ.jpg"
            } ]
        }, {
            "id" : 70,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2018-10-29/LEnkZe5W/rPpGlck1.jpg",
            "categoryName" : "工业大数据",
            "categoryDesc" : null,
            "bpUrllist" : [ {
                "parentId" : 70,
                "productCode" : "TP4RCQQK",
                "productName" : "杀杀杀",
                "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-08/3fLVel3m/KV89hOIX.jpg"
            } ]
        }, {
            "id" : 160,
            "imageUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-10/KNkkprCJ/kaekUwoi.jpg",
            "categoryName" : "1112",
            "categoryDesc" : "222",
            "bpUrllist" : null
        } ]
    )
})
app.get('/query-productInfo',function (req, res) {
    res.json(
        [ {
            "id" : 71,
            "tenantId" : "49OLU08",
            "userId" : "BUWCNG08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "VNJW85YW",
            "productName" : "云MES智能管理系统",
            "productPrice" : 0,
            "productState" : 1,
            "productKeyword" : "云MES,注塑,智能管控,生产管理",
            "productSummary" : "目前的生产车间生产中普遍存在：产能分配不合理，设备利用率低；管理与生产脱节，信息滞后；设备独立运行，生产信息不同步等各类管理问题。车间的智能管控系统针对这些问题，通过物联网、大数据等技术结合工业互联网平台，为生产车间管控的自动化、信息化、智能化提供核心技术的换代升级。",
            "productDesc" : "\"云MES为企业提供制造全过程的信息化产品，主要产品为云MES平台，包括云计划、云生产、云质量、云设备等多个功能模块，支持企业\n智能制造。云MES可实现与企业的ERP、PDM等其他信息化系统进行无缝连接，也可与现场生产设备进行连接、数据采集，采用国际通用的数据总线接口，为企业的实施提供了技术保障。同时，产品内部各个模块间可实现模块化实施，针对企业特性和业务重点进行配置化实施，也为企业的快速实施提供了保障。\n生产可视化：\n订单完工进度可视化：开工状态、工序进度、完工数量；\n质量数据可视化：生产过程检验数据、合格率、故障分布图；\n设备信息可视化：设备维修进度，保养计划及进度监控；\n过程规范化：\n品质管控：在制品、成品零部件的品质管控，杜绝不合格物料进入下一工序；\n工序管控：实现加工和装配工序的工序步骤管控，确保生产质量；\n设备管理规范化：实现设备维修，保养的业务流程规范化管理；\n生产可追溯\n人员追溯：能够将产品的加工/装配/检验业务与人员和小组进行绑定追溯；\n工艺过程追溯：实现零件加工的工序流转和物料的追踪，工艺过程的追溯；\n质量信息追溯：生产过程检验信息追溯，不合格信息追溯等；\n管理精益化\n优化生产管理模式，强化过程管理和控制，实现生产智造精细化；\n提升企业人力资源素质、提高企业决策的科学性、正确性；\n人、机、料、法、环的管理精细化，提升产品品质；\n通过分析报表、帮助企业管理持续管理改进。\n \"",
            "productDateAdded" : "2019-02-18 10:30:03",
            "ProductDateApply" : null,
            "developerName" : "鹏凯1",
            "auditOpinion" : null,
            "hitCount" : 519,
            "overallMerit" : 5.0,
            "categoryId" : 74,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/8fnl55O1/PyabmrwP.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-02-18 09:58:59",
            "updateDatetime" : "2019-02-18 09:58:59",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 72,
            "tenantId" : "49OLU08",
            "userId" : "BUWCNG08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "46ADPVMN",
            "productName" : "空压机智能物联管理平台",
            "productPrice" : 0,
            "productState" : 1,
            "productKeyword" : "空压机,智能制造,能耗管控,空压机联网,智能空压机",
            "productSummary" : "空气压缩机是一种重要的工业设备,广泛应用于机械及冶金、电子电力、医药、包装、化工、食品、采矿、纺织及交通等众多工业领域，压缩机是用电大户，空压系统电能消耗占工业能耗的8~10%左右。低能耗、低污染的节能市场潜力巨大，加快淘汰落后工艺、高耗能设备压缩机市场需求趋向大型化、集成化、智能化发展",
            "productDesc" : "\"  以根云平台、物联网数据采集模块等产品为核心，为工业领域用户提供一站式行业解决方案。为工业客户解决数据采集、传输、显示、控制及大数据分析等问题，为制造业企业快速打造、部署垂直行业SaaS平台\n  基于根云工业互联网云平台基础开发的空压机物联网监控平台，为空压机设备的运维厂家及使用厂家提供监控及智慧节能方案。用户可通过PC端、手机移动端监控空压机，掌握空压机设备的实时运行参数、故障报警、保养预警等信息。同时，通过控制多台空压机协同工作，并控制整个空压机站的外围设备，如冷干机等设备，实现空压机站的节能和智慧管理。\"",
            "productDateAdded" : "2019-04-04 14:58:42",
            "ProductDateApply" : null,
            "developerName" : "鹏凯1",
            "auditOpinion" : null,
            "hitCount" : 143,
            "overallMerit" : 3.0,
            "categoryId" : 124,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-04/LaCj6HRm/xQMrfZq3.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-02-18 10:01:34",
            "updateDatetime" : "2019-02-18 10:01:34",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 76,
            "tenantId" : "49OLU08",
            "userId" : "BUWCNG08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "4GUPMSYS",
            "productName" : "智能叉车管理平台",
            "productPrice" : 0,
            "productState" : 1,
            "productKeyword" : "智能叉车,叉车运维,叉车管理,远程管理,叉车驾驶员",
            "productSummary" : "国内叉车管理普遍存在如下问题:纸质作业管理、系统孤岛化、排班不灵活、数据采集时效性差、人为干预过多、数据价值难以体现等。根云智能叉车管理平台以嵌入式技术为基础，结合无线通信技术,实现叉车系统的远程在线实时监测，可提高叉车状态信息获取的时效性与灵活性,并可为叉车的远程状态诊断、云数据服务提供基础，通过数据多维可视，进一步提升工作效率，规范安全运行，降低企业运行成本。",
            "productDesc" : "\"智能叉车管理平台通过叉车专用数据采集装置。将叉车和驾驶员的工作信息化、数据化。系统采集叉车及驾驶人员的运行时长、行走时长、负载时长以及空闲时长，并计算叉车及人员的工作效率；为厂内的叉车车队运行管理提供可靠的数据依据。\n系统还可以提供叉车开动率报表，效率报表与开动率报表结合在一起可以进一步的为工厂的车队结构，下一年的车型预测、车队数量预测提供数据依据。通过云平台的车队管理系统，实现人车绑定授权，系统记录谁在什么时间开的叉车； 安全事件实时上传；驾驶员离位时叉车熄火；管理者可以通过邮箱或收集APP 实时掌握事件信息；点检异常信息实时上传。\"",
            "productDateAdded" : "2019-02-18 10:18:11",
            "ProductDateApply" : null,
            "developerName" : "鹏凯1",
            "auditOpinion" : null,
            "hitCount" : 78,
            "overallMerit" : 0.0,
            "categoryId" : 138,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/v8R35pJE/mRsuCCZM.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-02-18 10:11:31",
            "updateDatetime" : "2019-02-18 10:11:31",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 77,
            "tenantId" : "49OLU08",
            "userId" : "BUWCNG08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "NAB5RCBQ",
            "productName" : "智慧风电监控云平台",
            "productPrice" : 0,
            "productState" : 1,
            "productKeyword" : "风电管理,风电运维,远程管理,智慧风电",
            "productSummary" : "\"  风电管理面临大量的挑战，风电场运营决策涉及设备健康、外部环境、人员等各类模型，缺少对数据的挖掘、分析，无法为决策提供有效支持，每个风机系统部件都有可能因多种原因发生多种故障\n  根云为智慧风电业务赋能，智慧风电监控云平台，帮助风力发电行业实现数据驱动业务发展，面向风电建设运营管理全周期，聚焦多维大数据分析应用，对风电场数据实时采集、传输、存储、告警、监视与控制、指标与报表分析、故障诊断等功能，实时掌握现场运行信息。\"",
            "productDesc" : "\"  智慧风电监控云平台以风机设备为核心，构建运维管理系统，系统包含设备管理、运行管理、工单管理、运维管理、故障管理、缺陷管理、物资管理等。实现设备从安装到运行、检修、报废全生命周期管理。\n   构建实时监视中心系统，具备对风电场数据实时采集、传输、存储、告警、报表分析等功能，实时掌握现场运行信息。\n  通过建立故障诊断系统，通过故障诊断模型的建立，指导检修人员进行故障处理，建立故障诊断知识库，提供一个风电机组故障诊断资料检索、学习维修的服务窗口\n  构建故障预警系统，采用机器学习、智能算法处理和分析分钟级、秒级风机事件和传感数据。并将预警数据发送给现场人员， 通过提前更换将要损坏的部件，避免小故障演变为更严重故障的发生。\n  通过对生产、运维信息的分析和挖掘，找到设备可利用率低的原因，为设备的优化提供数据支持，为提高企业的经济效益提供可靠意见。\"",
            "productDateAdded" : "2019-02-18 10:18:08",
            "ProductDateApply" : null,
            "developerName" : "鹏凯1",
            "auditOpinion" : null,
            "hitCount" : 19,
            "overallMerit" : 0.0,
            "categoryId" : 138,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-02-18/lbBrpVyT/xM2X9Vps.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-02-18 10:13:54",
            "updateDatetime" : "2019-02-18 10:13:54",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 113,
            "tenantId" : "-1",
            "userId" : "1",
            "label" : null,
            "productImageId" : null,
            "productCode" : "2LMU77HK",
            "productName" : "222",
            "productPrice" : 222,
            "productState" : 1,
            "productKeyword" : "222",
            "productSummary" : "3333",
            "productDesc" : "322123",
            "productDateAdded" : "2019-04-10 10:18:05",
            "ProductDateApply" : null,
            "developerName" : "管理员租户",
            "auditOpinion" : null,
            "hitCount" : 18,
            "overallMerit" : 0.0,
            "categoryId" : 76,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-09/6GENd0m8/GWUxkrAd.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-09 14:47:32",
            "updateDatetime" : "2019-04-09 14:47:32",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 197,
            "tenantId" : "49OLU18",
            "userId" : "BUWCOE08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "HLU3BJS4",
            "productName" : "电机产品",
            "productPrice" : 5000,
            "productState" : 1,
            "productKeyword" : "电机产品",
            "productSummary" : "ddddddd",
            "productDesc" : "ddddd",
            "productDateAdded" : "2019-05-06 16:49:36",
            "ProductDateApply" : null,
            "developerName" : "鹏凯2",
            "auditOpinion" : null,
            "hitCount" : 13,
            "overallMerit" : 0.0,
            "categoryId" : 123,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-24/V9wlvbCf/8tGCNKpq.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-24 21:21:02",
            "updateDatetime" : "2019-04-24 21:21:02",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        } ]
    )
})

app.get('/query-newProduct',function (req, res) {
    res.json(
        [ {
            "id" : 197,
            "tenantId" : "49OLU18",
            "userId" : "BUWCOE08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "HLU3BJS4",
            "productName" : "电机产品",
            "productPrice" : 5000,
            "productState" : 1,
            "productKeyword" : "电机产品",
            "productSummary" : "ddddddd",
            "productDesc" : "ddddd",
            "productDateAdded" : "2019-05-06 16:49:36",
            "ProductDateApply" : null,
            "developerName" : "鹏凯2",
            "auditOpinion" : null,
            "hitCount" : 13,
            "overallMerit" : 0.0,
            "categoryId" : 123,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-24/V9wlvbCf/8tGCNKpq.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-24 21:21:02",
            "updateDatetime" : "2019-04-24 21:21:02",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 186,
            "tenantId" : "49OLU18",
            "userId" : "BUWCOE08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "RAJDUX4N",
            "productName" : "新兴应用",
            "productPrice" : 30,
            "productState" : 1,
            "productKeyword" : "xydem",
            "productSummary" : "的说法",
            "productDesc" : "新型应用",
            "productDateAdded" : "2019-04-25 10:39:15",
            "ProductDateApply" : null,
            "developerName" : "鹏凯2",
            "auditOpinion" : null,
            "hitCount" : 1,
            "overallMerit" : 0.0,
            "categoryId" : 74,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-15/M0R89yQF/KmTUmLst.png",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-15 17:14:13",
            "updateDatetime" : "2019-04-15 17:14:13",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 190,
            "tenantId" : "49OLU18",
            "userId" : "BUWCOE08",
            "label" : null,
            "productImageId" : null,
            "productCode" : "LRFPYVZK",
            "productName" : "可阿达撒阿达",
            "productPrice" : 0,
            "productState" : 1,
            "productKeyword" : "sdfa",
            "productSummary" : "ceshi",
            "productDesc" : "",
            "productDateAdded" : "2019-04-25 01:50:03",
            "ProductDateApply" : null,
            "developerName" : "鹏凯2",
            "auditOpinion" : null,
            "hitCount" : 2,
            "overallMerit" : 0.0,
            "categoryId" : 56,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-22/WsIyo9a0/65d6KskT.PNG",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-22 11:02:45",
            "updateDatetime" : "2019-04-22 11:02:45",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 113,
            "tenantId" : "-1",
            "userId" : "1",
            "label" : null,
            "productImageId" : null,
            "productCode" : "2LMU77HK",
            "productName" : "222",
            "productPrice" : 222,
            "productState" : 1,
            "productKeyword" : "222",
            "productSummary" : "3333",
            "productDesc" : "322123",
            "productDateAdded" : "2019-04-10 10:18:05",
            "ProductDateApply" : null,
            "developerName" : "管理员租户",
            "auditOpinion" : null,
            "hitCount" : 18,
            "overallMerit" : 0.0,
            "categoryId" : 76,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-09/6GENd0m8/GWUxkrAd.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-09 14:47:32",
            "updateDatetime" : "2019-04-09 14:47:32",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 101,
            "tenantId" : "-1",
            "userId" : "1",
            "label" : null,
            "productImageId" : null,
            "productCode" : "2DED8L7F",
            "productName" : "111",
            "productPrice" : 0,
            "productState" : 1,
            "productKeyword" : "222",
            "productSummary" : "122",
            "productDesc" : "23333333333333333333333",
            "productDateAdded" : "2019-04-10 10:17:46",
            "ProductDateApply" : null,
            "developerName" : "管理员租户",
            "auditOpinion" : null,
            "hitCount" : 8,
            "overallMerit" : 5.0,
            "categoryId" : 127,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-08/heMsPLu6/zOeaFvsP.jpg",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-08 15:09:10",
            "updateDatetime" : "2019-04-08 15:09:10",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        }, {
            "id" : 99,
            "tenantId" : "-1",
            "userId" : "1",
            "label" : null,
            "productImageId" : null,
            "productCode" : "QYMNJHNV",
            "productName" : "5555",
            "productPrice" : 0,
            "productState" : 1,
            "productKeyword" : "t",
            "productSummary" : "",
            "productDesc" : "",
            "productDateAdded" : "2019-04-10 10:17:36",
            "ProductDateApply" : null,
            "developerName" : "test0416",
            "auditOpinion" : null,
            "hitCount" : 12,
            "overallMerit" : 0.0,
            "categoryId" : 56,
            "productCoverUrl" : "http://basefmtest-1252579942.cos.ap-beijing.myqcloud.com/marketplace/2019-04-04/uZiahxVO/ySUTUGHi.png",
            "deleteFlag" : 1,
            "createDatetime" : "2019-04-04 16:27:05",
            "updateDatetime" : "2019-04-04 16:27:05",
            "sourceType" : null,
            "isFirstApply" : null,
            "productDateApply" : null
        } ]
    )
})

















app.listen(3000,'127.0.0.1');
// app.listen(3000, () => console.log('Example app listening on port 3000!'))