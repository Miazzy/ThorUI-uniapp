(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/extend-view/template/template"],{"352c":function(t,e,n){"use strict";var a=n("a3be6"),i=n.n(a);i.a},"64e5":function(t,e,n){"use strict";(function(t){n("51a7"),n("921b");a(n("66fd"));var e=a(n("bee5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},"748b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"86b8":function(t,e,n){"use strict";n.r(e);var a=n("9e3c"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},"9e3c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/icon/icon").then(n.bind(null,"7c3f"))},i=function(){return n.e("components/time-axis/time-axis").then(n.bind(null,"f9db"))},s=function(){return n.e("components/timeaxis-item/timeaxis-item").then(n.bind(null,"dada"))},u={components:{tuiIcon:a,tuiTimeAxis:i,tuiTimeaxisItem:s},data:function(){return{stepList:[{name:"preface",state:1,stateText:"",desc:["计划前三套模板：新闻、商城、聊天。完成后再逐步追加，敬请期待！"],page:"news"},{name:"新闻模板",state:1,stateText:"（100%）",desc:["新闻模板包含：新闻列表，新闻详情，评论等"],page:"news"},{name:"聊天模板",state:1,stateText:"（100%）",desc:["聊天模板包含：消息列表，好友列表，聊天界面等"],page:"msgList"},{name:"商城模板",state:0,stateText:"（进度85%）",desc:["商城模板包含：商品列表，商品搜索，商品详情，购物车，结算页面，我的订单等"],page:"mall"},{name:"其它模板",state:0,stateText:"",desc:["更多内容敬请期待！"],page:"news"}]}},methods:{template:function(e){var n=e.currentTarget.dataset.index,a=this.stepList[n].state,i=this.stepList[n].page;1==a||3==n?t.navigateTo({url:"../"+i+"/"+i}):this.tui.toast("功能开发中~")},currentStep:function(){t.navigateTo({url:"../msgList/msgList"})}}};e.default=u}).call(this,n("c11b")["default"])},a3be6:function(t,e,n){},bee5:function(t,e,n){"use strict";n.r(e);var a=n("748b"),i=n("86b8");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("352c");var u=n("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["64e5","common/runtime","common/vendor"]]]);