(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(37)},24:function(e,a,t){},26:function(e,a,t){},29:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(14),c=t.n(r),s=t(3),m=(t(24),t(4)),i=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,s=i.includes(r)?r:i[0],u=o.includes(c)?c:o[0];return l.a.createElement(m.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(26);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),i=Object(s.a)(c,2),o=i[0],E=i[1],b=function(){return r(!1)},d=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)(function(){d()},[]),window.addEventListener("resize",d),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:b},"Erdal Ustalar",l.a.createElement("i",{class:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/services",className:"nav-links",onClick:b},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/products",className:"nav-links",onClick:b},"Products")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/erdalcv",className:"nav-links",onClick:b},"Resume")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Sign Up"))),o&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))},b=t(0);t(9),t(29);var d=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"ADVENTURE AWAITS"),l.a.createElement("p",null,"What are you waiting for?"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"WATCH TRAILER ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(31);var p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(m.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var f=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these EPIC Destinations!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(p,{src:"images/img-3.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),l.a.createElement(p,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(p,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(p,{src:"images/img-4.JPG",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),l.a.createElement(p,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})))))};t(33);var v=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(m.b,{to:"/sign-up"},"How it works"),l.a.createElement(m.b,{to:"/"},"Testimonials"),l.a.createElement(m.b,{to:"/"},"Careers"),l.a.createElement(m.b,{to:"/"},"Investors"),l.a.createElement(m.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(m.b,{to:"/"},"Contact"),l.a.createElement(m.b,{to:"/"},"Support"),l.a.createElement(m.b,{to:"/"},"Destinations"),l.a.createElement(m.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(m.b,{to:"/"},"Submit Video"),l.a.createElement(m.b,{to:"/"},"Ambassadors"),l.a.createElement(m.b,{to:"/"},"Agency"),l.a.createElement(m.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(m.b,{to:"/"},"Instagram"),l.a.createElement(m.b,{to:"/"},"Facebook"),l.a.createElement(m.b,{to:"/"},"Youtube"),l.a.createElement(m.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(m.b,{to:"/",className:"social-logo"},"Noname",l.a.createElement("i",{class:"fab fa-typo3"}))),l.a.createElement("small",{class:"website-rights"},"Noname \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(m.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(m.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(m.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(v,null))},N=t(5),h=function(e){var a=e.task,t=e.onDelete;return l.a.createElement("li",{className:"flex justify-between items-center bg-gray-700 p-2 mb-2 rounded-lg"},l.a.createElement("span",null,a),l.a.createElement("button",{className:"px-2 py-1 bg-red-600 rounded-lg hover:bg-red-500",onClick:t},"X"))};function k(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"min-h-screen bg-gray-800 text-white"},l.a.createElement("header",{className:"bg-gray-700 p-4"},l.a.createElement("h1",{className:"text-3xl font-bold"},"My Todo List")),l.a.createElement("main",{className:"p-4"},l.a.createElement("div",{className:"flex justify-between items-center mb-4"},l.a.createElement("input",{type:"text",id:"taskInput",className:"p-2 bg-gray-700 border-2 border-gray-600 rounded-lg w-full mr-2"}),l.a.createElement("button",{className:"px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500",onClick:function(){var e=document.querySelector("#taskInput").value;r([].concat(Object(N.a)(t),[e])),document.querySelector("#taskInput").value=""}},"Add Task")),l.a.createElement("ul",null,t.map(function(e,a){return l.a.createElement(h,{key:a,task:e,onDelete:function(){return function(e){r(t.filter(function(a,t){return t!==e}))}(a)}})}))))}function y(){return l.a.createElement("h1",{className:"products"},"PRODUCTS",l.a.createElement(f,null))}t(35);var w=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(s.a)(c,2),i=m[0],o=m[1],u=function(e){return e===t.name&&l.a.createElement("div",{className:"error"},t.message)},E=[{username:"user1",password:"pass1"},{username:"user2",password:"pass2"}],b="invalid username",d="invalid password",p=l.a.createElement("div",{className:"form"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=document.forms[0],t=a.uname,n=a.pass,l=E.find(function(e){return e.username===t.value});l?l.password!==n.value?r({name:"pass",message:d}):o(!0):r({name:"uname",message:b})}},l.a.createElement("div",{className:"input-container"},l.a.createElement("label",null,"Username "),l.a.createElement("input",{type:"text",name:"uname",required:!0}),u("uname")),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",null,"Password "),l.a.createElement("input",{type:"password",name:"pass",required:!0}),u("pass")),l.a.createElement("div",{className:"button-container"},l.a.createElement("input",{type:"submit"}))));return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"login-form"},l.a.createElement("div",{className:"title"},"Sign In"),i?l.a.createElement("div",null,"User is successfully logged in"):p))};var _=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"images/beautifull.jpg",alt:"blaaaaaaaaa\r "}),"My resumea")};var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(E,null),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",element:l.a.createElement(g,null)}),l.a.createElement(b.a,{path:"/services",element:l.a.createElement(k,null)}),l.a.createElement(b.a,{path:"/products",element:l.a.createElement(y,null)}),l.a.createElement(b.a,{path:"/sign-up",element:l.a.createElement(w,null)}),l.a.createElement(b.a,{path:"/erdalcv",element:l.a.createElement(_,null)}))))},C=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,38)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(S,null)),C()},9:function(e,a,t){}},[[15,3,2]]]);
//# sourceMappingURL=main.a58aabcf.chunk.js.map