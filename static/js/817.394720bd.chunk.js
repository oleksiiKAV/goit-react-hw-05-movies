"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[817],{368:function(n,t,e){var r=e(689),i=e(87),c=e(184);t.Z=function(n){var t=n.forRender,e=n.endpoint,u=(0,r.TH)();return(0,c.jsx)("ul",{children:t&&t.filter((function(n){return n.title?n.title:n.title=n.name})).map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{to:"".concat(e).concat(n.id),state:u,children:n.title})},n.id)}))})}},544:function(n,t,e){e.d(t,{V_:function(){return p},jJ:function(){return d},tN:function(){return l},ws:function(){return f}});var r,i,c,u,a=e(168),o=e(87),s=e(444),p=s.ZP.button(r||(r=(0,a.Z)(["\n  padding: 5px 15px;\n  margin: 15px;\n  border-radius: 10px;\n  border: 0.5px solid #cccccc;\n"]))),f=s.ZP.h4(i||(i=(0,a.Z)(["\n  padding-left: 15px;\n  font-size: 20px;\n"]))),d=(0,s.ZP)(o.rU)(c||(c=(0,a.Z)(["\ndisplay: inline-block;\n  padding: 5px 15px;\n  margin: 0 15px 5px;\n  border-radius: 10px;\n  border: 0.5px solid #cccccc;\n  font-weight:600;\n  text-decoration: none;\n"]))),l=s.ZP.form(u||(u=(0,a.Z)(["\n  margin: 15px;  \n"])))},817:function(n,t,e){e.r(t);var r=e(439),i=e(368),c=e(544),u=e(791),a=e(87),o=e(689),s=e(243),p=e(184);t.default=function(){var n=(0,u.useState)(""),t=(0,r.Z)(n,2),e=t[0],f=t[1],d=(0,u.useState)([]),l=(0,r.Z)(d,2),x=l[0],h=l[1],m=(0,a.lr)(),b=(0,r.Z)(m,2),g=b[0],Z=b[1],v=g.get("query");(0,u.useEffect)((function(n){v&&(0,s.V)("search/movie",v).then((function(n){return h(n.results)})).catch((function(n){return console.log(n.message)}))}),[v]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(c.tN,{onSubmit:function(n){n.preventDefault(),Z({query:e}),f("")},children:[(0,p.jsx)("input",{type:"text",name:"input",value:e,onChange:function(n){f(n.target.value)}}),(0,p.jsx)("button",{type:"submit",disabled:!e.trim(),children:"Search"})]}),(0,p.jsx)(i.Z,{forRender:x,endpoint:""}),(0,p.jsx)(o.j3,{})]})}},243:function(n,t,e){e.d(t,{V:function(){return a}});var r=e(861),i=e(757),c=e.n(i),u=e(924);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var a=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=t,!n.t0){n.next=5;break}return n.next=4,u.Z.get(t,{params:{api_key:"37ce5defcbea1ae1935aece237a9c16f",page:r,query:e}}).then((function(n){return n.data}));case 4:n.t0=n.sent;case 5:return n.abrupt("return",n.t0);case 6:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=817.394720bd.chunk.js.map