(this["webpackJsonpgive-me-money"]=this["webpackJsonpgive-me-money"]||[]).push([[0],{196:function(e,t,n){"use strict";n.r(t);var l=n(0),c=n.n(l),i=n(21),r=n.n(i),s=n(118),a=n(83);var o=n(199),j=n(198),d=n(200),h=n(38),b=n(201),u=n(116),O=n(202),x=n(203),p=n(204),f=n.p+"static/media/qr_code.da49026f.webp",v=n(7),g=o.a.Title,y=o.a.Text,m=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(l.useState)(0),r=Object(a.a)(i,2),o=r[0],m=r[1],S=Object(l.useState)([]),T=Object(a.a)(S,2),w=T[0],k=T[1],I=Object(l.useCallback)((function(e,t,n){return function(e,t,n){var l=[],c=e.length,i=[],r=0,s=function(){for(var n=0,s=0;s<c;s++)1===i[s]&&(n=(1e3*n+1e3*e[s])/1e3);if(n>0&&n<=t){var a=[];i.forEach((function(t,n){1===t&&a.push(e[n])})),n>r?(l=[{total:n,list:a}],r=n):n===r&&l.every((function(e){return e.list.sort().toString()!==a.sort().toString()}))&&l.push({total:n,list:a})}},a=function(){for(var n=0,s=0;s<c;s++)1===i[s]&&(n=(1e3*n+1e3*e[s])/1e3);if(n>=t){var a=[];i.forEach((function(t,n){1===t&&a.push(e[n])})),!r||n<r?(l=[{total:n,list:a}],r=n):n===r&&l.every((function(e){return e.list.sort().toString()!==a.sort().toString()}))&&l.push({total:n,list:a})}};return function e(t){t>=c?"noMoreThan"===n?s():"noLessThan"===n&&a():(i[t]=0,e(t+1),i[t]=1,e(t+1))}(0),l}(e,t,n)}),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{style:{margin:10},children:Object(v.jsx)(h.a,{title:"20220628\uff1a1.\u53d1\u7968\u91d1\u989d\u8f93\u5165\u6846\u652f\u6301\u5355\u72ec\u6e05\u7a7a\uff1b2.\u7ecf\u4eba\u8089\u6d4b\u8bd5\u62a5\u9500\u53d1\u7968\u91d1\u989d\u8d85\u8fc7\u8d39\u7528\u989d\u5ea6\u65f6\u4e5f\u4f1a\u88ab\u9000\u56de\uff0c\u56e0\u6b64\u62a5\u9500\u65b9\u5f0f\u4e0d\u518d\u5bf9\u201c\u989d\u5ea6\u5238\u201d\u548c\u201c\u8d39\u7528\u989d\u5ea6\u201d\u8fdb\u884c\u533a\u5206\u5efa\u8bae",children:"E\u7968M - \u53d1\u7968\u52a9\u624b V 0.9.6"})}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsxs)(j.a,{name:"basic",wrapperCol:{span:18},onFinish:function(e){var t=e.targetValue,n=e.calculateType,l=Object(s.a)(e,["targetValue","calculateType"]),i=Object.values(l).filter((function(e){return!!e&&parseFloat(e)>=0})).map((function(e){return parseFloat(e)}));if(i.length){var r=I(i,t,n);console.log("==================================================="),console.log("\u53d1\u7968\u91d1\u989d\uff1a"+i),console.log("\u76ee\u6807\u989d\u5ea6\uff1a"+t+"\u5143"),r.length?r.forEach((function(e){console.log("\u6700\u63a5\u8fd1\u76ee\u6807\u503c\u7684\u7ec4\u5408\u4e3a "+JSON.stringify(e.list)+" ,\u5408\u8ba1"+e.total+"\u5143")})):console.log("\u65e0\u7ed3\u679c"),c(i),m(t),k(r)}else c([]),m(0),k([])},autoComplete:"off",style:{padding:"2% 4%",width:"50%"},children:[Object(v.jsx)(g,{level:4,children:"\u8ba1\u7b97\u65b9\u5f0f"}),Object(v.jsx)(j.a.Item,{initialValue:"noMoreThan",name:"calculateType",children:Object(v.jsxs)(b.a.Group,{buttonStyle:"solid",children:[Object(v.jsx)(b.a.Button,{value:"noMoreThan",children:"\u76f8\u52a0\u4e0d\u8d85\u8fc7"}),Object(v.jsx)(b.a.Button,{value:"noLessThan",children:"\u76f8\u52a0\u4e0d\u4f4e\u4e8e"})]})}),Object(v.jsx)(g,{level:4,children:"\u76ee\u6807\u989d\u5ea6"}),Object(v.jsx)(j.a.Item,{name:"targetValue",style:{display:"inline-block",width:"60%"},children:Object(v.jsx)(d.a,{})}),Object(v.jsx)(g,{level:4,children:"\u8f93\u5165\u53d1\u7968\u91d1\u989d"}),function(){for(var e=[],t=0;t<21;t+=1)e.push(Object(v.jsx)(j.a.Item,{name:"value_"+t,style:{display:"inline-block",width:"33%"},children:Object(v.jsx)(d.a,{allowClear:!0})}));return e}(),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(u.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]}),(null===n||void 0===n?void 0:n.length)?Object(v.jsxs)("div",{style:{padding:"2% 4%",width:"50%"},children:[Object(v.jsx)(g,{level:4,children:"\u53d1\u7968\u91d1\u989d\uff1a"}),Object(v.jsx)(g,{level:5,children:JSON.stringify(n,null,2)}),Object(v.jsx)("br",{}),Object(v.jsx)(g,{level:4,children:"\u76ee\u6807\u989d\u5ea6\uff1a"}),Object(v.jsxs)(g,{level:5,children:[o," \u5143"]}),Object(v.jsx)("br",{}),Object(v.jsx)(g,{level:4,children:"\u6700\u63a5\u8fd1\u76ee\u6807\u989d\u5ea6\u7684\u7ec4\u5408\u4e3a\uff1a"}),w.map((function(e){return Object(v.jsxs)(g,{level:5,children:[JSON.stringify(e.list,null,2),"\xa0\xa0\xa0\xa0\u5408\u8ba1 ",e.total," \u5143"]})})),!w.length&&Object(v.jsx)(g,{level:5,children:"\u65e0\u7ed3\u679c"})]}):null]}),Object(v.jsx)("div",{style:{paddingLeft:"4%"},children:Object(v.jsxs)(O.b,{direction:"vertical",children:[Object(v.jsx)("span",{children:"\u6ce8\uff1a"}),Object(v.jsx)("span",{children:"\u9009\u62e9\u3010\u76f8\u52a0\u4e0d\u8d85\u8fc7\u3011\u6216\u3010\u76f8\u52a0\u4e0d\u4f4e\u4e8e\u3011\u65f6\uff0c\u5747\u5c06\u8ba1\u7b97\u51fa\u6700\u63a5\u8fd1\u76ee\u6807\u989d\u5ea6\u7684\u7ec4\u5408"}),Object(v.jsx)("span",{children:"\u62a5\u9500\u8981\u6c42\u53d1\u7968\u91d1\u989d\u5fc5\u987b\u4e0e\u62a5\u9500\u91d1\u989d\u3010\u5b8c\u5168\u4e00\u81f4\u3011\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u88ab\u9000\u56de"})]})}),Object(v.jsx)("div",{style:{position:"fixed",right:40,bottom:40,zIndex:9999,display:"flex",cursor:"pointer"},children:Object(v.jsx)(x.a,{content:Object(v.jsx)("img",{height:"270",width:"270",src:f,alt:"\u7ed9\u94b1\u5565\u90fd\u597d\u8bf4"}),trigger:"click",children:Object(v.jsx)(p.a,{color:"#108ee9",children:"\u2192 \u70b9\u8d5e/\u5410\u69fd/\u9700\u6c42/BUG \u2190"})})})]})};n(195);r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.a4b20a64.chunk.js.map