(this["webpackJsonpsimple-gantt-timeline"]=this["webpackJsonpsimple-gantt-timeline"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(19),n(2)),s=n(3),u=(n(20),n(1));var l=function(t){var e,n,a=t.previous,r=t.next;return a=null!==(e=a)&&void 0!==e?e:function(t){},r=null!==(n=r)&&void 0!==n?n:function(t){},Object(u.jsxs)("div",{className:"Slider",children:[Object(u.jsx)("button",{onClick:function(t){t.preventDefault(),t.stopPropagation(),a()},children:Object(u.jsx)("i",{className:"arrow left"})}),Object(u.jsx)("button",{onClick:function(t){t.preventDefault(),t.stopPropagation(),r()},children:Object(u.jsx)("i",{className:"arrow right"})})]})};n(22);var f=function(t,e){var n=new Date(t),a=new Date(e);return n.setUTCHours(0),n.setUTCMinutes(0),n.setUTCSeconds(0),n.setUTCMilliseconds(0),a.setUTCHours(0),a.setUTCMinutes(0),a.setUTCSeconds(0),a.setUTCMilliseconds(0),Math.floor((a.getTime()-n.getTime())/864e5)},d=["January","February","March","April","May","June","July","August","September","October","November","December"];var b=function(t){var e=t.topOrigin,n=t.leftOrigin,a=t.maxSpread,r=t.dayWidth,c=t.dayOrigin,o=t.height,i=[],s=[],l=[],b=[];return Array(a+1).fill(0).forEach((function(t,a){a-=1;var p=new Date(c.getTime()+864e5*a);s.push(Object(u.jsx)("div",{className:"time".concat(5===p.getDay()||6===p.getDay()?" weekendday":""),style:{top:e+o,left:n+r*a,width:r,height:o},children:p.getDate()},"date-".concat(a))),0===f(p,new Date)&&(l.push(Object(u.jsx)("div",{className:"todaymarker",style:{top:e+2*o,left:n+r*a+r/2}},"todaymarker-".concat(a))),l.push(Object(u.jsx)("div",{className:"todaystrip",style:{top:e+2*o,left:n+r*a+r/2}},"todaystrip-".concat(a)))),5===p.getDay()&&b.push(Object(u.jsx)("div",{className:"weekend",style:{top:e+o,left:n+r*a,width:2*r}},"weekends-".concat(a))),0!==a&&1!==p.getDate()||i.push(Object(u.jsx)("div",{className:"month",style:{top:e,left:n+r*a,height:o},children:d[p.getMonth()]},"month-".concat(a)))})),Object(u.jsxs)("div",{className:"TimeAxis",children:[Object(u.jsx)("div",{className:"timebackground",style:{top:e+2*o,left:n}}),b,i,s,l]})},p=0,j={},h={};function v(t){var e=t.clientX,n=t.clientY,a=new CustomEvent("updateposition",{detail:{x:e,y:n}});Object.values(j).forEach((function(t,e){t.dispatchEvent(a)}))}function O(){Object.keys(h).forEach((function(t,e){h[t]=!1}))}var m=function(t){var e,n;j[t]=null!==(e=j[t])&&void 0!==e?e:new EventTarget,h[t]=null!==(n=h[t])&&void 0!==n&&n;var r=Object(a.useState)([0,0]),c=Object(s.a)(r,2),o=c[0],i=c[1],u=Object(a.useCallback)((function(e){var n=[e.detail.x,e.detail.y];h[t]&&i(n)}),[t]);return Object(a.useEffect)((function(){return 0===p&&(window.addEventListener("mousemove",v),window.addEventListener("mouseup",O)),j[t].addEventListener("updateposition",u),p+=1,function(){j[t].removeEventListener("updateposition",u),0===(p-=1)&&(window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",O))}}),[t,u]),[h[t]?o[0]:void 0,h[t]?o[1]:void 0,function(e){h[t]=e}]};n(23);var g=function(t){t.width;var e=t.height,n=t.handleKey,r=t.updateTaskHandle,c=t.isLeft,o=m(n),i=Object(s.a)(o,3),l=i[0],f=i[2];return Object(a.useEffect)((function(){r(l)}),[l,r]),Object(u.jsx)("div",{onMouseDown:function(t){f(!0)},className:"TaskHandle ".concat(c?"handleleft":"handleright"),style:{height:e}})};n(24);var D=function(t){var e=t.name,n=t.absoluteTop,r=t.absoluteLeft,c=t.width,o=t.height,i=t.paddingLeft,l=t.taskKey,f=t.updateTask,d=t.launchEditTaskObject,b=m(l),p=Object(s.a)(b,3),j=p[0],h=p[1],v=p[2];function O(t,e){f(t,e,0)}return Object(a.useEffect)((function(){f("all",j,h)}),[j,h,f]),Object(u.jsxs)("div",{className:"Task",onClick:function(t){t.preventDefault(),t.stopPropagation(),d()},style:{top:n,left:r,width:c,height:o},children:[Object(u.jsx)(g,{isLeft:!0,handleKey:"".concat(l,":left"),width:10,height:o,updateTaskHandle:function(t){return O("left",t)}}),Object(u.jsx)("div",{className:"text-container",onMouseDown:function(t){v(!0)},style:{"padding-left":i},children:e}),Object(u.jsx)(g,{handleKey:"".concat(l,":right"),width:10,height:o,updateTaskHandle:function(t){return O("right",t)}})]})};n(25);var w=function(t){var e=t.name,n=t.absoluteTop,r=t.absoluteLeft,c=t.width,o=t.height,i=t.paddingLeft,s=t.setName,l=Object(a.useRef)(null);return Object(a.useEffect)((function(){l.current.focus()})),Object(u.jsx)("div",{className:"Task EmptyTask",onClick:function(t){t.preventDefault(),t.stopPropagation()},style:{top:n,left:r,width:c,height:o,"padding-left":i},children:Object(u.jsx)("input",{className:"emptytaskname",ref:l,value:e,onChange:function(t){t.preventDefault(),t.stopPropagation(),s(t.target.value)},type:"text",placeholder:"Write a task name"})})};n(26);var y=function(t){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),r=n[0],c=n[1],o=Object(a.useCallback)((function(e){e.key===t&&c(!0)}),[t]),i=Object(a.useCallback)((function(e){e.key===t&&c(!1)}),[t]);return Object(a.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}}),[o,i]),r};var x=function(t){var e=t.absoluteTop,n=t.absoluteLeft,r=t.width,c=t.height,o=t.dayWidth,i=t.taskHeigh,s=t.createTask,l=y("Enter");return Object(a.useEffect)((function(){l&&s()}),[l,s]),Object(u.jsx)("div",{className:"TaskCreator",onClick:function(t){t.preventDefault(),t.stopPropagation();var e=t.nativeEvent.offsetX,n=t.nativeEvent.offsetY,a=Math.floor(e/o),r=Math.floor(n/i);s(a,r)},tabIndex:0,style:{top:e,left:n,width:r,height:c}})};n(27);var k=function(t){var e=t.taskObject,n=t.editTaskObject;return Object(u.jsx)("div",{onMouseUp:function(t){t.preventDefault(),t.stopPropagation()},className:"EditTaskPanel".concat(e.Id?" visible":""),children:e.Id&&Object(u.jsx)("input",{className:"taskname",value:e.Name,onChange:function(t){t.preventDefault(),t.stopPropagation(),n(Object(i.a)(Object(i.a)({},e),{},{Name:t.target.value}))},type:"text",placeholder:"Write a task name"})})};n(28),Math.pow(100,2);var T=function(t){t.mouseEvent;var e,n=t.fromDate,r=t.topOrigin,c=t.leftOrigin,o=t.maxSpread,l=t.dayWidth,d=t.taskHeigh,b=t.store,p=t.editStoreTask;p=null!==(e=p)&&void 0!==e?e:function(t){};var j=Object(a.useState)({}),h=Object(s.a)(j,2),v=h[0],O=h[1],m=Object(a.useState)({}),g=Object(s.a)(m,2),y=g[0],T=g[1],S=Object(a.useState)(!1),N=Object(s.a)(S,2),E=N[0],C=N[1],I=new Date(n.getTime()),M={},L={},P=[];function U(t){var e;if(y.Id===t)e=Object(i.a)({},y);else for(var n=0;n<b.length;n++)if(b[n].Id===t){e=Object(i.a)({},b[n]);break}return e}function H(t,e){for(var n=f(I,t.StartDate),a=f(t.StartDate,t.DueDate)+1,s=t.row,b=n,p=0;p<a;p++)M["".concat(b+p,":").concat(s)]=t.Id;L[t.Id]={column:b,row:s,spread:a},b+a-1>=0&&b<o&&P.push(Object(u.jsx)(e,{taskKey:"Task-".concat(t.Id),name:t.Name,absoluteTop:r+d*s,absoluteLeft:c+l*b,width:l*a,height:d,paddingLeft:-Math.min(b,0)*l,setName:function(t){return O(Object(i.a)(Object(i.a)({},v),{},{Name:t}))},updateTask:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return A.apply(void 0,[t.Id].concat(n))},launchEditTaskObject:function(){return function(t){if(W())return;var e=U(t);C(!0),T(e)}(t.Id)}},"".concat(b,"-").concat(s)))}function W(){return v.StartDate&&v.DueDate?(function(){if(v.Name&&v.StartDate&&v.DueDate){var t=Date.now().toString();p(Object(i.a)(Object(i.a)({},v),{},{Id:t}))}}(),O({}),!0):!!y.Id&&(E&&C(!1),y.Id&&y.Name&&y.StartDate&&y.DueDate&&p(Object(i.a)({},y)),T({}),!0)}function A(t,e,n,a){if(t&&e&&(n||a)){var o=U(t),s=L[t].column,u=L[t].column+L[t].spread-1,f=L[t].row;if("left"===e){var b=Math.floor((n-c-l/2)/l);if(b>u||b-s===0)return;for(var p=Math.min(b,s);p<=Math.max(b,s);p++)if(M["".concat(p,":").concat(f)]&&M["".concat(p,":").concat(f)]!==t)return;T(Object(i.a)(Object(i.a)({},o),{},{StartDate:new Date(o.StartDate.getTime()+864e5*(b-s))}))}else if("right"===e){var j=Math.floor((n-c-l/2)/l);if(j<s||j-u===0)return;for(var h=Math.min(j,u);h<=Math.max(j,u);h++)if(M["".concat(h,":").concat(f)]&&M["".concat(h,":").concat(f)]!==t)return;T(Object(i.a)(Object(i.a)({},o),{},{DueDate:new Date(o.DueDate.getTime()+864e5*(j-u))}))}else if("all"===e){var v=Math.floor((n-c)/l),O=Math.floor((a-r)/d),m=Math.floor(v-(u+s)/2);if(O<0||m+(O-f)===0)return;for(var g=s+m;g<=u+m;g++)if(M["".concat(g,":").concat(O)]&&M["".concat(g,":").concat(O)]!==t)return;T(Object(i.a)(Object(i.a)({},o),{},{StartDate:new Date(o.StartDate.getTime()+864e5*m),DueDate:new Date(o.DueDate.getTime()+864e5*m),row:O}))}}}return b.forEach((function(t,e){y.Id===t.Id?H(y,D):H(t,D)})),v.StartDate&&v.DueDate&&H(v,w),Object(u.jsxs)("div",{onMouseUp:function(){!E&&y.Id&&W()},className:"Timeline",children:[Object(u.jsx)(x,{absoluteTop:r,absoluteLeft:c,width:l*o,dayWidth:l,taskHeigh:d,createTask:function(t,e){if(!W()&&t&&e){var n=0;for(n=0;n<5&&!M["".concat(t+n,":").concat(e)];n++);0!==n&&O({Name:"",StartDate:new Date(I.getTime()+864e5*t),DueDate:new Date(I.getTime()+864e5*(t+n-1)),row:e})}}}),P,Object(u.jsx)(k,{taskObject:E?y:{},editTaskObject:function(t){T(t)}})]})};n(29);var S=function(){return Object(u.jsx)("div",{className:"Spinner"})},N=n(5),E=n.n(N),C=n(6);var I=function(t){var e=[],n={};return t.forEach((function(t,a){t.StartDate=new Date(t.StartDate),t.DueDate=new Date(t.DueDate);var r=f(new Date,t.StartDate),c=f(t.StartDate,t.DueDate)+1,o=-1,s=r;if(t.row){for(var u=!1,l=0;l<c;l++)if(n["".concat(s+l,":").concat(t.row)]){u=!0;break}u||(o=t.row)}if(-1===o){var d=0,b=!1;do{b=!1;for(var p=0;p<c;p++)if(n["".concat(s+p,":").concat(d)]){b=!0;break}d+=1}while(b&&d<100);o=d-1}for(var j=0;j<c;j++)n["".concat(s+j,":").concat(o)]=t.Id;e.push(Object(i.a)(Object(i.a)({},t),{},{row:o}))})),e},M={1:{Id:"1",Name:"This is a task",StartDate:new Date(Date.now()-1728e5),DueDate:new Date(Date.now()+864e5)}};function L(){return(L=Object(C.a)(E.a.mark((function t(e){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Promise((function(t,e){t({result:{Items:Object.values(M)}})})),t.next=3,n;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=Object(C.a)(E.a.mark((function t(e,n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new Promise((function(t,e){M[n.Id]=Object(i.a)({},n),t({result:{}})})),t.next=3,a;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var U=n(4),H=n(14);n(31);var W=function(t){var e=t.registrationOptions,n=t.submitOptions,r=Object(a.useState)(),c=Object(s.a)(r,2),o=c[0],l=c[1],f=Object(a.useState)({}),d=Object(s.a)(f,2),b=d[0],p=d[1];console.log(o),console.log(b);var j=Object.entries(e).map((function(t,e){var n=Object(s.a)(t,2);return{value:n[0],label:n[1].label}}));return Object(u.jsxs)("div",{className:"RegisterStore",children:[Object(u.jsxs)("p",{children:["Connect to your database.",Object(u.jsx)("br",{})]}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(o.value,b)},children:[Object(u.jsx)(H.a,{value:o,onChange:function(t){l(t)},options:j}),o&&Object.entries(e[o.value].params||{}).length>0&&Object(u.jsx)("span",{className:"separationline"}),o&&Object.entries(e[o.value].params||{}).map((function(t,e){var n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(u.jsxs)("div",{className:"registerinformation",children:[Object(u.jsx)("label",{className:"registerinformationlabel",htmlFor:a,children:a}),Object(u.jsx)("input",{required:!0,className:"registerinformationinput",type:r,name:a,value:b[a],onChange:function(t){return function(t,e){p(Object(i.a)(Object(i.a)({},b),{},Object(U.a)({},t,e)))}(a,t.target.value)}})]},a)})),Object(u.jsx)("input",{type:"submit",value:"Validate"})]}),Object(u.jsxs)("div",{className:"formfooter",children:[Object(u.jsx)("span",{children:"Don't have a database?"}),Object(u.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"Create your database"})]})]})};function A(){return(A=Object(C.a)(E.a.mark((function t(e){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.apiEndpoint,{method:"POST",body:JSON.stringify({action:"scan"})});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(){return(J=Object(C.a)(E.a.mark((function t(e,n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.apiEndpoint,{method:"POST",body:JSON.stringify({action:"update",item:Object(i.a)(Object(i.a)({},n),{},{StartDate:new Date(n.StartDate).toISOString(),DueDate:new Date(n.DueDate).toISOString()})})});case 2:return a=t.sent,t.next=5,a.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var F={aws:{fetch:function(t){return A.apply(this,arguments)},update:function(t,e){return J.apply(this,arguments)}},local:{fetch:function(t){return L.apply(this,arguments)},update:function(t,e){return P.apply(this,arguments)}}},R={aws:{params:{apiEndpoint:"url"},label:"AWS"},local:{params:{},label:"Local (your work won't be saved)"}};var K=function(){var t=Object(a.useState)({}),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(null),o=Object(s.a)(c,2),l=o[0],f=o[1],d=Object(a.useState)(null),b=Object(s.a)(d,2),p=b[0],j=b[1];return Object(a.useEffect)((function(){if(n.storeType){var t=!0;return F[n.storeType].fetch(n).then((function(e){if(t){var n=e.result;console.count("... Receive Data"),console.log(n),f(I(n.Items))}})).catch((function(t){console.error(t)})),function(){t=!1}}}),[n]),Object(a.useEffect)((function(){if(n.storeType&&null!==p){var t=!0;return F[n.storeType].update(n,p).then((function(e){if(t){var n=e.result;console.count("... Update Data"),console.log(n)}})).then((function(t){return F[n.storeType].fetch(n)})).then((function(e){if(t){var n=e.result;console.count("... Receive Data"),console.log(n),f(I(n.Items))}})).catch((function(t){console.error(t)})),function(){t=!1}}}),[n,p]),[l,function(t){j(t),f(null)},{hasToRegister:!n.storeType,registrationComponent:Object(u.jsx)(W,{registrationOptions:R,submitOptions:function(t,e){r(Object(i.a)({storeType:t},e))}})}]};n(49);var B=function(){var t=K(),e=Object(s.a)(t,3),n=e[0],r=e[1],c=e[2],o=Object(a.useState)(new Date(Date.now()-6048e5)),f=Object(s.a)(o,2),d=f[0],p=f[1],j=window.innerWidth,h=Math.floor(j/64);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{previous:function(t){return p(new Date(d.getTime()-864e5))},next:function(t){return p(new Date(d.getTime()+864e5))}}),Object(u.jsx)(b,{topOrigin:68,leftOrigin:0,maxSpread:h,dayWidth:64,dayOrigin:d,height:34}),null!==n?Object(u.jsx)(T,{fromDate:d,topOrigin:136,leftOrigin:0,maxSpread:h,dayWidth:64,taskHeigh:34,store:n,editStoreTask:function(t){t.Id&&t.Name&&t.StartDate&&t.DueDate&&r(Object(i.a)({},t))}}):Object(u.jsx)(S,{}),c.hasToRegister&&c.registrationComponent]})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root")),X()}},[[50,1,2]]]);
//# sourceMappingURL=main.f3b72566.chunk.js.map