(this.webpackJsonpreactivo=this.webpackJsonpreactivo||[]).push([[0],{28:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(20),o=c.n(a),i=(c(28),c(17)),s=c(23),l=c(8),j=c(9),u=c(2),d=c(1),b=function(e){var t=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,className:"btn",children:t})};b.defaultProps={color:"black"};var h=b,O=function(e){var t=e.onAddClick,c=e.showForm;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Reactivo"}),"/"===Object(u.e)().pathname&&Object(d.jsx)(h,{text:c?"Close":"Add",onClick:t})]})},m=c(22),p=function(e){var t=e.task,c=e.onDelete,n=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.priority?"priority":""),children:[Object(d.jsxs)("div",{className:"taskHeader",children:[Object(d.jsx)("h3",{children:t.title}),Object(d.jsxs)("div",{className:"taskControls",children:[Object(d.jsx)("input",{onClick:function(){return n(t.id)},type:"checkbox",id:"priorityCheck",checked:t.priority}),Object(d.jsx)(m.a,{className:"deleteIcon",style:{cursor:"pointer"},onClick:function(){return c(t.id)}})]})]}),t.note&&Object(d.jsx)("p",{children:t.note})]})},f=function(e){var t=e.tasks,c=e.onDelete,n=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(p,{task:e,onDelete:c,onToggle:n,priority:e.priority},e.id)}))})},x=function(e){var t=e.onAdd,r=Object(n.useState)(""),a=Object(l.a)(r,2),o=a[0],i=a[1],s=Object(n.useState)(""),j=Object(l.a)(s,2),u=j[0],b=j[1],h=Object(n.useState)(!1),O=Object(l.a)(h,2),m=O[0],p=O[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){if(e.preventDefault(),o){var n=c(34).Chance().guid();t({title:o,note:u,priority:m,id:n}),i(""),b(""),p(!1)}else alert("Por favor insira o t\xedtulo da tarefa.")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"",children:"T\xedtulo"}),Object(d.jsx)("input",{type:"title",placeholder:"Adicione o t\xedtulo da tarefa",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"",children:"Notas"}),Object(d.jsx)("input",{type:"title",placeholder:"Adicione notas para a tarefa",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("input",{type:"checkbox",value:m,checked:m,onChange:function(e){return p(e.currentTarget.checked)}}),Object(d.jsx)("label",{children:"Prioridade"})]}),Object(d.jsx)("input",{type:"submit",value:"Salvar",className:"btn btn-block"})]})};var v=function(){return Object(d.jsx)("footer",{children:Object(d.jsx)(j.b,{to:"/"===Object(u.e)().pathname?"/about":"/",children:"/"===Object(u.e)().pathname?"Sobre":"Home"})})};var g=function(){return Object(d.jsxs)("div",{id:"about",children:[Object(d.jsx)("p",{children:"Esse pequeno e simples app n\xe3o faz muita coisa, e nem mesmo \xe9 realmente \xfatil (eu acho), mas para mim ele foi muito \xfatil e fez muito!"}),Object(d.jsx)("p",{children:"Com a cria\xe7\xe3o do Reactivo eu aprendi a usar o framework React, o que \xe9 um grande marco na minha jornada de estudo em desenvolvimento de software e eu espero que em minha carreira."}),Object(d.jsx)("h4",{children:"Valeu por usar o Reactivo :)"}),Object(d.jsxs)("p",{children:["-"," ",Object(d.jsx)("a",{href:"http://campsite.bio/codigoisaac",target:"_blank",rel:"noreferrer",children:"c\xf3digoisaac"})]})]})};var k=function(){var e=JSON.parse(localStorage.getItem("reactivo-tasks"))||[],t=Object(n.useState)(e),c=Object(l.a)(t,2),r=c[0],a=c[1];m();var o=function(e){a([].concat(Object(s.a)(r),[e])),m()},b=function(e){a(r.filter((function(t){return t.id!==e}))),m()},h=function(e){a(r.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{priority:!t.priority}):t}))),m()};function m(){localStorage.setItem("reactivo-tasks",JSON.stringify(r))}var p=Object(n.useState)(!1),k=Object(l.a)(p,2),C=k[0],y=k[1];return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{onAddClick:function(){return y(!C)},showForm:C}),Object(d.jsx)(u.a,{path:"/",exact:!0,render:function(){return Object(d.jsxs)(d.Fragment,{children:[C&&Object(d.jsx)(x,{onAdd:o}),r.length>0?Object(d.jsx)(f,{tasks:r,onDelete:b,onToggle:h}):"No tasks to show."]})}}),Object(d.jsx)(u.a,{path:"/about",component:g}),Object(d.jsx)(v,{})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.dddfeb17.chunk.js.map