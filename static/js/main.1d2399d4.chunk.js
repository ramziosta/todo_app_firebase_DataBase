(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),c=n(31),i=n.n(c),r=(n(72),n(23)),s=n(16),d=n(104),p=n(107),l=n(106),u=n(105),j=(n(73),n(102)),b=n(103),m=n(108),f=(n(74),n(75),n(44));n(78),n(86);f.a.initializeApp({apiKey:"AIzaSyDSFAXSdIBH2NVbE5zU3nnhgh7Woc8M7Xg",authDomain:"todo-app-a60de.firebaseapp.com",projectId:"todo-app-a60de",storageBucket:"todo-app-a60de.appspot.com",messagingSenderId:"578231052890",appId:"1:578231052890:web:075190dc3e9fe6e7090663",measurementId:"G-Y7KG0YYK51"});var h=f.a.firestore(),O=n(19);var x=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.a,{className:"TodoList",children:Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a,{primary:e.text,secondary:"\ud83d\udd32"})})})})};var g=function(){var e=o.a.useState([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=o.a.useState(""),j=Object(s.a)(i,2),b=j[0],m=j[1];return console.log("\ud83d\udfe5"+b),console.log("\ud83d\udfe9"+h),Object(a.useEffect)((function(){h.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return e.data().todo})))}))}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"ToDo List"}),Object(O.jsxs)("form",{children:[Object(O.jsxs)(d.a,{children:[Object(O.jsx)(p.a,{children:"\ud83d\udd33 Add a Todo"}),Object(O.jsx)(l.a,{value:b,label:"Outlined primary",onChange:function(e){return m(e.target.value)}})]}),Object(O.jsx)(u.a,{variant:"contained",disabled:!b,color:"primary",type:"submit",onClick:function(e){e.preventDefault(),h.collection("todos").add({todo:b,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),c([].concat(Object(r.a)(n),[b])),m("")},children:"Add ToDos"})]}),Object(O.jsx)("ul",{children:n.map((function(e,t){return Object(O.jsx)(x,{text:e},t)}))})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),v()}},[[85,1,2]]]);
//# sourceMappingURL=main.1d2399d4.chunk.js.map