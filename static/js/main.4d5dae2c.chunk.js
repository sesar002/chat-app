(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(8),r=n.n(c),i=n(2),o=n(4),u=n(9),l=n(10),m=n(12),b=n(11),d=(n(5),n(0)),j=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),a.state.inputText.trim().length>0&&(a.props.sendMessage(a.state.inputText),a.setState({inputText:""}))},a.handleChange=function(e){a.setState({inputText:e.target.value})},a.state={inputText:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{className:"form",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsx)("input",{disabled:this.props.isLoading,type:"text",placeholder:"Enter message",value:this.state.inputText,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("input",{disabled:this.props.isLoading,type:"Submit",value:"Send",autoFocus:!0})]})}}]),n}(s.a.Component);function f(e){var t=e.currentMember,n=e.messages,s=Object(a.useRef)(null);Object(a.useEffect)((function(){!function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[n]);var c=n.map((function(e){var t=e.data,n=e.timestamp,a=e.clientId,s=e.id,c=e.member.clientData;return{clientId:a,name:c.name,color:c.color,messages:[{data:t,timestamp:n,id:s}]}})).reduce((function(e,t){var n=t.clientId,a=t.name,s=t.color,c=t.messages[0],r=c.data,o=c.timestamp,u=c.id;if(0!==e.length){if(e[e.length-1].name===a){var l={id:n,name:a,color:s,messages:[].concat(Object(i.a)(e[e.length-1].messages),[{id:u,data:r,timestamp:o}])};return e[e.length-1]=l,e}return[].concat(Object(i.a)(e),[{id:n,name:a,color:s,messages:[{id:u,data:r,timestamp:o}]}])}return[{id:n,name:a,color:s,messages:[{id:u,data:r,timestamp:o}]}]}),[]);return console.log(c),Object(d.jsxs)("ul",{className:"list",children:[c.map((function(e){var n=e.id,a=e.name,s=e.color,c=n===t.id;return Object(d.jsxs)("li",{className:c?"message fromMe":"message",children:[Object(d.jsx)("span",{style:{color:s},className:"member",children:a}),e.messages.map((function(e){var t=new Date(1e3*e.timestamp),n=t.getHours(),a=t.getMinutes();return Object(d.jsxs)("div",{style:{background:s},className:"text",children:[Object(d.jsx)("span",{children:e.data}),Object(d.jsx)("span",{className:"time",children:(n>9?n:"0"+n)+":"+(a>9?a:"0"+a)})]},e.id)}))]},n)})),Object(d.jsx)("div",{ref:s})]})}function h(e){return Object(d.jsxs)("div",{className:"members",children:[Object(d.jsx)("span",{children:"Online: "}),e.members.map((function(t,n){var a=t.clientData,s=a.name,c=a.color;return e.members.length===n+1?Object(d.jsxs)("span",{style:{color:c},children:[s," "]},t.id):Object(d.jsxs)("span",{style:{color:c},children:[s,","," "]},t.id)}))]})}var p=n(18),O=n(21),g="observable-room",v=function(){return O({luminosity:"light",format:"rgb"})};function x(){var e=Object(a.useState)({name:p(),color:v()}),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),r=Object(o.a)(c,2),u=r[0],l=r[1],m=Object(a.useState)([]),b=Object(o.a)(m,2),O=b[0],x=b[1],S=Object(a.useState)(!0),N=Object(o.a)(S,2),y=N[0],M=N[1],w=Object(a.useMemo)((function(){return new window.Scaledrone("meflNXPM4zkSd7rh",{data:n})}),[]);Object(a.useEffect)((function(){w.on("open",(function(e){if(e)return console.error(e);s({name:p(),color:v(),id:w.clientId});var t=w.subscribe(g);t.on("open",(function(e){if(e)return console.error(e);M(!1)})),t.on("members",(function(e){l((function(){return Object(i.a)(e)}))})),t.on("member_join",(function(e){l((function(t){return[].concat(Object(i.a)(t),[e])}))})),t.on("member_leave",(function(e){var t=e.id;l((function(e){return e.filter((function(e){return e.id!==t}))}))})),t.on("message",(function(e){x((function(t){return[].concat(Object(i.a)(t),[e])}))}))}))}),[]);var k=Object(a.useCallback)((function(e){w.publish({room:g,message:e})}),[w]);return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("a",{href:"https://github.com/sesar002/chat-app",className:"github",target:"a_blank",children:"View Code on Github!"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{members:u}),Object(d.jsx)(f,{currentMember:n,messages:O}),Object(d.jsx)(j,{isLoading:y,sendMessage:k})]})]})}var S=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(x,{})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},5:function(e,t,n){}},[[23,1,2]]]);
//# sourceMappingURL=main.4d5dae2c.chunk.js.map