(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(t,e,n){t.exports={buttonContainer:"FeedbackOption_buttonContainer__1raKT",button:"FeedbackOption_button__VcMxO"}},function(t,e,n){t.exports={TitleList:"Statistics_TitleList__1g4gw",List:"Statistics_List__19Hgh"}},,function(t,e,n){t.exports={container:"App_container__2LwkC"}},function(t,e,n){t.exports={message:"Notification_message__PQdrl"}},function(t,e,n){t.exports={mainTitle:"Section_mainTitle__RLkrS"}},,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),o=n(2),r=n(7),u=n.n(r),b=n(4),j=n.n(b),l=n(0),d=function(t){var e=t.increment,n=t.feedback;return Object(l.jsx)("div",{className:j.a.buttonContainer,children:n.map((function(t){return Object(l.jsx)("button",{type:"button",className:j.a.button,onClick:e,children:t},t)}))})},O=n(8),f=n.n(O),h=function(t){var e=t.message;return Object(l.jsx)("p",{className:f.a.message,children:e})},m=n(5),x=n.n(m),_=function(t){return Object(l.jsx)("ul",{className:x.a.List,children:Object.keys(t).map((function(e){return Object(l.jsxs)("li",{className:x.a.TitleList,children:[e,": ",t[e],"Positive"===e&&"%"]},e)}))})},k=n(9),p=n.n(k),g=function(t){var e=t.title,n=t.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:p.a.mainTitle,children:e}),n]})};function v(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(0),s=Object(o.a)(i,2),r=s[0],b=s[1],j=Object(c.useState)(0),O=Object(o.a)(j,2),f=O[0],m=O[1],x=Object(c.useState)(1),k=Object(o.a)(x,2),p=k[0],v=k[1],N=Object(c.useState)(0),S=Object(o.a)(N,2),L=S[0],w=S[1];return Object(c.useEffect)((function(){v(n+f+r)}),[n,r,f]),Object(c.useEffect)((function(){w(Math.round(0===p?0:n/p*100))}),[n,r,f,p]),Object(l.jsxs)("div",{className:u.a.container,children:[Object(l.jsx)(g,{title:"Please leave feedback",children:Object(l.jsx)(d,{increment:function(t){var e=t.target.textContent.toLowerCase();switch(console.log(e),e){case"good":a((function(t){return t+1}));break;case"neutral":b((function(t){return t+1}));break;case"bad":m((function(t){return t+1}))}},feedback:["Good","Neutral","Bad"]})}),Object(l.jsx)(g,{title:"Statistics",children:0===p?Object(l.jsx)(h,{message:"No feedback given"}):Object(l.jsx)(_,{Good:n,Neutral:r,Bad:f,Total:p,Positive:L})})]})}s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.082fe635.chunk.js.map