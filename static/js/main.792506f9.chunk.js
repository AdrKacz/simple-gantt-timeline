(this["webpackJsonpsimple-gantt-timeline"]=this["webpackJsonpsimple-gantt-timeline"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(6),c=a.n(i),r=(a(11),a(4)),s=a(2),u=a(3),f=(a(12),a(0));var d=function(e){var t,a,n=e.previous,o=e.next;return n=null!==(t=n)&&void 0!==t?t:function(e){},o=null!==(a=o)&&void 0!==a?a:function(e){},Object(f.jsxs)("div",{className:"Slider",children:[Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),n()},children:Object(f.jsx)("i",{className:"arrow left"})}),Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),o()},children:Object(f.jsx)("i",{className:"arrow right"})})]})};a(14);var l=function(e,t){var a=new Date(e),n=new Date(t);return a.setUTCHours(0),a.setUTCMinutes(0),a.setUTCSeconds(0),a.setUTCMilliseconds(0),n.setUTCHours(0),n.setUTCMinutes(0),n.setUTCSeconds(0),n.setUTCMilliseconds(0),Math.floor((n.getTime()-a.getTime())/864e5)},D=["January","February","March","April","May","June","July","August","September","October","November","December"];var h=function(e){var t=e.topOrigin,a=e.leftOrigin,n=e.maxSpread,o=e.dayWidth,i=e.dayOrigin,c=e.height,r=[],s=[],u=[];return Array(n).fill(0).forEach((function(e,n){var d=new Date(i.getTime()+864e5*n);s.push(Object(f.jsx)("div",{className:"time",style:{top:t+c,left:a+o*n,width:o,height:c},children:d.getDate()},"date-".concat(n))),0===l(d,new Date)&&(u.push(Object(f.jsx)("div",{className:"todaymarker",style:{top:t+2*c,left:a+o*n+o/2}},"todaymarker-".concat(n))),u.push(Object(f.jsx)("div",{className:"todaystrip",style:{top:t+2*c,left:a+o*n+o/2}},"todaystrip-".concat(n)))),0!==n&&1!==d.getDate()||r.push(Object(f.jsx)("div",{className:"month",style:{top:t,left:a+o*n,height:c},children:D[d.getMonth()]},"month-".concat(n)))})),Object(f.jsxs)("div",{className:"TimeAxis",children:[r,s,u]})},v=0,b={},j={};function w(e){var t=e.clientX,a=e.clientY,n=new CustomEvent("updateposition",{detail:{x:t,y:a}});Object.values(b).forEach((function(e,t){e.dispatchEvent(n)}))}function m(){Object.keys(j).forEach((function(e,t){j[e]=!1}))}var p=function(e){var t,a;b[e]=null!==(t=b[e])&&void 0!==t?t:new EventTarget,j[e]=null!==(a=j[e])&&void 0!==a&&a;var o=Object(n.useState)([0,0]),i=Object(u.a)(o,2),c=i[0],r=i[1],s=Object(n.useCallback)((function(t){var a=[t.detail.x,t.detail.y];j[e]&&r(a)}),[e]);return Object(n.useEffect)((function(){return 0===v&&(window.addEventListener("mousemove",w),window.addEventListener("mouseup",m)),b[e].addEventListener("updateposition",s),v+=1,function(){b[e].removeEventListener("updateposition",s),0===(v-=1)&&(window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",m))}}),[e,s]),[j[e]?c[0]:void 0,j[e]?c[1]:void 0,function(t){j[e]=t}]};a(15);var O=function(e){e.width;var t=e.height,a=e.handleKey,o=e.updateTaskHandle,i=p(a),c=Object(u.a)(i,3),r=c[0],s=c[2];return Object(n.useEffect)((function(){o(r)}),[r,o]),Object(f.jsx)("div",{onMouseDown:function(e){s(!0)},className:"TaskHandle",style:{height:t}})};a(16);var g=function(e){var t=e.name,a=e.absoluteTop,o=e.absoluteLeft,i=e.width,c=e.height,r=e.paddingLeft,s=e.taskKey,d=e.updateTask,l=p(s),D=Object(u.a)(l,3),h=D[0],v=D[1],b=D[2];function j(e,t){d(e,t,0)}return Object(n.useEffect)((function(){d("all",h,v)}),[h,v,d]),Object(f.jsxs)("div",{className:"Task",style:{top:a,left:o,width:i,height:c},children:[Object(f.jsx)(O,{handleKey:"".concat(s,":left"),width:10,height:c,updateTaskHandle:function(e){return j("left",e)}}),Object(f.jsx)("div",{className:"text-container",onMouseDown:function(e){b(!0)},style:{"padding-left":r},children:t}),Object(f.jsx)(O,{handleKey:"".concat(s,":right"),width:10,height:c,updateTaskHandle:function(e){return j("right",e)}})]})};a(17);var T=function(e){var t=e.name,a=e.absoluteTop,o=e.absoluteLeft,i=e.width,c=e.height,r=e.paddingLeft,s=e.setName,u=Object(n.useRef)(null);return Object(n.useEffect)((function(){u.current.focus()})),Object(f.jsx)("div",{className:"Task EmptyTask",onClick:function(e){e.preventDefault(),e.stopPropagation()},style:{top:a,left:o,width:i,height:c,"padding-left":r},children:Object(f.jsx)("input",{ref:u,value:t,onChange:function(e){e.preventDefault(),e.stopPropagation(),s(e.target.value)},type:"text",placeholder:"Write a task name"})})};a(18);var k=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],i=a[1],c=Object(n.useCallback)((function(t){t.key===e&&i(!0)}),[e]),r=Object(n.useCallback)((function(t){t.key===e&&i(!1)}),[e]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",c),window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",c),window.removeEventListener("keyup",r)}}),[c,r]),o};var y=function(e){var t=e.absoluteTop,a=e.absoluteLeft,o=e.width,i=e.height,c=e.dayWidth,r=e.taskHeigh,s=e.createTask,u=k("Enter");return Object(n.useEffect)((function(){u&&s()}),[u,s]),Object(f.jsx)("div",{className:"TaskCreator",onClick:function(e){e.preventDefault(),e.stopPropagation(),console.log("Click Press",e);var t=e.nativeEvent.offsetX,a=e.nativeEvent.offsetY,n=Math.floor(t/c),o=Math.floor(a/r);s(n,o)},tabIndex:0,style:{top:t,left:a,width:o,height:i}})};a(19),Math.pow(100,2);var x=function(e){e.mouseEvent;var t,a=e.fromDate,o=e.topOrigin,i=e.leftOrigin,c=e.maxSpread,r=e.dayWidth,d=e.taskHeigh,D=e.store,h=e.editStoreTask;h=null!==(t=h)&&void 0!==t?t:function(e){};var v=Object(n.useState)({}),b=Object(u.a)(v,2),j=b[0],w=b[1],m=Object(n.useState)({}),p=Object(u.a)(m,2),O=p[0],k=p[1],x=new Date(a.getTime()),S={},N={},E=[];function M(e,t){for(var a=l(x,e.StartDate),n=l(e.StartDate,e.DueDate)+1,u=e.row,D=a,h=0;h<n;h++)S["".concat(D+h,":").concat(u)]=e.Id;N[e.Id]={column:D,row:u,spread:n},D+n-1>=0&&D<c&&E.push(Object(f.jsx)(t,{taskKey:"Task-".concat(e.Id),name:e.Name,absoluteTop:o+d*u,absoluteLeft:i+r*D,width:r*n,height:d,paddingLeft:-Math.min(D,0)*r,setName:function(e){return w(Object(s.a)(Object(s.a)({},j),{},{Name:e}))},updateTask:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return I.apply(void 0,[e.Id].concat(a))}},"".concat(D,"-").concat(u)))}function I(e,t,a,n){if(e&&t&&(a||n)){var c;if(O.Id===e)c=Object(s.a)({},O);else for(var u=0;u<D.length;u++)if(D[u].Id===e){c=Object(s.a)({},D[u]);break}var f=N[e].column,l=N[e].column+N[e].spread-1,h=N[e].row;if("left"===t){var v=Math.floor((a-i-r/2)/r);if(v>l)return;for(var b=Math.min(v,f);b<=Math.max(v,f);b++)if(S["".concat(b,":").concat(h)]&&S["".concat(b,":").concat(h)]!==e)return;k(Object(s.a)(Object(s.a)({},c),{},{StartDate:new Date(c.StartDate.getTime()+864e5*(v-f))}))}else if("right"===t){var j=Math.floor((a-i-r/2)/r);if(j<f)return;for(var w=Math.min(j,l);w<=Math.max(j,l);w++)if(S["".concat(w,":").concat(h)]&&S["".concat(w,":").concat(h)]!==e)return;k(Object(s.a)(Object(s.a)({},c),{},{DueDate:new Date(c.DueDate.getTime()+864e5*(j-l))}))}else if("all"===t){var m=Math.floor((a-i)/r),p=Math.floor((n-o)/d),g=Math.floor(m-(l+f)/2);if(p<0||g+(p-h)===0)return;for(var T=f+g;T<=l+g;T++)if(S["".concat(T,":").concat(p)]&&S["".concat(T,":").concat(p)]!==e)return;k(Object(s.a)(Object(s.a)({},c),{},{StartDate:new Date(c.StartDate.getTime()+864e5*g),DueDate:new Date(c.DueDate.getTime()+864e5*g),row:p}))}}}return D.forEach((function(e,t){O.Id===e.Id?M(O,g):M(e,g)})),j.StartDate&&j.DueDate&&M(j,T),Object(f.jsxs)("div",{onMouseUp:function(){!function(){if(!O.Id||!O.Name||!O.StartDate||!O.DueDate)return;h(Object(s.a)({},O))}(),k({})},className:"Timeline",children:[Object(f.jsx)(y,{absoluteTop:o,absoluteLeft:i,width:r*c,dayWidth:r,taskHeigh:d,createTask:function(e,t){if(j.StartDate&&j.DueDate)return function(){if(j.Name&&j.StartDate&&j.DueDate){var e=Date.now();h(Object(s.a)(Object(s.a)({},j),{},{Id:e}))}}(),void w({});if(e&&t){var a=0;for(a=0;a<5&&!S["".concat(e+a,":").concat(t)];a++);0!==a&&w({Name:"",StartDate:new Date(x.getTime()+864e5*e),DueDate:new Date(x.getTime()+864e5*(e+a-1)),row:t})}}}),E]})};var S=function(e){var t={},a={};return Object.values(e).forEach((function(e,n){var o=l(new Date,e.StartDate),i=l(e.StartDate,e.DueDate)+1,c=-1,r=o;if(e.row){for(var u=!1,f=0;f<i;f++)if(a["".concat(r+f,":").concat(e.row)]){u=!0;break}u||(c=e.row)}if(-1===c){var d=0,D=!1;do{D=!1;for(var h=0;h<i;h++)if(a["".concat(r+h,":").concat(d)]){D=!0;break}d+=1}while(D&&d<100);c=d-1}for(var v=0;v<i;v++)a["".concat(r+v,":").concat(c)]=e.Id;t[e.Id]=Object(s.a)(Object(s.a)({},e),{},{row:c})})),t},N={1:{Id:"1",Name:"Task 1",StartDate:new Date(Date.now()-1728e5),DueDate:new Date(Date.now()+864e5)},2:{Id:"2",Name:"Task 2",StartDate:new Date(Date.now()-864e5),DueDate:new Date(Date.now()+1728e5)},3:{Id:"3",Name:"Task 3",StartDate:new Date(Date.now()-864e5),DueDate:new Date(Date.now()+864e5)},4:{Id:"4",Name:"Task 4",StartDate:new Date(Date.now()+864e5),DueDate:new Date(Date.now()+864e5)},5:{Id:"5",Name:"Task 5",StartDate:new Date(Date.now()),DueDate:new Date(Date.now())},6:{Id:"6",Name:"Task 6",StartDate:new Date(Date.now()-864e5),DueDate:new Date(Date.now()-864e5)},7:{Id:"7",Name:"Task 7",StartDate:new Date(Date.now()+216e7),DueDate:new Date(Date.now()+3024e6)},8:{Id:"8",Name:"Task 8",StartDate:new Date(Date.now()-864e6),DueDate:new Date(Date.now()-432e6)}};a(20);var E=function(){var e=Object(n.useState)(S(N)),t=Object(u.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(new Date(Date.now()-6048e5)),c=Object(u.a)(i,2),l=c[0],D=c[1],v=window.innerWidth,b=Math.floor(v/64);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(d,{previous:function(e){return D(new Date(l.getTime()-864e5))},next:function(e){return D(new Date(l.getTime()+864e5))}}),Object(f.jsx)(h,{topOrigin:68,leftOrigin:0,maxSpread:b,dayWidth:64,dayOrigin:l,height:34}),Object(f.jsx)(x,{fromDate:l,topOrigin:136,leftOrigin:0,maxSpread:b,dayWidth:64,taskHeigh:34,store:Object.values(a),editStoreTask:function(e){e.Id&&e.Name&&e.StartDate&&e.DueDate&&o(Object(s.a)(Object(s.a)({},a),{},Object(r.a)({},e.Id,Object(s.a)({},e))))}})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),i(e),c(e)}))};c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),M()}],[[21,1,2]]]);
//# sourceMappingURL=main.792506f9.chunk.js.map