(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(14),c=t.n(i),r=(t(24),t(25),t(16)),s=t(1),d=t(11),l=t.n(d),u=t(15),m=t(4),b=new d.UnityContext({loaderUrl:"build/Build/build.loader.js",dataUrl:"build/Build/build.data",frameworkUrl:"build/Build/build.framework.js",codeUrl:"build/Build/build.wasm"});var j=function(){return Object(a.useEffect)((function(){b.on("GameReady",(function(e){if(console.log("message",e),"Ready"==e)try{window.onmessage=function(e){if("iframe_message"===e.data.name){var n=Object(u.a)(e.data.token);b.send("GameManager","RequestToken",JSON.stringify({userName:n.name,token:e.data.token,amount:e.data.allowanceAmount})),console.log(e.data.token+"  ----------- "+e.data.allowanceAmount)}},window.parent.postMessage({name:"iframe_message"},"*")}catch(n){console.log("error",n)}else console.log("error")}))}),[]),Object(m.jsx)("div",{children:Object(m.jsx)(l.a,{unityContext:b,matchWebGLToCanvasSize:!0,style:{height:"90vh",marginTop:"5vh",width:"100%"}})})};var f=function(){return Object(m.jsx)(r.a,{children:Object(m.jsx)(s.c,{children:Object(m.jsx)(s.a,{exact:!0,path:"/",component:j})})})};var g=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f,{})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),o(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.efd2c63c.chunk.js.map