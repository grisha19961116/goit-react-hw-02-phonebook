(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{12:function(e,t,n){e.exports={input__filter:"Filter_input__filter__3lT_w"}},20:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(2),i=n.n(o),s=(n(19),n(20),n(13)),l=n(4),u=n(5),h=n(7),d=n(6),p=(n(21),n(3)),j=n(8),b=n.n(j),m=function(e){var t=e.contacts,n=e.listenerOnRemove;return 0===t.length?null:Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,c=e.phone;return Object(a.jsxs)("li",{children:[Object(a.jsx)("p",{className:b.a.name,children:r}),Object(a.jsx)("p",{className:b.a.phone,children:c}),Object(a.jsx)("p",{onClick:function(){return n(t)},className:b.a.p__delete,children:"Delete"})]},t)}))})},f=n(11),O=(n(22),n(30)),C={name:"",phone:""},v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=C,e.handleChangeInput=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.validateFrom=function(){var t=e.state,n=t.name,a=t.phone,r=e.props.onCheckUnique;return n&&a?a.length>10?(Object(p.b)("to long number"),!1):a.length<10?(Object(p.b)("to short number"),!1):n.length>12?(Object(p.b)("to long name"),!1):r(n):(Object(p.b)("Some filed is empty"),!1)},e.resetForm=function(){return e.setState(C)},e.handleFromSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.phone,c=e.props.onAdd;e.validateFrom()&&(c({id:Object(O.a)(),name:a,phone:r}),e.resetForm())},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.phone;return Object(a.jsxs)("form",{onSubmit:this.handleFromSubmit,children:[Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:t,onChange:this.handleChangeInput}),Object(a.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeInput}),Object(a.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(r.Component),_=n(12),g=n.n(_),x=function(e){var t=e.listenerOnChange;return Object(a.jsx)("input",{className:g.a.input__filter,type:"text",name:"filter",onChange:function(e){var n=e.target;return t(n.value)},placeholder:"Enter name for Search"})},y=(n(25),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.handleAddContact=function(t){return e.setState((function(e){var n=e.contacts;return{contacts:[].concat(Object(s.a)(n),[t])}}))},e.handleCheckUniqueContact=function(t){var n=e.state.contacts.some((function(e){return e.name===t}));return n&&alert("Credentials has already existed"),!n},e.handleRemoveContact=function(t){return e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleFilterChange=function(t){return e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"From Contact"}),Object(a.jsx)(v,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueContact}),Object(a.jsx)("h2",{children:"Contacts list"}),Object(a.jsx)(x,{listenerOnChange:this.handleFilterChange}),Object(a.jsx)(m,{contacts:e,listenerOnRemove:this.handleRemoveContact}),Object(a.jsx)(p.a,{})]})}}]),n}(r.Component));i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={name:"ContactList_name__3Vpfh",phone:"ContactList_phone__2bqA2",p__delete:"ContactList_p__delete__qRFfc"}}},[[26,1,2]]]);
//# sourceMappingURL=main.0021cb06.chunk.js.map