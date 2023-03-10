(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(6),a=s.n(c),n=s(3),r=s(2),o=(s(11),s(12),s(13),s(4)),i=s.n(o),l=s(1),d="https://mate.academy/students-api";function j(e){return new Promise((function(t){setTimeout(t,e)}))}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),j(300).then((function(){return fetch(d+e,c)})).then((function(e){return e.json()}))}var u=function(e){return m(e)},b=function(e,t){return m(e,"POST",t)},O=function(e){return m(e,"DELETE")},h=s(0),p={selectedUser:null,activeList:!1,error:null,listPostsUser:[],load:{type:"",active:!1},selectedPost:null,commentsPost:[],activeForm:!1},v=function(e,t){switch(t.type){case"selectUser":return Object(l.a)(Object(l.a)({},e),{},{selectedUser:t.user});case"active":return Object(l.a)(Object(l.a)({},e),{},{activeList:t.show});case"error":return Object(l.a)(Object(l.a)({},e),{},{error:t.error});case"postsUser":return Object(l.a)(Object(l.a)({},e),{},{listPostsUser:t.posts});case"loadData":return Object(l.a)(Object(l.a)({},e),{},{load:t.objectLoad});case"selectPost":return Object(l.a)(Object(l.a)({},e),{},{selectedPost:t.post});case"commentsPost":return Object(l.a)(Object(l.a)({},e),{},{commentsPost:t.comments});case"activeForm":return Object(l.a)(Object(l.a)({},e),{},{activeForm:t.active});default:return e}},x=Object(r.createContext)([p,function(e){return e}]),y=function(e){var t=e.children,s=Object(r.useReducer)(v,p),c=Object(n.a)(s,2),a=c[0],o=c[1];return Object(h.jsx)(x.Provider,{value:[a,o],children:t})},f=function(){var e=Object(r.useContext)(x),t=Object(n.a)(e,2),s=t[0],c=t[1];Object(r.useEffect)((function(){var e;s.selectedUser&&(c({type:"loadData",objectLoad:{type:"postsUser",active:!0}}),(e=s.selectedUser.id,u("/posts?userId=".concat(e))).then((function(e){"error"in e?(c({type:"loadData",objectLoad:{type:"postsUser",active:!1}}),c({type:"error",error:Object(l.a)(Object(l.a)({},e),{},{type:"listPosts"})})):(c({type:"postsUser",posts:e}),c({type:"loadData",objectLoad:{type:"postsUser",active:!1}}))})))}),[s.selectedUser]);var a=Object(r.useMemo)((function(){return s.listPostsUser.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"Post",children:[Object(h.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(h.jsx)("td",{"data-cy":"PostTitle",children:e.body}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{type:"button","data-cy":"PostButton",className:i()("button is-link",{"is-light":s.selectedPost!==e}),onClick:function(){return function(e){s.selectedPost===e?(c({type:"selectPost",post:null}),c({type:"activeForm",active:!1})):(c({type:"selectPost",post:e}),c({type:"activeForm",active:!1}))}(e)},children:s.selectedPost===e?"Close":"Open"})})]},e.id)}))}),[s.listPostsUser,s.selectedPost]);return s.listPostsUser.length>0?Object(h.jsxs)("div",{"data-cy":"PostsList",children:[Object(h.jsx)("p",{className:"title",children:"Posts:"}),Object(h.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"has-background-link-light",children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:a})]})]}):Object(h.jsx)(h.Fragment,{})},N=(s(15),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),P=function(e){var t=e.value,s=e.setValue,c=e.error,a=e.textError,n=e.title,r=e.valideFrom,o=e.setValidForm,l=e.type,d=e.placeholder,j=function(e){s(e.target.value);var t=Object.entries(r).map((function(e){return e[0]===l?[l,!0]:e}));o(Object.fromEntries(t))};return Object(h.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:n}),"text"===l?Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("textarea",{id:"comment-body",name:"body",placeholder:d,className:i()("textarea",{"is-danger":!c}),value:t,onChange:j})}):Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:d,className:i()("input",{"is-danger":!c}),value:t,onChange:j}),Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-user"})}),!c&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!c&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:a})]})},g=function(e){var t=e.getComments,s=Object(r.useContext)(x),c=Object(n.a)(s,2),a=c[0],o=c[1],i=Object(r.useState)(""),d=Object(n.a)(i,2),j=d[0],m=d[1],u=Object(r.useState)(""),O=Object(n.a)(u,2),p=O[0],v=O[1],y=Object(r.useState)(""),f=Object(n.a)(y,2),N=f[0],g=f[1],U=Object(r.useState)({name:!0,email:!0,text:!0}),C=Object(n.a)(U,2),w=C[0],E=C[1],F=function(){m(""),v(""),g(""),E({name:!0,email:!0,text:!0})};return Object(h.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var s,c=Object(l.a)({},w);j||(c.name=!1),p||(c.email=!1),N?a.selectedPost&&a.selectedUser&&(s={id:0,postId:a.selectedPost.id,name:j,email:p,body:N},b("/comments",s)).then((function(e){"message"in e&&o({type:"error",error:Object(l.a)(Object(l.a)({},e),{},{type:"comments"})}),a.selectedPost&&(t(a.selectedPost.id),F())})):c.text=!1,E(c)},children:[Object(h.jsx)(P,{value:j,setValue:m,error:w.name,textError:"Name is required",title:"Author Name",valideFrom:w,setValidForm:E,type:"name",placeholder:"Name Surname"}),Object(h.jsx)(P,{value:p,setValue:v,error:w.email,textError:"Email is required",title:"Author Email",valideFrom:w,setValidForm:E,type:"email",placeholder:"email@test.com"}),Object(h.jsx)(P,{value:N,setValue:g,error:w.text,textError:"Enter some text",title:"Comment Text",valideFrom:w,setValidForm:E,type:"text",placeholder:"Type comment here"}),Object(h.jsxs)("div",{className:"field is-grouped",children:[Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"submit",className:"button is-link",children:"Add"})}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:F,children:"Clear"})})]})]})},U=function(){var e,t,s,c=Object(r.useContext)(x),a=Object(n.a)(c,2),o=a[0],i=a[1],d=function(e){(function(e){return u("/comments?postId=".concat(e))})(e).then((function(e){"error"in e?(i({type:"error",error:Object(l.a)(Object(l.a)({},e),{},{type:"comments"})}),i({type:"loadData",objectLoad:{type:"comments",active:!1}})):(i({type:"commentsPost",comments:e}),i({type:"loadData",objectLoad:{type:"comments",active:!1}}))}))};Object(r.useEffect)((function(){o.selectedPost&&(i({type:"loadData",objectLoad:{type:"comments",active:!0}}),d(o.selectedPost.id))}),[o.selectedPost]);var j=function(e){(function(e){return O("/comments/".concat(e))})(e).then((function(){o.selectedPost&&i({type:"commentsPost",comments:o.commentsPost.filter((function(t){return t.id!==e}))})}))},m=Object(r.useMemo)((function(){var e;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"title is-4",children:"Comments:"}),o.commentsPost.length<1&&Object(h.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),o.commentsPost.map((function(e){return Object(h.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(h.jsxs)("div",{className:"message-header",children:[Object(h.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(h.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return j(e.id)},children:"delete button"})]}),Object(h.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),"comments"===(null===(e=o.error)||void 0===e?void 0:e.type)&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"})]})}),[o.error,o.commentsPost]);return Object(h.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===(e=o.selectedPost)||void 0===e?void 0:e.id,": ").concat(null===(t=o.selectedPost)||void 0===t?void 0:t.title)}),Object(h.jsx)("p",{"data-cy":"PostBody",children:null===(s=o.selectedPost)||void 0===s?void 0:s.body})]}),Object(h.jsx)("div",{className:"block",children:"comments"===o.load.type&&o.load.active?Object(h.jsx)(N,{}):m}),o.activeForm?Object(h.jsx)(g,{getComments:d}):Object(h.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return i({type:"activeForm",active:!0})},children:"Write a comment"})]})},C=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(r.useContext)(x),o=Object(n.a)(a,2),d=o[0],j=o[1];Object(r.useEffect)((function(){u("/users").then((function(e){"error"in e?j({type:"error",error:Object(l.a)(Object(l.a)({},e),{},{type:"listUsers"})}):c(e)})),document.addEventListener("click",(function(e){"button"!==e.target.parentNode.className&&"icon is-small"!==e.target.parentNode.className&&"dropdown-trigger"!==e.target.parentNode.className&&j({type:"active",show:!1})}))}),[]);var m=Object(r.useMemo)((function(){return s.map((function(e){return Object(h.jsx)("a",{href:"#user-".concat(e.id),className:i()("dropdown-item",{"is-active":d.selectedUser===e}),onClick:function(){return function(e){e!==d.selectedUser&&(j({type:"selectUser",user:e}),j({type:"postsUser",posts:[]}),j({type:"error",error:null}),j({type:"selectPost",post:null})),j({type:"active",show:!1})}(e)},children:e.name},e.id)}))}),[s,d.selectedUser]);return Object(h.jsxs)("div",{"data-cy":"UserSelector",className:i()("dropdown",{"is-active":d.activeList}),children:[Object(h.jsx)("div",{className:"dropdown-trigger",children:Object(h.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return j({type:"active",show:!d.activeList})},children:[Object(h.jsx)("span",{children:d.selectedUser?d.selectedUser.name:"Choose a user"}),Object(h.jsx)("span",{className:"icon is-small",children:Object(h.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(h.jsx)("div",{className:"dropdown-content",children:m})})]})},w=function(){var e,t,s=Object(r.useContext)(x),c=Object(n.a)(s,1)[0];return Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"tile is-ancestor",children:[Object(h.jsx)("div",{className:"tile is-parent",children:Object(h.jsxs)("div",{className:"tile is-child box is-success",children:[Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(C,{})}),Object(h.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!c.selectedUser&&Object(h.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),"postsUser"===c.load.type&&c.load.active&&Object(h.jsx)(N,{}),"listPosts"===(null===(e=c.error)||void 0===e?void 0:e.type)&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),"postsUser"===c.load.type&&!c.load.active&&c.listPostsUser.length<1&&"listPosts"!==(null===(t=c.error)||void 0===t?void 0:t.type)&&Object(h.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),Object(h.jsx)(f,{})]})]})}),Object(h.jsx)("div",{"data-cy":"Sidebar",className:i()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":c.selectedPost}),children:Object(h.jsx)("div",{className:"tile is-child box is-success ",children:c.selectedPost&&Object(h.jsx)(U,{})})})]})})})};a.a.render(Object(h.jsx)(y,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.574ab6a9.chunk.js.map