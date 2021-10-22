(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{2:function(e,t,n){e.exports={searchCont:"style_searchCont__1AzEo",buttonCont:"style_buttonCont__ZF5Dc",input:"style_input__39U-9",iconCont:"style_iconCont__3_G87",icon:"style_icon__2rB5x",gallery:"style_gallery__sUMci",photoCard:"style_photoCard__2nIXB",photoImg:"style_photoImg__2m7qZ",overlay:"style_overlay__2gacz",closeButton:"style_closeButton__C-xQG",modalContainer:"style_modalContainer__2Ksxi",modalImg:"style_modalImg__1vs8z",spinContainer:"style_spinContainer__exWmd"}},33:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),s=(n(33),n(22)),i=n(23),l=n(28),u=n(26),d=n(5),j=n(2),b=n.n(j),h=n(27),m=n(1);function O(e){var t=e.handleSubmit,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)("What to search?"),i=Object(d.a)(s,2),l=i[0],u=i[1],j=function(e){e.preventDefault(),""!==r.trim()?(t(r.trim()),u(r),o("")):u("What to search?")};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:b.a.searchCont,children:Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsx)("input",{className:b.a.input,type:"text",value:r,placeholder:l,onChange:function(e){o(e.target.value)}}),Object(m.jsx)("div",{className:b.a.iconCont,onClick:j,children:Object(m.jsx)(h.a,{className:b.a.icon})})]})})})}function f(e){var t=e.handleLoadMore;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:b.a.buttonCont,children:Object(m.jsx)("button",{className:b.a.input,type:"button",onClick:t,children:"Load more"})})})}var p=n(13),g=n(7),_=(n(35),n(36),n(24)),v=n.n(_);function y(){var e=this,t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)("idle"),s=Object(d.a)(o,2),i=s[0],l=s[1],u=Object(c.useState)(!1),j=Object(d.a)(u,2),h=j[0],_=j[1],y=Object(c.useRef)(0),k=Object(c.useRef)(""),w=Object(c.useRef)(1),S=Object(c.useRef)(""),I=function(){y.current=document.querySelector("body").clientHeight},F=Object(c.useCallback)((function(t){""!==k&&(I(),w.current=1,k.current=t,l("pending"),N(w.current,k.current).then((function(e){e.data.hits.length<1?(g.b.warn("Check your request, no data received"),l("idle")):(r(e.data.hits),l("resolved"))})).catch((function(){return e.setStatus("reject")})))}),[]),M=Object(c.useCallback)((function(){""!==k&&(I(),l("pending"),w.current=w.current+1,N(w.current,k.current).then((function(e){e.data.hits.length<1?(g.b.warn("These are all pictures for this request"),l("idle")):(r((function(t){return[].concat(Object(p.a)(t),Object(p.a)(e.data.hits))})),l("resolved"),window.scrollTo({top:y.current-35,behavior:"smooth"}))})).catch((function(e){l("reject"),console.log(e)})))}),[]),B=function(e){var t=e.target.id,n=a.find((function(e){return e.id.toString()===t}));if(n)return n.largeImageURL};return Object(m.jsxs)(m.Fragment,{children:["reject"===i&&g.b.error("unknown error, check connection"),"pending"===i&&Object(m.jsx)("div",{className:b.a.spinContainer,children:Object(m.jsx)(v.a,{type:"Circles",color:"#00BFFF",height:120,width:120})}),h&&Object(m.jsx)(C,{closeModal:function(){_(!1),l("resolved")},children:Object(m.jsx)("img",{src:S.current,className:b.a.modalImg,alt:""})}),Object(m.jsx)(O,{handleSubmit:F}),Object(m.jsx)("ul",{className:b.a.gallery,children:Object(m.jsx)(x,{dataArray:a,openModalData:function(e){_(!0),S.current=B(e),l("idle")}})}),"resolved"===i&&Object(m.jsx)(f,{handleLoadMore:M})]})}function x(e){var t=e.dataArray,n=e.openModalData;return t.map((function(e){return Object(m.jsx)("li",{className:b.a.photoCard,id:e.id,children:Object(m.jsx)("img",{onClick:function(e){return n(e)},className:b.a.photoImg,src:e.webformatURL,alt:"",id:e.id})},e.id)}))}function C(e){var t=e.closeModal,n=e.children,a=Object(c.useRef)(document.querySelector("#modal-root")),o=function(e){"Escape"===e.code&&t()};Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}}));return Object(r.createPortal)(Object(m.jsxs)("div",{className:b.a.overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:[Object(m.jsx)("div",{className:b.a.modalContainer,children:n}),Object(m.jsx)("button",{type:"button",onClick:t,className:b.a.closeButton,children:"Close"})]}),a.current)}var k=n(25),w=n.n(k);function N(e,t){var n="".concat("https://pixabay.com/api/","?key=").concat("23012527-abace86bcdc7661bfd5472938","&per_page=12&page=").concat(e,"&q=").concat(t);return w.a.get(n)}n(75);var S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(g.a,{})]})}}]),n}(c.Component),I=S;o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.0006c09b.chunk.js.map