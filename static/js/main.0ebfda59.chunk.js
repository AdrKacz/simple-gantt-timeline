(this["webpackJsonpsimple-gantt-timeline"]=this["webpackJsonpsimple-gantt-timeline"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),i=a(6),r=a.n(i),c=(a(11),a(4)),s=a(1),u=a(3),f=(a(12),a(0));var d=function(e){var t,a,n=e.previous,o=e.next;return n=null!==(t=n)&&void 0!==t?t:function(e){},o=null!==(a=o)&&void 0!==a?a:function(e){},Object(f.jsxs)("div",{className:"Slider",children:[Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),n()},children:Object(f.jsx)("i",{className:"arrow left"})}),Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),o()},children:Object(f.jsx)("i",{className:"arrow right"})})]})},l=(a(14),["January","February","March","April","May","June","July","August","September","October","November","December"]);var D=function(e){var t=e.topOrigin,a=e.leftOrigin,n=e.maxSpread,o=e.dayWidth,i=e.dayOrigin,r=e.height,c=[],s=[];return Array(n).fill(0).forEach((function(e,n){var u=new Date(i.getTime()+864e5*n);s.push(Object(f.jsx)("div",{className:"time",style:{top:t+r,left:a+o*n,width:o,height:r},children:u.getDate()},n)),0!==n&&1!==u.getDate()||c.push(Object(f.jsx)("div",{className:"month",style:{top:t,left:a+o*n,width:o,height:r},children:l[u.getMonth()]},n))})),Object(f.jsxs)("div",{className:"TimeAxis",children:[c,s]})},h=0,v={},w={};function j(e){var t=e.clientX,a=e.clientY,n=new CustomEvent("updateposition",{detail:{x:t,y:a}});Object.values(v).forEach((function(e,t){e.dispatchEvent(n)}))}function b(){Object.keys(w).forEach((function(e,t){w[e]=!1}))}var m=function(e){var t,a;v[e]=null!==(t=v[e])&&void 0!==t?t:new EventTarget,w[e]=null!==(a=w[e])&&void 0!==a&&a;var o=Object(n.useState)([0,0]),i=Object(u.a)(o,2),r=i[0],c=i[1],s=Object(n.useCallback)((function(t){var a=[t.detail.x,t.detail.y];w[e]&&c(a)}),[e]);return Object(n.useEffect)((function(){return 0===h&&(window.addEventListener("mousemove",j),window.addEventListener("mouseup",b)),v[e].addEventListener("updateposition",s),h+=1,function(){v[e].removeEventListener("updateposition",s),0===(h-=1)&&(window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",b))}}),[e,s]),[w[e]?r[0]:void 0,w[e]?r[1]:void 0,function(t){w[e]=t}]};a(15);var p=function(e){var t=e.width,a=e.height,o=e.handleKey,i=e.updateTaskHandle,r=m(o),c=Object(u.a)(r,3),s=c[0],d=c[2];return Object(n.useEffect)((function(){i(s)}),[s,i]),Object(f.jsx)("div",{onMouseDown:function(e){d(!0)},className:"TaskHandle",style:{width:t,height:a}})};a(16);var O=function(e){var t=e.name,a=e.absoluteTop,o=e.absoluteLeft,i=e.width,r=e.height,c=e.paddingLeft,s=e.taskKey,d=e.updateTask,l=m(s),D=Object(u.a)(l,3),h=D[0],v=D[1],w=D[2];function j(e,t){d(e,t,0)}return Object(n.useEffect)((function(){d("all",h,v)}),[h,v,d]),Object(f.jsxs)("div",{className:"Task",style:{top:a,left:o,width:i,height:r},children:[Object(f.jsx)(p,{handleKey:"".concat(s,":left"),width:10,height:r,updateTaskHandle:function(e){return j("left",e)}}),Object(f.jsx)("div",{className:"text-container",onMouseDown:function(e){w(!0)},style:{"padding-left":c},children:t}),Object(f.jsx)(p,{handleKey:"".concat(s,":right"),width:10,height:r,updateTaskHandle:function(e){return j("right",e)}})]})};a(17);var g=function(e){var t=e.name,a=e.absoluteTop,n=e.absoluteLeft,o=e.width,i=e.height,r=e.paddingLeft,c=e.setName;return Object(f.jsx)("div",{className:"EmptyTask",onClick:function(e){e.preventDefault(),e.stopPropagation()},style:{top:a,left:n,width:o,height:i,"padding-left":r},children:Object(f.jsx)("input",{value:t,onChange:function(e){e.preventDefault(),e.stopPropagation(),c(e.target.value)},type:"text",placeholder:"Write a task name"})})};a(18);var T=function(e){var t=e.absoluteTop,a=e.absoluteLeft,n=e.width,o=e.height,i=e.dayWidth,r=e.taskHeigh,c=e.createTask;return Object(f.jsx)("div",{className:"TaskCreator",onClick:function(e){e.preventDefault(),e.stopPropagation();var t=e.nativeEvent.offsetX,a=e.nativeEvent.offsetY,n=Math.floor(t/i),o=Math.floor(a/r);c(n,o)},style:{top:t,left:a,width:n,height:o}})};a(19),Math.pow(100,2);var k=function(e,t){var a=new Date(e),n=new Date(t);return a.setUTCHours(0),a.setUTCMinutes(0),a.setUTCSeconds(0),a.setUTCMilliseconds(0),n.setUTCHours(0),n.setUTCMinutes(0),n.setUTCSeconds(0),n.setUTCMilliseconds(0),Math.floor((n.getTime()-a.getTime())/864e5)};var S=function(e){e.mouseEvent;var t,a=e.fromDate,o=e.topOrigin,i=e.leftOrigin,r=e.maxSpread,c=e.dayWidth,d=e.taskHeigh,l=e.store,D=e.editStoreTask;D=null!==(t=D)&&void 0!==t?t:function(e){};var h=Object(n.useState)({}),v=Object(u.a)(h,2),w=v[0],j=v[1],b=Object(n.useState)({}),m=Object(u.a)(b,2),p=m[0],S=m[1],x=new Date(a.getTime()),y={},N={},M=[];function I(e,t){for(var a=k(x,e.StartDate),n=k(e.StartDate,e.DueDate)+1,u=e.row,l=a,D=0;D<n;D++)y["".concat(l+D,":").concat(u)]=e.Id;N[e.Id]={column:l,row:u,spread:n},l+n-1>=0&&l<r&&M.push(Object(f.jsx)(t,{taskKey:"Task-".concat(e.Id),name:e.Name,absoluteTop:o+d*u,absoluteLeft:i+c*l,width:c*n,height:d,paddingLeft:-Math.min(l,0)*c,setName:function(e){return j(Object(s.a)(Object(s.a)({},w),{},{Name:e}))},updateTask:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return E.apply(void 0,[e.Id].concat(a))}},"".concat(l,"-").concat(u)))}function E(e,t,a,n){if(e&&t&&(a||n)){var r;if(p.Id===e)r=Object(s.a)({},p);else for(var u=0;u<l.length;u++)if(l[u].Id===e){r=Object(s.a)({},l[u]);break}var f=N[e].column,D=N[e].column+N[e].spread-1,h=N[e].row;if("left"===t){var v=Math.floor((a-i-c/2)/c);if(v>D)return;for(var w=Math.min(v,f);w<=Math.max(v,f);w++)if(y["".concat(w,":").concat(h)]&&y["".concat(w,":").concat(h)]!==e)return;S(Object(s.a)(Object(s.a)({},r),{},{StartDate:new Date(r.StartDate.getTime()+864e5*(v-f))}))}else if("right"===t){var j=Math.floor((a-i-c/2)/c);if(j<f)return;for(var b=Math.min(j,D);b<=Math.max(j,D);b++)if(y["".concat(b,":").concat(h)]&&y["".concat(b,":").concat(h)]!==e)return;S(Object(s.a)(Object(s.a)({},r),{},{DueDate:new Date(r.DueDate.getTime()+864e5*(j-D))}))}else if("all"===t){var m=Math.floor((a-i)/c),O=Math.floor((n-o)/d),g=Math.floor(m-(D+f)/2);if(O<0||0===g)return;for(var T=f+g;T<=D+g;T++)if(y["".concat(T,":").concat(O)]&&y["".concat(T,":").concat(O)]!==e)return;S(Object(s.a)(Object(s.a)({},r),{},{StartDate:new Date(r.StartDate.getTime()+864e5*g),DueDate:new Date(r.DueDate.getTime()+864e5*g),row:O}))}}}return l.forEach((function(e,t){p.Id===e.Id?I(p,O):I(e,O)})),w.StartDate&&w.DueDate&&I(w,g),Object(f.jsxs)("div",{onMouseUp:function(){!function(){if(!p.Id||!p.Name||!p.StartDate||!p.DueDate)return;D(Object(s.a)({},p))}(),S({})},className:"Timeline",children:[Object(f.jsx)(T,{absoluteTop:o,absoluteLeft:i,width:c*r,dayWidth:c,taskHeigh:d,createTask:function(e,t){if(w.StartDate&&w.DueDate)return function(){if(w.Name&&w.StartDate&&w.DueDate){var e=Date.now();D(Object(s.a)(Object(s.a)({},w),{},{Id:e}))}}(),void j({});var a=0;for(a=0;a<5&&!y["".concat(e+a,":").concat(t)];a++);0!==a&&j({Name:"",StartDate:new Date(x.getTime()+864e5*e),DueDate:new Date(x.getTime()+864e5*(e+a-1)),row:t})}}),M]})};var x=function(e){var t={},a={};return Object.values(e).forEach((function(e,n){var o=k(new Date,e.StartDate),i=k(e.StartDate,e.DueDate)+1,r=-1,c=o;if(e.row){for(var u=!1,f=0;f<i;f++)if(a["".concat(c+f,":").concat(e.row)]){u=!0;break}u||(r=e.row)}if(-1===r){var d=0,l=!1;do{l=!1;for(var D=0;D<i;D++)if(a["".concat(c+D,":").concat(d)]){l=!0;break}d+=1}while(l&&d<100);r=d-1}for(var h=0;h<i;h++)a["".concat(c+h,":").concat(r)]=e.Id;t[e.Id]=Object(s.a)(Object(s.a)({},e),{},{row:r})})),t},y={1:{Id:"1",Name:"Task 1",StartDate:new Date(Date.now()-1728e5),DueDate:new Date(Date.now()+864e5)},2:{Id:"2",Name:"Task 2",StartDate:new Date(Date.now()-864e5),DueDate:new Date(Date.now()+1728e5)},3:{Id:"3",Name:"Task 3",StartDate:new Date(Date.now()-864e5),DueDate:new Date(Date.now()+864e5)},4:{Id:"4",Name:"Task 4",StartDate:new Date(Date.now()+864e5),DueDate:new Date(Date.now()+864e5)},5:{Id:"5",Name:"Task 5",StartDate:new Date(Date.now()),DueDate:new Date(Date.now())},6:{Id:"6",Name:"Task 6",StartDate:new Date(Date.now()-864e5),DueDate:new Date(Date.now()-864e5)},7:{Id:"7",Name:"Task 7",StartDate:new Date(Date.now()+216e7),DueDate:new Date(Date.now()+3024e6)},8:{Id:"8",Name:"Task 8",StartDate:new Date(Date.now()-864e6),DueDate:new Date(Date.now()-432e6)}};a(20);var N=function(){var e=Object(n.useState)(x(y)),t=Object(u.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(new Date(Date.now()-6048e5)),r=Object(u.a)(i,2),l=r[0],h=r[1],v=window.innerWidth,w=Math.floor(v/80);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(d,{previous:function(e){return h(new Date(l.getTime()-864e5))},next:function(e){return h(new Date(l.getTime()+864e5))}}),Object(f.jsx)(D,{topOrigin:100,leftOrigin:0,maxSpread:w,dayWidth:80,dayOrigin:l,height:50}),Object(f.jsx)(S,{fromDate:l,topOrigin:200,leftOrigin:0,maxSpread:w,dayWidth:80,taskHeigh:50,store:Object.values(a),editStoreTask:function(e){e.Id&&e.Name&&e.StartDate&&e.DueDate&&o(Object(s.a)(Object(s.a)({},a),{},Object(c.a)({},e.Id,Object(s.a)({},e))))}})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)}))};r.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),M()}],[[21,1,2]]]);
//# sourceMappingURL=main.0ebfda59.chunk.js.map