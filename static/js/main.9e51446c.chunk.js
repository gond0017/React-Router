(this["webpackJsonpReact-Router"]=this["webpackJsonpReact-Router"]||[]).push([[0],{13:function(e,t,a){},19:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/profile_img.0c186373.png"},31:function(e,t,a){e.exports=a(56)},36:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),i=(a(36),a(9)),c=a.n(i),l=a(11),m=a(24),u=a(25),p=a(30),d=a(29);a(38);var f=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"React Navigation"))},E=a(2);a(19);var h=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement(E.c,{to:"/",activeClassName:"active",className:"navLinks"},"Home")," ","  or  ",r.a.createElement(E.c,{to:"/userToDos",className:"navLinks"},"To Do")))};var v=function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement(E.c,{to:"/",activeClassName:"active",className:"navLinks"},"Home")," ","  or  ",r.a.createElement(E.c,{to:"/posts",className:"navLinks"},"Posts")))},N=(a(13),a(28)),g=a.n(N);var y=function(e){return r.a.createElement(E.c,{to:"/userDetails",onClick:function(){return e.getDetails(e.profile)}},r.a.createElement("div",{className:"ProfileCard"},r.a.createElement("div",{className:"profile-avatar"},r.a.createElement("img",{src:g.a,alt:"profile-img"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"left-align"},r.a.createElement("p",{className:"Profile-name"}," ",e.profile.name," ",r.a.createElement("br",null),r.a.createElement("span",{className:"profile-login"}," ",e.profile.email," ")),r.a.createElement("p",{className:"profile-bio"}," ",e.profile.website," / ",e.profile.phone,"  ")))))};var b=function(e){return r.a.createElement("div",{className:"ProfileCard"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"left-align"},r.a.createElement("h3",null,e.post.title," "),r.a.createElement("p",{className:"profile-bio"},e.post.body))))};var T=function(e){var t="";return t=!0===e.todos.completed?"Done!":"Not Done Yet!",r.a.createElement("div",{className:"ProfileCard"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"left-align"},r.a.createElement("h3",null,e.todos.title," "),r.a.createElement("p",{className:"profile-bio"},t))))};a(44);var D=function(e){return r.a.createElement("div",{className:"ProfileCardDetails"},r.a.createElement("div",{className:"card-details-body"},r.a.createElement("h2",null,e.details.name),r.a.createElement("p",{className:"Profile-name"},r.a.createElement("span",{className:"profile-login"},e.details.website)),r.a.createElement("p",{className:"profile-bio"},e.details.phone),r.a.createElement("p",{className:"profile-details-company"},r.a.createElement("h3",null,e.details.company.name),r.a.createElement("p",{className:"profile-login"},e.details.company.catchPhrase,r.a.createElement("h5",null,e.details.company.bs))),r.a.createElement("p",{className:"card-address"},e.details.address.street,r.a.createElement("br",null),e.details.address.suite,r.a.createElement("br",null),e.details.address.city," - ",e.details.address.zipcode)),r.a.createElement("br",null),r.a.createElement("div",{className:"card-buttons"},r.a.createElement(E.b,{to:"/posts",onClick:function(){return e.getPost(e.details)},className:"load-comment load-btn"},"Load Posts"),r.a.createElement(E.b,{to:"/userToDos",onClick:function(){return e.getToDos(e.details)},className:"load-posts load-btn"},"Load To-do")))},k=a(10),P=a(7),w=(a(55),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={profiles:[],userDetails:[],userPosts:[],userToDos:[],displayLoader:!0},e.getDerailedUser=function(){var t=Object(l.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.id,r="https://jsonplaceholder.typicode.com/users/?id=".concat(n),t.next=4,fetch(r).then((function(e){return e.json()})).then((function(t){e.setState({userDetails:t})})).catch((function(e){console.log(e.message)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getPostsOfUser=function(){var t=Object(l.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.id,r="https://jsonplaceholder.typicode.com/posts?userId=".concat(n),t.next=4,fetch(r).then((function(e){return e.json()})).then((function(t){console.log(" => "+t),e.setState({userPosts:t})})).catch((function(e){console.log(e.message)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getToDosOfUser=function(){var t=Object(l.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.id,r="https://jsonplaceholder.typicode.com/todos?userId=".concat(n),t.next=4,fetch(r).then((function(e){return e.json()})).then((function(t){console.log(" => "+t),e.setState({userToDos:t})})).catch((function(e){console.log(e.message)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"getInitialProfiles",value:function(){var e=this;this.setState({displayLoader:!1}),fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.ok?(e.setState({displayLoader:!0}),t.json()):"Something went wrong"})).then((function(t){return e.setState({profiles:t})})).catch(console.error)}},{key:"componentDidMount",value:function(){this.getInitialProfiles()}},{key:"render",value:function(){var e=this,t=this.state.profiles.map((function(t){return r.a.createElement(y,{profile:t,getPost:e.LoadPosts,getDetails:e.getDerailedUser,key:t.id})})),a=this.state.userDetails.map((function(t){return r.a.createElement(D,{key:t.id,getToDos:e.getToDosOfUser,getPost:e.getPostsOfUser,details:t})})),n=this.state.userPosts.map((function(e){return r.a.createElement(b,{key:e.id,post:e})})),o=this.state.userToDos.map((function(e){return r.a.createElement(T,{key:e.id,todos:e})}));return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/"},r.a.createElement(f,null),r.a.createElement("main",{className:"profileList",style:{padding:"2rem"}},r.a.createElement(k.CSSTransitionGroup,{component:"div",transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:200,transitionEnterTimeout:250,transitionLeaveTimeout:250},t))),r.a.createElement(P.a,{exact:!0,path:"/posts"},r.a.createElement(h,null),r.a.createElement("main",{className:"profileList",style:{padding:"2rem"}},r.a.createElement(k.CSSTransitionGroup,{component:"div",transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:200,transitionEnterTimeout:250,transitionLeaveTimeout:225},n))),r.a.createElement(P.a,{exact:!0,path:"/userDetails"},r.a.createElement("main",{className:"profileList",style:{padding:"2rem"}},r.a.createElement(k.CSSTransitionGroup,{component:"div",transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:200,transitionEnterTimeout:250,transitionLeaveTimeout:225},a))),r.a.createElement(P.a,{exact:!0,path:"/userToDos"},r.a.createElement(v,null),r.a.createElement("main",{className:"profileList",style:{padding:"2rem"}},r.a.createElement(k.CSSTransitionGroup,{component:"div",transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:200,transitionEnterTimeout:250,transitionLeaveTimeout:225},o))))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.9e51446c.chunk.js.map