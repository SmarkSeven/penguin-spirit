// @ts-check
/**
 * 登录
 * @param {string} phone
 * @param {string} password
 * @returns {Promise}
 */
export async function signIn (phone, password) {
  return {
    'code': 0,
    'msg': '操作成功',
    'data': {
      'id': 3,
      'nickName': 'qe_080517_52076',
      'credit': 1119,
      'deviceId': '861735033539825',
      'androidId': '79e56675ae22497a',
      'inviteCode': '3P5SZNW',
      'phone': '18566632508',
      'password': 'e10adc3949ba59abbe56e057f20f883e',
      'phoneVarifyStatus': 1,
      'status': 0,
      'type': 0,
      'createAt': 1501862400000,
      'updateAt': 1501862400000,
      'parent': null,
      'qq': null,
      'tel': null,
      'address': null,
      'phoneVarifyStatusStr': '验证成功',
      'typeStr': '普通用户',
      'statusStr': '启用'
    }
  }
}

/**
 * 商品归类
 */
export async function getCategoryList () {
  return {
    'code': 0,
    'msg': '操作成功',
    'data': [
      {
        'id': 1,
        'name': '【官方自营】空间业务',
        'status': 0,
        'createAt': 1501862400000,
        'updateAt': 1501862400000,
        'categoryList': [
          {
            'id': 1,
            'name': '名片赞',
            'status': 0,
            'createAt': 1501862400000,
            'updateAt': 1501862400000
          },
          {
            'id': 2,
            'name': '空间人气',
            'status': 0,
            'createAt': 1501862400000,
            'updateAt': 1501862400000
          },
          {
            'id': 3,
            'name': '全名K歌',
            'status': 0,
            'createAt': 1501862400000,
            'updateAt': 1501862400000
          },
          {
            'id': 4,
            'name': '快手',
            'status': 0,
            'createAt': 1501862400000,
            'updateAt': 1501862400000
          },
          {
            'id': 5,
            'name': '空间留言',
            'status': 0,
            'createAt': 1501862400000,
            'updateAt': 1501862400000
          },
          {
            'id': 6,
            'name': '说说赞',
            'status': 0,
            'createAt': 1501862400000,
            'updateAt': 1501862400000
          }
        ]
      },
      {
        'id': 2,
        'name': 'QQ钻竞价区',
        'status': 0,
        'createAt': 1501948800000,
        'updateAt': 1502862453000,
        'categoryList': [
          {
            'id': 7,
            'name': '王阿斗专区',
            'status': 0,
            'createAt': 1501948800000,
            'updateAt': 1502121600000
          },
          {
            'id': 9,
            'name': '超已专区',
            'status': 0,
            'createAt': 1502214097000,
            'updateAt': 1502214097000
          },
          {
            'id': 22,
            'name': '最稳HQ 专区',
            'status': 0,
            'createAt': 1502608474000,
            'updateAt': 1507020765000
          },
          {
            'id': 27,
            'name': '一杰专区',
            'status': 0,
            'createAt': 1503904813000,
            'updateAt': 1503904813000
          },
          {
            'id': 28,
            'name': '霸主专区',
            'status': 0,
            'createAt': 1503975741000,
            'updateAt': 1507018992000
          },
          {
            'id': 62,
            'name': '魂师专区',
            'status': 0,
            'createAt': 1507554150000,
            'updateAt': 1507554150000
          }
        ]
      },
      {
        'id': 3,
        'name': '代挂竞价区',
        'status': 0,
        'createAt': 1502121600000,
        'updateAt': 1502862432000,
        'categoryList': [
          {
            'id': 24,
            'name': '久久代挂',
            'status': 0,
            'createAt': 1503228648000,
            'updateAt': 1503228648000
          },
          {
            'id': 32,
            'name': '鬼刃代挂',
            'status': 0,
            'createAt': 1504794675000,
            'updateAt': 1506216713000
          }
        ]
      },
      {
        'id': 5,
        'name': '实力杂货铺',
        'status': 0,
        'createAt': 1502330906000,
        'updateAt': 1506133268000,
        'categoryList': [
          {
            'id': 10,
            'name': '布吉岛 作图',
            'status': 0,
            'createAt': 1502331285000,
            'updateAt': 1507367766000
          },
          {
            'id': 30,
            'name': '月殇专区',
            'status': 0,
            'createAt': 1504707043000,
            'updateAt': 1504707043000
          },
          {
            'id': 33,
            'name': '妙音杂货店',
            'status': 0,
            'createAt': 1504794709000,
            'updateAt': 1506503398000
          },
          {
            'id': 49,
            'name': '千梦专区',
            'status': 0,
            'createAt': 1506217402000,
            'updateAt': 1506217402000
          },
          {
            'id': 50,
            'name': '宇鑫专区',
            'status': 0,
            'createAt': 1506228812000,
            'updateAt': 1506228812000
          },
          {
            'id': 51,
            'name': '凉心专区',
            'status': 0,
            'createAt': 1506494173000,
            'updateAt': 1506670966000
          },
          {
            'id': 52,
            'name': '菜头专区',
            'status': 0,
            'createAt': 1506503485000,
            'updateAt': 1507109025000
          },
          {
            'id': 53,
            'name': '全少专区',
            'status': 0,
            'createAt': 1506613343000,
            'updateAt': 1506613343000
          },
          {
            'id': 54,
            'name': '浪子专区',
            'status': 0,
            'createAt': 1506679510000,
            'updateAt': 1506679510000
          },
          {
            'id': 56,
            'name': '小丑专区',
            'status': 0,
            'createAt': 1506864752000,
            'updateAt': 1507262593000
          },
          {
            'id': 58,
            'name': '极速专区',
            'status': 0,
            'createAt': 1507041351000,
            'updateAt': 1507041351000
          },
          {
            'id': 59,
            'name': '汇聚专区',
            'status': 0,
            'createAt': 1507116963000,
            'updateAt': 1507116963000
          }
        ]
      },
      {
        'id': 6,
        'name': '官方钻   流量   视频',
        'status': 0,
        'createAt': 1502331441000,
        'updateAt': 1502863035000,
        'categoryList': [
          {
            'id': 11,
            'name': 'QQ官方钻',
            'status': 0,
            'createAt': 1502331458000,
            'updateAt': 1507267575000
          },
          {
            'id': 12,
            'name': '官方卡密',
            'status': 0,
            'createAt': 1502331464000,
            'updateAt': 1506155218000
          },
          {
            'id': 16,
            'name': '贴吧云签到',
            'status': 0,
            'createAt': 1502341221000,
            'updateAt': 1502341221000
          },
          {
            'id': 18,
            'name': '菜头免流',
            'status': 0,
            'createAt': 1502366855000,
            'updateAt': 1502862230000
          },
          {
            'id': 19,
            'name': '一毛商品',
            'status': 0,
            'createAt': 1502439725000,
            'updateAt': 1507024614000
          },
          {
            'id': 34,
            'name': '诚少专区',
            'status': 0,
            'createAt': 1504938879000,
            'updateAt': 1504999786000
          },
          {
            'id': 60,
            'name': '千梦免流',
            'status': 0,
            'createAt': 1507274492000,
            'updateAt': 1507274492000
          }
        ]
      },
      {
        'id': 7,
        'name': '游戏大咖',
        'status': 0,
        'createAt': 1502331543000,
        'updateAt': 1502862996000,
        'categoryList': [
          {
            'id': 13,
            'name': 'LOL实力供货',
            'status': 0,
            'createAt': 1502331555000,
            'updateAt': 1506768228000
          },
          {
            'id': 14,
            'name': '王者点券',
            'status': 0,
            'createAt': 1502331564000,
            'updateAt': 1502331564000
          },
          {
            'id': 15,
            'name': 'CF手游枪战',
            'status': 0,
            'createAt': 1502332804000,
            'updateAt': 1502441117000
          },
          {
            'id': 21,
            'name': 'QQ飞车',
            'status': 0,
            'createAt': 1502553471000,
            'updateAt': 1503138276000
          },
          {
            'id': 26,
            'name': '官方回馈游戏CDK',
            'status': 0,
            'createAt': 1503833851000,
            'updateAt': 1505558105000
          },
          {
            'id': 40,
            'name': '小余专区',
            'status': 0,
            'createAt': 1504967321000,
            'updateAt': 1505207431000
          },
          {
            'id': 43,
            'name': '宇师专区',
            'status': 0,
            'createAt': 1505526606000,
            'updateAt': 1505526606000
          },
          {
            'id': 44,
            'name': 'CF手游外挂',
            'status': 0,
            'createAt': 1505558411000,
            'updateAt': 1507433630000
          },
          {
            'id': 48,
            'name': '实力王者代练',
            'status': 0,
            'createAt': 1506211793000,
            'updateAt': 1507262614000
          },
          {
            'id': 57,
            'name': 'CF端游外挂',
            'status': 0,
            'createAt': 1506989969000,
            'updateAt': 1507261429000
          }
        ]
      },
      {
        'id': 9,
        'name': '极品QQ特卖',
        'status': 0,
        'createAt': 1504062992000,
        'updateAt': 1507264489000,
        'categoryList': [
          {
            'id': 29,
            'name': '米线专区',
            'status': 0,
            'createAt': 1504063073000,
            'updateAt': 1507264708000
          },
          {
            'id': 45,
            'name': '米粉专区',
            'status': 0,
            'createAt': 1505572671000,
            'updateAt': 1507264739000
          }
        ]
      },
      {
        'id': 10,
        'name': '平台大酬宾',
        'status': 0,
        'createAt': 1504942244000,
        'updateAt': 1504942244000,
        'categoryList': [
          {
            'id': 37,
            'name': '平台大酬宾-邀人送钻',
            'status': 0,
            'createAt': 1504942422000,
            'updateAt': 1504942422000
          },
          {
            'id': 46,
            'name': '软件回馈',
            'status': 0,
            'createAt': 1505710019000,
            'updateAt': 1505710019000
          },
          {
            'id': 55,
            'name': '国庆送福利',
            'status': 0,
            'createAt': 1506821334000,
            'updateAt': 1506821334000
          },
          {
            'id': 61,
            'name': '小仕福专区',
            'status': 0,
            'createAt': 1507279043000,
            'updateAt': 1507279043000
          }
        ]
      },
      {
        'id': 11,
        'name': '实物专区',
        'status': 0,
        'createAt': 1505218207000,
        'updateAt': 1505218207000,
        'categoryList': [
          {
            'id': 41,
            'name': '实物回馈',
            'status': 0,
            'createAt': 1505218245000,
            'updateAt': 1505218245000
          }
        ]
      }
    ]
  }
}

/**
 * 商品分类
 * @param {number} categoryId 商品分类ID
 * @returns {Promise}
 */
export async function getGoods (categoryId) {
  return {
    'code': 0,
    'msg': '操作成功',
    'data': [
      {
        'id': 171,
        'name': "『<font color='red'>新用户专享</font>』快刷名片赞 2000",
        'extra': '下单地址：http://qejl.95jw.cn/index.php 快刷名片赞',
        'extraHint': null,
        'tags': '',
        'outExtra': '',
        'price': 30,
        'status': 3,
        'type': 1,
        'stock': 9999,
        'limitNum': 10,
        'createAt': 1503193094000,
        'updateAt': 1507026401000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': {
          'id': 4,
          'name': '空',
          'content': '[]',
          'createAt': 1504941888000,
          'updateAt': 1504941888000,
          'status': 0
        },
        'statusStr': '已上架'
      },
      {
        'id': 154,
        'name': '企鹅社区',
        'extra': ' 企鹅社区网址http://qejl.95jw.cn/index.php                                                                      企鹅社区所有空间业务查询地址：www.trqjm.com:81/index.php?m=home&c=index&a=index&id=127',
        'extraHint': null,
        'tags': '',
        'outExtra': '',
        'price': 99999,
        'status': 3,
        'type': 0,
        'stock': 1,
        'limitNum': 1,
        'createAt': 1502884307000,
        'updateAt': 1507026590000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': {
          'id': 4,
          'name': '空',
          'content': '[]',
          'createAt': 1504941888000,
          'updateAt': 1504941888000,
          'status': 0
        },
        'statusStr': '已上架'
      },
      {
        'id': 120,
        'name': "<font color='red'>官方自营</font>』超速名片赞 10000",
        'extra': '日刷百万下单',
        'extraHint': '[\r\n{\"name\":\"账号\",\"hint\":\"请输入账号\"}\r\n]\r\n                ',
        'tags': '',
        'outExtra': '',
        'price': 390,
        'status': 3,
        'type': 0,
        'stock': 9999,
        'limitNum': 9999,
        'createAt': 1502676525000,
        'updateAt': 1502967492000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': null,
        'statusStr': '已上架'
      },
      {
        'id': 119,
        'name': "<font color='red'>官方自营</font>』超速名片赞 1000",
        'extra': '日刷百万下单  质量保证',
        'extraHint': null,
        'tags': '',
        'outExtra': '',
        'price': 40,
        'status': 1,
        'type': 1,
        'stock': 9999,
        'limitNum': 9999,
        'createAt': 1502676490000,
        'updateAt': 1507424512000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': {
          'id': 4,
          'name': '空',
          'content': '[]',
          'createAt': 1504941888000,
          'updateAt': 1504941888000,
          'status': 0
        },
        'statusStr': '已推荐'
      },
      {
        'id': 118,
        'name': "『<font color='red'>官方自营</font>』手工名片赞 10000",
        'extra': '订单每天晚上11.40左右订单开始刷单，急单催单勿下哦！日刷60000+',
        'extraHint': null,
        'tags': '',
        'outExtra': '',
        'price': 110,
        'status': 3,
        'type': 1,
        'stock': 9999,
        'limitNum': 9999,
        'createAt': 1502676261000,
        'updateAt': 1507435981000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': {
          'id': 4,
          'name': '空',
          'content': '[]',
          'createAt': 1504941888000,
          'updateAt': 1504941888000,
          'status': 0
        },
        'statusStr': '已上架'
      },
      {
        'id': 117,
        'name': "『<font color='red'>官方自营</font>』手工名片赞 1000",
        'extra': '订单每天晚上11.40左右订单开始刷单，急单催单勿下哦！日刷60000+',
        'extraHint': null,
        'tags': '',
        'outExtra': '',
        'price': 11,
        'status': 3,
        'type': 1,
        'stock': 9999,
        'limitNum': 9999,
        'createAt': 1502676008000,
        'updateAt': 1507435971000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': {
          'id': 4,
          'name': '空',
          'content': '[]',
          'createAt': 1504941888000,
          'updateAt': 1504941888000,
          'status': 0
        },
        'statusStr': '已上架'
      },
      {
        'id': 1,
        'name': "『<font color='red'>官方自营</font>』特价名片赞 1000",
        'extra': '下单后24小时内开刷   急单不要下  下单默认处理完成  亲不要投诉',
        'extraHint': null,
        'tags': '',
        'outExtra': '',
        'price': 13,
        'status': 3,
        'type': 1,
        'stock': 9999,
        'limitNum': 9999,
        'createAt': 1501862400000,
        'updateAt': 1506484225000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': {
          'id': 4,
          'name': '空',
          'content': '[]',
          'createAt': 1504941888000,
          'updateAt': 1504941888000,
          'status': 0
        },
        'statusStr': '已上架'
      },
      {
        'id': 2,
        'name': "『<font color='red'>官方自营</font>』特价名片赞 10000",
        'extra': '下单后24小时内开刷   急单不要下  下单默认处理完成  亲不要投诉',
        'extraHint': null,
        'tags': '',
        'outExtra': '',
        'price': 110,
        'status': 3,
        'type': 1,
        'stock': 9999,
        'limitNum': 9999,
        'createAt': 1501862400000,
        'updateAt': 1506764060000,
        'category': {
          'id': 1,
          'name': '名片赞',
          'status': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000
        },
        'user': {
          'id': 2,
          'nickName': '企鹅精灵官方',
          'credit': 278570,
          'deviceId': '',
          'androidId': '',
          'inviteCode': null,
          'phone': '18202823228',
          'password': '0d780a1d8664722ee7a3ef32476f6b9e',
          'phoneVarifyStatus': 0,
          'status': 0,
          'type': 3,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': '1028101430',
          'tel': '',
          'address': '',
          'phoneVarifyStatusStr': '未验证',
          'typeStr': '供货商',
          'statusStr': '启用'
        },
        'productTemplate': {
          'id': 4,
          'name': '空',
          'content': '[]',
          'createAt': 1504941888000,
          'updateAt': 1504941888000,
          'status': 0
        },
        'statusStr': '已上架'
      }
    ]
  }
}

export async function getinvoiceInfo (invoiceId) {
  return {
    'code': 0,
    'msg': '操作成功',
    'data': [
      {
        'id': 1825,
        'extra': '[系统自动处理]下单地址：http://qejl.95jw.cn/index.php  手工名片赞\n卡密：QE_25FZNXFEEAECHQMGGDC6J99X_QE',
        'createAt': 1506473325000,
        'updateAt': 1506473325000,
        'invoice': {
          'id': 3144,
          'extra': '',
          'outExtra': null,
          'num': 1,
          'totalPrice': 11,
          'status': 2,
          'createAt': 1506473325000,
          'updateAt': 1506473325000,
          'user': {
            'id': 3,
            'nickName': 'qe_080517_52076',
            'credit': 1124,
            'deviceId': '861735033539825',
            'androidId': '79e56675ae22497a',
            'inviteCode': '3P5SZNW',
            'phone': '18566632508',
            'password': 'e10adc3949ba59abbe56e057f20f883e',
            'phoneVarifyStatus': 1,
            'status': 0,
            'type': 0,
            'createAt': 1501862400000,
            'updateAt': 1501862400000,
            'parent': null,
            'qq': null,
            'tel': null,
            'address': null,
            'phoneVarifyStatusStr': '验证成功',
            'typeStr': '普通用户',
            'statusStr': '启用'
          },
          'product': {
            'id': 117,
            'name': "『<font color='red'>官方自营</font>』手工名片赞 1000",
            'extra': '订单每天晚上11.40左右订单开始刷单，急单催单勿下哦！日刷60000+',
            'extraHint': null,
            'tags': '',
            'outExtra': '',
            'price': 11,
            'status': 3,
            'type': 1,
            'stock': 9999,
            'limitNum': 9999,
            'createAt': 1502676008000,
            'updateAt': 1507435971000,
            'category': {
              'id': 1,
              'name': '名片赞',
              'status': 0,
              'createAt': 1501862400000,
              'updateAt': 1501862400000
            },
            'user': {
              'id': 2,
              'nickName': '企鹅精灵官方',
              'credit': 286728,
              'deviceId': '',
              'androidId': '',
              'inviteCode': null,
              'phone': '18202823228',
              'password': '0d780a1d8664722ee7a3ef32476f6b9e',
              'phoneVarifyStatus': 0,
              'status': 0,
              'type': 3,
              'createAt': 1501862400000,
              'updateAt': 1501862400000,
              'parent': null,
              'qq': '1028101430',
              'tel': '',
              'address': '',
              'phoneVarifyStatusStr': '未验证',
              'typeStr': '供货商',
              'statusStr': '启用'
            },
            'productTemplate': {
              'id': 4,
              'name': '空',
              'content': '[]',
              'createAt': 1504941888000,
              'updateAt': 1504941888000,
              'status': 0
            },
            'statusStr': '已上架'
          },
          'statusStr': '已完成'
        },
        'user': {
          'id': 3,
          'nickName': 'qe_080517_52076',
          'credit': 1124,
          'deviceId': '861735033539825',
          'androidId': '79e56675ae22497a',
          'inviteCode': '3P5SZNW',
          'phone': '18566632508',
          'password': 'e10adc3949ba59abbe56e057f20f883e',
          'phoneVarifyStatus': 1,
          'status': 0,
          'type': 0,
          'createAt': 1501862400000,
          'updateAt': 1501862400000,
          'parent': null,
          'qq': null,
          'tel': null,
          'address': null,
          'phoneVarifyStatusStr': '验证成功',
          'typeStr': '普通用户',
          'statusStr': '启用'
        }
      }
    ]
  }
}
