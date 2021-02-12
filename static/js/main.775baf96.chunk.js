(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{13:function(t,e,n){t.exports={form:"ContactsForm_form__3jher",formLabel:"ContactsForm_formLabel__9WNht",formInput:"ContactsForm_formInput__2jbed",addBtn:"ContactsForm_addBtn__3pFLN"}},17:function(t,e,n){t.exports={contactList:"ContactList_contactList__1HV-S",contact:"ContactList_contact__3LTyx",nameText:"ContactList_nameText__Z3rSI",deleteBtn:"ContactList_deleteBtn__1-ttr"}},25:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__1lDi-",filterInput:"Filter_filterInput__2XX5e"}},38:function(t,e,n){t.exports={container:"Container_container__2uePF"}},71:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(18),u=n.n(o),s=n(5),i=function(t){return t.contacts.items},b=function(t){return t.contacts.filter},j=function(t){return t.contacts.loading},l=function(t){var e=i(t),n=b(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},f=n(16),d=n.n(f),O=n(3),m=Object(O.b)("contacts/fetchContactsRequest"),h=Object(O.b)("contacts/fetchContactsSuccess"),p=Object(O.b)("contacts/fetchContactsError"),x=Object(O.b)("contacts/addContactRequest"),_=Object(O.b)("contacts/addContactSuccess"),v=Object(O.b)("contacts/addContactError"),C=Object(O.b)("contacts/deleteContactRequest"),L=Object(O.b)("contacts/deleteContactSuccess"),N=Object(O.b)("contacts/deleteContactError"),g=Object(O.b)("contacts/changeFilter");d.a.defaults.baseURL="http://localhost:4040";var y=n(38),S=n.n(y),F=function(t){var e=t.children;return Object(c.jsx)("div",{className:S.a.container,children:e})},I=n(17),B=n.n(I);function T(){var t=Object(s.c)(l),e=Object(s.b)(),n=function(t){return e(function(t){return function(e){e(C()),d.a.delete("/contacts/".concat(t)).then((function(){return e(L(t))})).catch((function(t){return e(N(t))}))}}(t))};return Object(c.jsx)("ul",{className:B.a.contactList,children:t.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(c.jsxs)("li",{className:B.a.contact,children:[Object(c.jsxs)("p",{className:B.a.nameText,children:[a," : ",r]}),Object(c.jsx)("button",{className:B.a.deleteBtn,type:"button",onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})}var k=n(10),w=n(28),E=n(39),R=n.n(E),q=(n(69),n(13)),D=n.n(q);function J(){var t=Object(s.c)(i),e=Object(s.b)(),n=function(t,n){return e(function(t,e){return function(n){var c={name:t,number:e};n(x()),d.a.post("/contacts",c).then((function(t){var e=t.data;return n(_(e))})).catch((function(t){return n(v(t))}))}}(t,n))},r=Object(a.useState)(""),o=Object(w.a)(r,2),u=o[0],b=o[1],j=Object(a.useState)(""),l=Object(w.a)(j,2),f=l[0],O=l[1];return Object(c.jsxs)("form",{className:D.a.form,onSubmit:function(e){e.preventDefault(),b(""),O(""),function(){var e=t.reduce((function(t,e){return[].concat(Object(k.a)(t),[e.name])}),[]),n=t.reduce((function(t,e){return[].concat(Object(k.a)(t),[e.number])}),[]);return e.includes(u)||n.includes(f)?(alert("".concat(u).concat(f," is already in contacts")),!0):""===u||""===f?(alert("Please enter something"),!0):void 0}()||n(u,f)},children:[Object(c.jsxs)("label",{className:D.a.formLabel,children:["Name",Object(c.jsx)("input",{className:D.a.formInput,type:"text",name:"name",placeholder:"John Doe",value:u,onChange:function(t){return b(t.currentTarget.value)}})]}),Object(c.jsxs)("label",{className:D.a.formLabel,children:["Number",Object(c.jsx)(R.a,{country:"us",name:"number",value:f,onChange:O})]}),Object(c.jsx)("button",{className:D.a.addBtn,type:"submit",children:"Add contact"})]})}var P=n(25),A=n.n(P);function X(){var t=Object(s.c)(b),e=Object(s.b)();return Object(c.jsxs)("label",{className:A.a.filterLabel,children:["Search contact",Object(c.jsx)("input",{className:A.a.filterInput,type:"text",value:t,onChange:function(t){return e(g(t.target.value))}})]})}function z(){Object(s.c)(l);var t=Object(s.b)(),e=Object(a.useRef)(!0),n=function(){return t((function(t){t(m()),d.a.get("/contacts").then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(p(e))}))}))},r=Object(s.c)(j);return Object(a.useEffect)((function(){if(e.current)return n(),void(e.current=!1)}),[]),Object(c.jsxs)(F,{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(J,{}),r&&Object(c.jsx)("p",{children:"Loading..."}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(X,{}),Object(c.jsx)(T,{})]})}var H,M,U=n(41),V=n(40),W=n.n(V),Z=n(11),G=n(7),K=n(4),Q=Object(O.c)([],(H={},Object(G.a)(H,h,(function(t,e){return e.payload})),Object(G.a)(H,_,(function(t,e){return[e.payload].concat(Object(k.a)(t))})),Object(G.a)(H,L,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),H)),Y=Object(O.c)("",Object(G.a)({},g,(function(t,e){return e.payload}))),$=Object(O.c)(!1,(M={},Object(G.a)(M,m,(function(){return!0})),Object(G.a)(M,h,(function(){return!1})),Object(G.a)(M,p,(function(){return!1})),Object(G.a)(M,x,(function(){return!0})),Object(G.a)(M,_,(function(){return!1})),Object(G.a)(M,v,(function(){return!1})),Object(G.a)(M,C,(function(){return!0})),Object(G.a)(M,L,(function(){return!1})),Object(G.a)(M,N,(function(){return!1})),M)),tt=Object(K.c)({items:Q,filter:Y,loading:$}),et=[].concat(Object(k.a)(Object(O.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),[W.a]),nt=Object(O.a)({reducer:{contacts:tt},middleware:et,devTools:!1});u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{store:nt,children:Object(c.jsx)(U.a,{children:Object(c.jsx)(z,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.775baf96.chunk.js.map