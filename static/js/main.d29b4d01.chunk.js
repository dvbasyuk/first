(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(40),a=n(5),o={dialogs:[{id:1,name:"Darya"},{id:2,name:"Dima"},{id:3,name:"Alex"}],messages:[{id:1,message:"Hi"},{id:2,message:"How a u?"},{id:3,message:"Ok)"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])});default:return e}}},112:function(e,t,n){e.exports=n.p+"static/media/photo.9fb36427.jpg"},12:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return i});var r=n(127),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"9cc2d60a-aa04-4bfb-8ef9-14dfe08c3a3b"}}),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/"+e).then(function(e){return e.data.resultCode})},unfollow:function(e){return a.delete("follow/"+e).then(function(e){return e.data.resultCode})},getUserInfo:function(e){return u.getUserInfo(e)}},u={getUserInfo:function(e){return a.get("profile/"+e).then(function(e){return e.data})},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("Image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile/",e)}},c={getAuth:function(){return a.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then(function(e){return e.data})},logout:function(){return a.delete("auth/login").then(function(e){return e.data})}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url").then(function(e){return e.data})}}},132:function(e,t,n){e.exports={item:"Users_item__3luEr",selectedPage:"Users_selectedPage__2wVm4"}},133:function(e,t,n){e.exports=n.p+"static/media/loading-gif.c336831c.gif"},14:function(e,t,n){e.exports={nav:"Navbar_nav__1fiB0",item:"Navbar_item__3hJGI",activeLink:"Navbar_activeLink__3Pbfl"}},161:function(e,t,n){e.exports=n(290)},166:function(e,t,n){},167:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return f});var r=n(90),a=n(0),o=n.n(a),u=n(85),c=n(30),i=n.n(c),s=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,a))),u&&o.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,a))),u&&o.a.createElement("span",null,n.error))},f=function(e,t,n,r,a){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,component:t,name:n,validate:r},a)),c)}},290:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(125),u=n.n(o),c=(n(166),n(33)),i=n(34),s=n(36),l=n(35),f=(n(167),n(130)),p=n(295),m=n(293),d=n(8),g=n(13),h=n(5),b=n(7),E=n.n(b),v=n(11),O=n(26),w=n(12),S={id:null,login:null,email:null,isAuth:!1,captchUrl:null},j=function(e,t,n,r){return{type:"react/auth/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},C=function(){return function(){var e=Object(v.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.getAuth();case 2:0===(n=e.sent).resultCode&&t(j(n.data.id,n.data.email,n.data.login,!0));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},_=function(){return function(){var e=Object(v.a)(E.a.mark(function e(t){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t({type:"react/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchUrl:r}});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"react/auth/SET_USER_DATA":case"react/auth/GET_CAPTCHA_URL_SUCCESS":return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},y={initialized:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},N=n(91),T=n(101),k={},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;arguments.length>1&&arguments[1];return e},x=n(40),A=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(h.a)(Object(h.a)({},e),r):e})},L={users:[],pageSize:20,currentPage:1,totalUsersCount:0,isFatching:!1,followingInProgress:[]},F=function(e){return{type:"FOLLOW",userId:e}},R=function(e){return{type:"UNFOLLOW",userId:e}},z=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},G=function(e,t){return{type:"TOGGLFOLLOWING_IN_PROGRESS",isFatching:e,userId:t}},D=function(){var e=Object(v.a)(E.a.mark(function e(t,n,r,a){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,n)),e.next=3,r(n);case 3:0==e.sent&&t(a(n)),t(G(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(h.a)(Object(h.a)({},e),{},{users:t.users});case"SET-USERS-TOTAL-COUNT":return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:t.totalCount});case"SET-CURRENT-PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.pageNumber});case"TOGGLE-IS-FETCHING":return Object(h.a)(Object(h.a)({},e),{},{isFatching:t.isFetching});case"TOGGLFOLLOWING_IN_PROGRESS":return Object(h.a)(Object(h.a)({},e),{},{followingInProgress:t.isFatching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},H=n(128),W=n(124),B=Object(d.c)({profilePage:N.b,dialogsPage:T.a,sidebar:I,usersPage:M,auth:P,app:U,form:W.a}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,V=Object(d.e)(B,q(Object(d.a)(H.a))),Z=n(14),J=n.n(Z),X=n(294),K=function(){return a.a.createElement("nav",{className:J.a.nav},a.a.createElement("div",{className:J.a.item},a.a.createElement(X.a,{to:"/profile",activeClassName:J.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(J.a.item," ").concat(J.a.active)},a.a.createElement(X.a,{to:"/dialogs",activeClassName:J.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(J.a.item," ").concat(J.a.active)},a.a.createElement(X.a,{to:"/users",activeClassName:J.a.activeLink},"Users")),a.a.createElement("div",{className:J.a.item},a.a.createElement("a",null,"News")),a.a.createElement("div",{className:J.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:J.a.item},a.a.createElement("a",null,"Settings")))},Y=n(63),$=n(92),Q=n(68),ee=n.n(Q),te=n(131),ne=n.n(te),re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onCangePage,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),m=Object(r.useState)(1),d=Object($.a)(m,2),g=d[0],h=d[1],b=(g-1)*i+1,E=g*i;return a.a.createElement("div",{className:ee.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}}," ","<<"," "),l.filter(function(e){return e>=b&&e<=E}).map(function(e){return a.a.createElement("span",{className:ne()(Object(Y.a)({},ee.a.selectedPage,o===e),ee.a.pageNamber),key:e,onClick:function(){u(e)}},e)}),g<p&&a.a.createElement("button",{onClick:function(){h(g+1)}}," ",">>"," "))},ae=n(132),oe=n.n(ae),ue=n(112),ce=n.n(ue),ie=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",{className:oe.a.item},a.a.createElement(X.a,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ce.a}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status))),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city")))},se=function(e){return a.a.createElement("div",null,a.a.createElement(re,{currentPage:e.currentPage,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onCangePage:e.onCangePage}),e.users.map(function(t){return a.a.createElement(ie,{key:t.id,user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})}))},le=n(60),fe=n(134),pe=Object(fe.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),me=function(e){return e.usersPage.pageSize},de=function(e){return e.usersPage.totalUsersCount},ge=function(e){return e.usersPage.currentPage},he=function(e){return e.usersPage.isFatching},be=function(e){return e.usersPage.followingInProgress},Ee=function(e){return e.auth.isAuth},ve=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onCangePage=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFatching?a.a.createElement(le.a,null):"",a.a.createElement(se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,followingInProgress:this.props.followingInProgress,onCangePage:this.onCangePage,unfollow:this.props.unfollow,follow:this.props.follow}))}}]),n}(a.a.Component),Oe=Object(g.b)(function(e){return{users:pe(e),pageSize:me(e),totalUsersCount:de(e),currentPage:ge(e),isFatching:he(e),followingInProgress:be(e),isAuth:Ee(e)}},{follow:function(e){return function(){var t=Object(v.a)(E.a.mark(function t(n){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,w.d.follow.bind(e),F);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(E.a.mark(function t(n){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,w.d.unfollow.bind(e),R);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var n=Object(v.a)(E.a.mark(function n(r){return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r({type:"SET-CURRENT-PAGE",pageNumber:e}),n.next=4,w.d.getUsers(e,t).then(function(e){r(z(!1)),r({type:"SET-USERS",users:e.items}),r({type:"SET-USERS-TOTAL-COUNT",totalCount:e.totalCount})});case 4:n.sent;case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(ve),we=n(87),Se=n.n(we),je=function(e){return a.a.createElement("header",{className:Se.a.header},a.a.createElement("img",{src:"https://img2.freepng.ru/20180412/tae/kisspng-computer-icons-service-mark-symbol-logo-trademark-dot-5ad008be402cd9.9401964215235831662629.jpg"}),a.a.createElement("div",{className:Se.a.login},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")," "):a.a.createElement(X.a,{to:"/login"},"Login")))},Ce=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(je,this.props)}}]),n}(a.a.Component),_e=Object(g.b)(function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}},{logout:function(){return function(){var e=Object(v.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Ce),Pe=n(292),ye=n(123),Ue=n(61),Ne=n(21),Te=n(30),ke=n.n(Te),Ie=Object(ye.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchUrl;return a.a.createElement("form",{onSubmit:t},Object(Ne.c)("Login",Ne.a,"login",[Ue.b]),Object(Ne.c)("Password",Ne.a,"password",[Ue.b],{type:"password"}),Object(Ne.c)(null,Ne.a,"rememberMe",[],{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(Ne.c)("Symbols from image",Ne.a,"captcha",[Ue.b]),n&&a.a.createElement("div",{className:ke.a.forSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),xe=Object(g.b)(function(e){return{isAuth:e.auth.isAuth,captchUrl:e.auth.captchUrl}},{login:function(e,t,n,r){return function(){var a=Object(v.a)(E.a.mark(function a(o){var u,c;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n,r);case 2:0===(u=a.sent).resultCode?o(C()):(10===u.resultCode&&o(_()),c=u.messages.length>0?u.messages[0]:"Some error",o(Object(O.a)("login",{_error:c})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(Pe.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"login"),a.a.createElement(Ie,{onSubmit:function(t){console.log(t),e.login(t.login,t.password,t.rememberMe,t.captcha)},captchUrl:e.captchUrl}))}),Ae=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Lading...")},a.a.createElement(e,t))}},Le=a.a.lazy(function(){return n.e(4).then(n.bind(null,301))}),Fe=a.a.lazy(function(){return n.e(3).then(n.bind(null,300))}),Re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(_e,null),a.a.createElement(K,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(f.a,{path:"/dialogs",render:Ae(Le)}),a.a.createElement(f.a,{path:"/profile/:id?",render:Ae(Fe)}),a.a.createElement(f.a,{path:"/users",render:function(){return a.a.createElement(Oe,null)}}),a.a.createElement(f.a,{path:"/login",render:function(){return a.a.createElement(xe,null)}}))):a.a.createElement(le.a,null)}}]),n}(a.a.Component),ze=Object(d.d)(p.a,Object(g.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(C()).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Re),Ge=function(e){return a.a.createElement(m.a,null,a.a.createElement(g.a,{store:V},a.a.createElement(ze,null)))};u.a.render(a.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,n){e.exports={formControl:"FormsControl_formControl__H_tN-",error:"FormsControl_error__HUXxC",forSummaryError:"FormsControl_forSummaryError__1AZzF"}},60:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(133),u=n.n(o);t.a=function(){return a.a.createElement("img",{src:u.a,width:"100px"})}},61:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},68:function(e,t,n){e.exports={paginator:"Paginator_paginator__2Oglf",selectedPage:"Paginator_selectedPage__2hK1C",pageNamber:"Paginator_pageNamber__1OZ8p"}},87:function(e,t,n){e.exports={header:"Header_header__3MhMc",login:"Header_login__1Eu4T"}},91:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"g",function(){return d}),n.d(t,"c",function(){return g}),n.d(t,"f",function(){return h}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return E});var r=n(7),a=n.n(r),o=n(11),u=n(40),c=n(5),i=n(26),s=n(12),l={posts:[{id:1,message:"Hi!!",likesCount:21},{id:2,message:"How are you?",likesCount:37}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return{type:"SAVE_PHOTO_SUCCESS",file:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getUserInfo(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n(m(r.data.data.photos));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n,r){var o,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.id,t.next=3,s.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=10;break;case 8:return n(Object(i.a)("editProfile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.file})});default:return e}}}},[[161,1,2]]]);
//# sourceMappingURL=main.d29b4d01.chunk.js.map