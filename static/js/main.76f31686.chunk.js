(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2);var o=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"My Notes"))};var c=function(){const e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))};var i=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))};var u=function(e){const[t,n]=Object(a.useState)({title:"",content:""});function l(e){const{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{name:"title",onChange:l,value:t.title,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onChange:l,value:t.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(a){e.onAdd(t),n({title:"",content:""}),a.preventDefault()}},"Add")))};var m=[{key:1,title:"Delegation",content:"Q. How many programmers does it take to change a light bulb? A. None \u2013 It\u2019s a hardware problem"},{key:2,title:"Loops",content:"How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."},{key:3,title:"Arrays",content:"Q. Why did the programmer quit his job? A. Because he didn't get arrays."},{key:4,title:"Hardware vs. Software",content:"What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."},{key:5,title:"Big ideas",content:"Eat more fruits"}];var s=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content))};function h(){return m.map(e=>r.a.createElement(s,{key:e.key,title:e.title,content:e.content}))}var d=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(u,{onAdd:function(e){t(t=>[...t,e])}}),r.a.createElement(h,null),e.map((e,t)=>r.a.createElement(i,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),r.a.createElement(c,null))};n.n(l).a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.76f31686.chunk.js.map