(this["webpackJsonpgive-me-money"]=this["webpackJsonpgive-me-money"]||[]).push([[0],{192:function(e,t,n){"use strict";n.r(t);var l=n(0),c=n.n(l),i=n(20),r=n.n(i),s=n(114),a=n(79);function o(e,t,n){var l=[],c=e.length,i=[],r=0,s=function(){for(var n=0,s=0;s<c;s++)1===i[s]&&(n+=e[s]);if(n<=t){var a=[];i.forEach((function(t,n){1===t&&a.push(e[n])})),n>r?(l=[{total:n,list:a}],r=n):n===r&&l.every((function(e){return e.list.sort().toString()!==a.sort().toString()}))&&l.push({total:n,list:a})}},a=function(){for(var n=0,s=0;s<c;s++)1===i[s]&&(n+=e[s]);if(n>=t){var a=[];i.forEach((function(t,n){1===t&&a.push(e[n])})),!r||n<r?(l=[{total:n,list:a}],r=n):n===r&&l.every((function(e){return e.list.sort().toString()!==a.sort().toString()}))&&l.push({total:n,list:a})}};return function e(t){t>=c?"noMoreThan"===n?s():"noLessThan"===n&&a():(i[t]=0,e(t+1),i[t]=1,e(t+1))}(0),l}var j=n(195),u=n(194),h=n(196),b=n(53),d=n(197),O=n(112),f=n(10),v=j.a.Title,x=j.a.Text,p=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(l.useState)(0),r=Object(a.a)(i,2),j=r[0],p=r[1],g=Object(l.useState)([]),y=Object(a.a)(g,2),m=y[0],S=y[1];Object(l.useCallback)((function(e,t,n){return o(e,t,n)}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x,{style:{margin:10},children:Object(f.jsx)(b.a,{title:"1207\u66f4\u65b0\uff1a1.\u4fee\u590d\u672a\u5b8c\u5168\u7b5b\u6389\u76f8\u540c\u8f93\u51fa\u7ed3\u679c\u7684\u95ee\u9898\uff0c\u589e\u52a0\u5bf9\u8f93\u5165\u8d1f\u6570\u6821\u9a8c\u5904\u7406\uff1b2.\u8c03\u6574\u8f93\u51fa\u754c\u9762\u6362\u884c\uff0c\u5fae\u8c03\u6807\u9898\u6837\u5f0f\uff1b3.\u589e\u52a0\u8ba1\u7b97\u201c\u4e0d\u4f4e\u4e8e\u201d\u76ee\u6807\u989d\u5ea6\u7684\u529f\u80fd",children:"E\u7968M - \u53d1\u7968\u52a9\u624b V 0.9.1"})}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsxs)(u.a,{name:"basic",wrapperCol:{span:18},onFinish:function(e){var t=e.targetValue,n=e.calculateType,l=Object(s.a)(e,["targetValue","calculateType"]),i=Object.values(l).filter((function(e){return!!e&&parseFloat(e)>=0})).map((function(e){return parseFloat(e)}));if(i.length){var r=o(i,t,n);console.log(r),console.log(n),console.log("\u53d1\u7968\u91d1\u989d\uff1a"+i),console.log("\u76ee\u6807\u989d\u5ea6\uff1a"+t+"\u5143"),r.forEach((function(e){console.log("\u6700\u63a5\u8fd1\u76ee\u6807\u503c\u7684\u7ec4\u5408\u4e3a "+JSON.stringify(e.list)+" ,\u5408\u8ba1"+e.total+"\u5143")})),c(i),p(t),S(r)}else c([]),p(0),S([])},autoComplete:"off",style:{padding:"4%",width:"50%"},children:[Object(f.jsx)(v,{level:4,children:"\u8ba1\u7b97\u65b9\u5f0f"}),Object(f.jsx)(u.a.Item,{initialValue:"noMoreThan",name:"calculateType",children:Object(f.jsxs)(d.a.Group,{buttonStyle:"solid",children:[Object(f.jsx)(d.a.Button,{value:"noMoreThan",children:"\u4e0d\u8d85\u8fc7\uff08\u4ea4\u901a\uff09"}),Object(f.jsx)(d.a.Button,{value:"noLessThan",children:"\u4e0d\u4f4e\u4e8e\uff08\u5176\u4ed6\uff09"})]})}),Object(f.jsx)(v,{level:4,children:"\u76ee\u6807\u989d\u5ea6"}),Object(f.jsx)(u.a.Item,{name:"targetValue",style:{display:"inline-block",width:"60%"},children:Object(f.jsx)(h.a,{})}),Object(f.jsx)(v,{level:4,children:"\u8f93\u5165\u53d1\u7968\u91d1\u989d"}),function(){for(var e=[],t=0;t<21;t+=1)e.push(Object(f.jsx)(u.a.Item,{name:"value_"+t,style:{display:"inline-block",width:"33%"},children:Object(f.jsx)(h.a,{})}));return e}(),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(O.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]}),(null===m||void 0===m?void 0:m.length)?Object(f.jsxs)("div",{style:{padding:"4%",width:"50%"},children:[Object(f.jsx)(v,{level:4,children:"\u53d1\u7968\u91d1\u989d\uff1a"}),Object(f.jsx)(v,{level:5,children:JSON.stringify(n,null,2)}),Object(f.jsx)("br",{}),Object(f.jsx)(v,{level:4,children:"\u76ee\u6807\u989d\u5ea6\uff1a"}),Object(f.jsxs)(v,{level:5,children:[j," \u5143"]}),Object(f.jsx)("br",{}),Object(f.jsx)(v,{level:4,children:"\u6700\u63a5\u8fd1\u76ee\u6807\u503c\u7684\u7ec4\u5408\u4e3a\uff1a"}),m.map((function(e){return Object(f.jsxs)(v,{level:5,children:[JSON.stringify(e.list,null,2),"\xa0\xa0\xa0\xa0\u5408\u8ba1 ",e.total," \u5143"]})}))]}):null]})]})};n(191);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root"))}},[[192,1,2]]]);
//# sourceMappingURL=main.549da152.chunk.js.map