(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={button__delete:"ContactForm_button__delete__1Mkrh",ul__delete:"ContactForm_ul__delete__26zrY",li__delete:"ContactForm_li__delete__3w8R-"}},,function(e,t,n){e.exports={input__filter:"Filter_input__filter__3NyA9",label__filter:"Filter_label__filter__Sr8Px"}},,,function(e,t,n){e.exports={wrapper:"PhoneBook_wrapper__N2_cq"}},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(10),l=n.n(i),o=(n(17),n(18),n(2)),s=n(3),u=n(5),h=n(4),b=n(11),j=n.n(b),p=n(9),d=n(6),f=n.n(d),m=n(22),_=n(8),O=n.n(_),v=(n(19),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.propContactsFilter,n=e.filterByInput;return t===[]?null:Object(c.jsx)("ul",{children:t.length>0&&t.map((function(e){var t=e.id,r=e.nickName,a=e.number,i=Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{children:[r," : "]}),Object(c.jsx)("span",{children:a})]},t);return""===n||r.toLowerCase()===n.toLowerCase()?i:void 0}))})}}]),n}(r.Component)),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e.handleChangeFilter=function(t){var n=t.target,c=n.value,r=n.name;e.setState((function(){if("filter"===r)return{filter:c}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.props.propContacts;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsxs)("label",{className:O.a.label__filter,children:["Find contact by name",Object(c.jsx)("input",{className:O.a.input__filter,value:e,type:"text",name:"filter",placeholder:"Enter user nick name",onChange:this.handleChangeFilter})]}),Object(c.jsx)(v,{propContactsFilter:t,filterByInput:e})]})}}]),n}(r.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={nick:"",phoneNumber:"",contacts:[]},e.reset=function(){e.setState({nick:"",phoneNumber:""})},e.handleChange=function(t){var n=t.target,c=n.name,r=n.value;e.setState((function(){return"nick"===c?{nick:r}:"phoneNumber"===c?{phoneNumber:r}:void 0}))},e.handleSubmit=function(t){var n=e.state,c=n.contacts,r=n.nick;t.preventDefault(),c.length>0&&c.find((function(t){t.nickName===r&&(alert('we have already contact with this nick name "'.concat(r.toLocaleUpperCase(),'"')),e.reset())})),e.setState((function(e){var t=e.nick,n=e.phoneNumber;return""===t||""===n?{contacts:Object(p.a)(c)}:0===c.length?{contacts:[{nickName:t,id:Object(m.a)(),number:n}]}:{contacts:[].concat(Object(p.a)(c),[{nickName:t,id:Object(m.a)(),number:n}])}})),e.reset()},e}return Object(s.a)(n,[{key:"delete",value:function(e){this.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),console.log(this.state.contacts.length,"click"),console.log(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.nick,r=t.phoneNumber,a=t.contacts;return console.log(a.length,"before props"),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"PhoneBook"}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{value:n,type:"text",name:"nick",placeholder:"Enter user Name and Surname",onChange:this.handleChange})]}),Object(c.jsxs)("label",{children:["phoneNumber",Object(c.jsx)("input",{value:r,type:"number",name:"phoneNumber",placeholder:"Enter user phoneNumber",onChange:this.handleChange})]}),Object(c.jsx)("button",{type:"submit",children:"Add to contacts"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{propContacts:a}),Object(c.jsx)("ul",{className:f.a.ul__delete,children:a.map((function(t){var n=t.id;return Object(c.jsx)("li",{className:f.a.li__delete,children:Object(c.jsx)("button",{type:"click",id:n,className:f.a.button__delete,onClick:e.delete.bind(e,n),children:"Delete!"},n)})}))})]})]})}}]),n}(r.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:j.a.wrapper,children:Object(c.jsx)(k,{})})}}]),n}(r.Component);function C(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(g,{})})}l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.a656f62f.chunk.js.map