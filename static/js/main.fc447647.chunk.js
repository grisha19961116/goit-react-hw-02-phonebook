(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{11:function(t,e,n){t.exports={titleList:"App_titleList__1EV3g"}},14:function(t,e,n){t.exports={input__filter:"Filter_input__filter__3lT_w"}},22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n(0),r=n.n(o),c=n(3),s=n.n(c),i=(n(21),n(22),n(15)),l=n(6),u=n(7),h=n(9),p=n(8),m=(n(23),n(2)),d=n(4),b=n.n(d),g=function(t){var e=t.contacts,n=t.listenerOnRemove,o=t.onRemoveLocal;return 0===e.length?null:Object(a.jsx)("ul",{className:b.a.contactUl,children:e.map((function(t){var e=t.id,r=t.name,c=t.phone;return Object(a.jsxs)("li",{className:b.a.contactLi,children:[Object(a.jsx)("p",{className:b.a.name,children:r}),Object(a.jsx)("p",{className:b.a.phone,children:c}),Object(a.jsx)("p",{onClick:function(){n(e),o(e)},className:b.a.p__delete,children:"Delete"})]},e)}))})},C=n(13),_=n(30),O=n(5),v=n.n(O),f={name:"",phone:""},j=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state=f,t.handleChangeInput=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(C.a)({},a,o))},t.validateFrom=function(){var e=t.state,n=e.name,a=e.phone,o=t.props.onCheckUnique;return n||a?!n&&a?(m.b.warn("\u26a0\ufe0f Field name empty!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1):!a&&n?(m.b.warn("\u26a0\ufe0f Field phone empty!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1):10!==a.length?(m.b.warn("\u26a0\ufe0f Number has to have 10 symbols!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1):n.length>12?(m.b.warn("\u26a0\ufe0f Name has to be no longer 12 characters!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1):o(n,a):(m.b.warn("\u26a0\ufe0f Fields are empty!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1)},t.resetForm=function(){return t.setState(f)},t.handleFromSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.phone,r=t.props.onAdd;t.validateFrom()&&(r({id:Object(_.a)(),name:a,phone:o}),t.resetForm())},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(a.jsxs)("form",{className:v.a.contactForm,onSubmit:this.handleFromSubmit,children:[Object(a.jsx)("input",{className:v.a.contactForm__input,type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeInput}),Object(a.jsx)("input",{className:v.a.contactForm__input,type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeInput}),Object(a.jsx)("button",{className:v.a.buttonSubmit,type:"submit",children:"Add Contact"})]})}}]),n}(o.Component),F=n(14),x=n.n(F),y=function(t){var e=t.listenerOnChange,n=t.filter;return Object(a.jsx)("input",{className:x.a.input__filter,type:"text",name:"filter",value:n,onChange:function(t){var n=t.target;return e(n.value)},placeholder:"Enter name for Search"})},k=n(11),L=n.n(k),w=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.handleCheckUniqueContact=function(e,n){var a=t.state.contacts,o=a.some((function(t){return t.name===e})),r=a.some((function(t){return t.phone===n}));return o&&m.b.warn("\u26a0\ufe0f You have contact with same name!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),r&&m.b.error("\ud83d\ude80 Number has been using!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!r},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:L.a.titleList,children:"From Contact"}),Object(a.jsx)(j,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueContact}),Object(a.jsx)("h2",{className:L.a.titleList,children:"Contacts list"}),Object(a.jsx)(y,{listenerOnChange:this.handleFilterChange}),Object(a.jsx)(g,{contacts:t,listenerOnRemove:this.handleRemoveContact}),Object(a.jsx)(m.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),n}(o.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactUl:"ContactList_contactUl__1s-gl",contactLi:"ContactList_contactLi__3DSyy",name:"ContactList_name__3Vpfh",phone:"ContactList_phone__2bqA2",p__delete:"ContactList_p__delete__qRFfc"}},5:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2gYty",contactForm__input:"ContactForm_contactForm__input__3qX7Q",buttonSubmit:"ContactForm_buttonSubmit__15rOd",root:"ContactForm_root__2JAbZ"}}},[[26,1,2]]]);
//# sourceMappingURL=main.fc447647.chunk.js.map