(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Complain"],{"6e62":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"complain-page"},[a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.complainData,border:""}},[a("el-table-column",{attrs:{prop:"nickName",label:"用户昵称",width:"110"}}),a("el-table-column",{attrs:{prop:"reason",label:"投诉原因",width:"120"}}),a("el-table-column",{attrs:{prop:"tel",label:"电话号码",width:"110"}}),a("el-table-column",{attrs:{prop:"status",label:"处理状态",width:"110"},scopedSlots:t._u([{key:"default",fn:function(n){return[0===n.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(n.row)}}},[t._v("处理")]):a("span",{staticStyle:{"font-size":"12px"}},[t._v("已处理")])]}}])})],1)],1)])},i=[],l=(a("c740"),a("4ec3")),o={data:function(){return{complainData:[],loading:!1}},mounted:function(){this.getAccuseList()},methods:{handleClick:function(t){var n=this;this.loadingInstance=this.$loading.service(),Object(l["a"])({id:t.id}).then((function(){var a=n.complainData.findIndex((function(n){return n.id===t.id}));n.complainData[a].status=1,n.$nextTick((function(){n.loadingInstance.close(),n.$message.success("处理成功")}))}))},getAccuseList:function(){var t=this;this.loading=!0,Object(l["d"])().then((function(n){t.complainData=n.data.list,t.loading=!1})).catch((function(){t.loading=!1}))}}},c=o,s=a("2877"),r=Object(s["a"])(c,e,i,!1,null,null,null);n["default"]=r.exports},c740:function(t,n,a){"use strict";var e=a("23e7"),i=a("b727").findIndex,l=a("44d2"),o=a("ae40"),c="findIndex",s=!0,r=o(c);c in[]&&Array(1)[c]((function(){s=!1})),e({target:"Array",proto:!0,forced:s||!r},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)}}]);
//# sourceMappingURL=Complain.772a467d.js.map