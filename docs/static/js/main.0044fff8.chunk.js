(this["webpackJsonpgit-hub-cards"]=this["webpackJsonpgit-hub-cards"]||[]).push([[0],{25:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a(16),r=a.n(c),s=a(18),i=a(6),u=a.n(i),o=a(17),j=a(7),b=a(19),d=(a(25),a(0)),l=a(27),v=[{id:"001",name:"Mauricio Matango",avatar_url:"https://avatars.githubusercontent.com/u/61792044?v=4",company:"@Yavirac"},{id:"002",name:"Bryan Perez",avatar_url:"https://avatars.githubusercontent.com/u/59462642?v=4",company:"@Yavirac"},{id:"003",name:"Henrry Acosta",avatar_url:"https://avatars.githubusercontent.com/u/67518799?v=4",company:"@Yavirac"}],m=function(t){var e=t.profiles;return Object(d.jsx)("div",{children:e.map((function(t){return Object(d.jsx)(p,Object(b.a)({},t),t.id)}))})},p=function(t){var e=t.name,a=t.avatar_url,n=t.company;return Object(d.jsxs)("div",{className:"github-profile",children:[Object(d.jsx)("img",{alt:"",src:a}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("div",{className:"name",children:e}),Object(d.jsx)("div",{className:"company",children:n})]})]})},h=function(t){var e=t.onSubmited,a=Object(n.useState)(""),c=Object(j.a)(a,2),r=c[0],s=c[1],i=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,l.get("https://api.github.com/users/".concat(r));case 3:n=t.sent,console.log(n),e(n.data),s("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsx)("input",{type:"text",value:r,onChange:function(t){return s(t.target.value)},placeholder:"GitHub username",required:!0}),Object(d.jsx)("button",{children:"Add card"})]})},O=function(t){var e=t.title,a=Object(n.useState)(v),c=Object(j.a)(a,2),r=c[0],i=c[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"header",children:e}),Object(d.jsx)(h,{onSubmited:function(t){i([].concat(Object(s.a)(r),[t])),console.log(t)}}),Object(d.jsx)(m,{profiles:r})]})};r.a.render(Object(d.jsx)(O,{title:"Aplicaci\xf3n de tarjetas de GitHub"}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0044fff8.chunk.js.map