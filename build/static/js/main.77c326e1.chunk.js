(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],[,,function(e,t,n){e.exports={button__delete:"ContactList_button__delete__6JPGT",li__span:"ContactList_li__span__9Rph9",li__span__button:"ContactList_li__span__button__30Gtx"}},,,,,,,function(e,t,n){e.exports={input__filter:"Filter_input__filter__3NyA9",label__filter:"Filter_label__filter__Sr8Px"}},,function(e,t,n){e.exports={wrapper:"PhoneBook_wrapper__N2_cq"}},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(10),s=n.n(i),l=(n(17),n(18),n(11)),o=n.n(l),u=n(7),h=n(3),b=n(4),p=n(6),j=n(5),d=(n(19),n(22)),_=n(9),f=n.n(_),m=n(2),O=n.n(m);function x(e){var t=e.propContactsFilter,n=e.filterByInput,c=e.clickOn,r=e.reset;return t===[]?null:Object(a.jsx)("ul",{children:t.length>0&&t.map((function(e){var t=e.id,i=e.nickName,s=e.number,l=Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{className:O.a.li__span,children:[i," : "]}),Object(a.jsx)("span",{className:O.a.li__span,children:s}),Object(a.jsx)("span",{className:O.a.li__span__button,children:Object(a.jsx)("button",{type:"click",id:t,className:O.a.button__delete,onClick:function(e){c(e),r()},children:"Delete!"})})]},t);return""===n||i.toLowerCase()===n.toLowerCase()?l:void 0}))})}var v=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={filter:""},e.handleChangeFilter=function(t){var n=t.target,a=n.value,c=n.name;e.setState((function(){if("filter"===c)return{filter:a}}))},e.resetFilter=function(){e.setState((function(e){return{filter:""}}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.props,n=t.propContacts,c=t.click;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsxs)("label",{className:f.a.label__filter,children:["Find contact by name",Object(a.jsx)("input",{className:f.a.input__filter,value:e,type:"text",name:"filter",placeholder:"Enter user nick name",onChange:this.handleChangeFilter})]}),Object(a.jsx)(x,{propContactsFilter:n,filterByInput:e,clickOn:c,reset:this.resetFilter.bind(this)})]})}}]),n}(c.Component),k=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={nick:"",phoneNumber:"",contacts:[]},e.reset=function(){e.setState({nick:"",phoneNumber:""})},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState((function(){return"nick"===a?{nick:c}:"phoneNumber"===a?{phoneNumber:c}:void 0}))},e.handleSubmit=function(t){var n=e.state,a=n.contacts,c=n.nick;t.preventDefault(),a.length>0&&a.find((function(t){t.nickName===c&&(alert('we have already contact with this nick name "'.concat(c.toLocaleUpperCase(),'"')),e.reset())})),e.setState((function(e){var t=e.nick,n=e.phoneNumber;return""===t||""===n?{contacts:Object(u.a)(a)}:0===a.length?{contacts:[{nickName:t,id:Object(d.a)(),number:n}]}:{contacts:[].concat(Object(u.a)(a),[{nickName:t,id:Object(d.a)(),number:n}])}})),e.reset()},e.delete=function(t){var n=t.target;e.setState((function(e){return{contacts:Object(u.a)(e.contacts.filter((function(e){return e.id!==n.id})))}}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.nick,n=e.phoneNumber,c=e.contacts;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"PhoneBook"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{value:t,type:"text",name:"nick",placeholder:"Enter user Name and Surname",onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["phoneNumber",Object(a.jsx)("input",{value:n,type:"phone",name:"phoneNumber",placeholder:"Enter user phoneNumber",onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add to contacts"})]}),Object(a.jsx)("div",{children:Object(a.jsx)(v,{propContacts:c,click:this.delete.bind(this)})})]})}}]),n}(c.Component);function N(){return Object(a.jsx)("div",{className:o.a.wrapper,children:Object(a.jsx)(k,{})})}function C(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(N,{})})}s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.77c326e1.chunk.js.map