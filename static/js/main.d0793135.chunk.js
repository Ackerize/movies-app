(this["webpackJsonp17-movie-app"]=this["webpackJsonp17-movie-app"]||[]).push([[0],{31:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(23),l=a.n(n),s=(a(31),a(3)),r=a(8),o=a(2),i=a(5),d=a.n(i),b=a(0),j=function(e){var t=e.children,a=e.onClick,c=e.color,n=void 0===c?"bg-red-600":c;return Object(b.jsx)("button",{className:"flex items-center justify-center ".concat(n," font-semibold text-white p-2 w-32 rounded-full hover:").concat(n," focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"),onClick:a,children:t})},u=function(e){var t=e.movie,a=t._id,c=t.calificacion,n=t.fechaLanzamiento,l=t.titulo,s=t.descripcion,o=t.genero,i=t.posterURL;return Object(b.jsx)("div",{className:" py-6 flex flex-col justify-center sm:py-12 mb-8",children:Object(b.jsx)("div",{className:"py-3 sm:max-w-xl sm:mx-auto",children:Object(b.jsxs)("div",{className:"bg-white shadow-lg border-gray-100 max-h-80\t border sm:rounded-3xl p-8 flex space-x-8",children:[Object(b.jsx)("div",{className:"h-48 overflow-visible w-1/2",children:Object(b.jsx)("img",{className:"rounded-3xl shadow-lg",src:i,alt:""})}),Object(b.jsxs)("div",{className:"flex flex-col w-1/2 space-y-4",children:[Object(b.jsxs)(r.b,{to:"/movie/".concat(a),className:"flex justify-between items-start",children:[Object(b.jsx)("h2",{className:"text-3xl font-bold mr-4 hover:underline",children:l}),Object(b.jsx)("div",{className:"bg-yellow-400 font-bold rounded-xl p-2",children:c.toFixed(1)})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"text-sm text-gray-400",children:o.join(", ")}),Object(b.jsx)("div",{className:"text-lg text-gray-800",children:n})]}),Object(b.jsx)("p",{className:" text-gray-400 max-h-40 overflow-y-hidden line-clamp",children:s})]})]})})})},m=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"flex justify-evenly flex-wrap",children:t.map((function(e){return Object(b.jsx)(u,{movie:e},e._id)}))})},x=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",x:"0",y:"0",className:"h-4 w-4 fill-current",enableBackground:"new 0 0 56.966 56.966",version:"1.1",viewBox:"0 0 56.966 56.966",xmlSpace:"preserve",children:Object(b.jsx)("path",{d:"M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"})})},h=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(s.a)(a,2),l=n[0],r=n[1];return Object(b.jsxs)("form",{className:"relative text-gray-600 w-1/4 mt-8 mx-auto",onSubmit:function(e){r(""),t(e,l)},children:[Object(b.jsx)("input",{type:"text",placeholder:"Search",className:"bg-white h-10 px-5 pr-10 rounded-full text-lg focus:outline-none w-full",value:l,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{type:"submit",className:"absolute right-0 top-0 mt-3 mr-4",children:Object(b.jsx)(x,{})})]})},p="https://movie-api-web-2021.herokuapp.com/api/v1",f=function(e){var t=e.setToken,a=e.type,n=Object(c.useState)([]),l=Object(s.a)(n,2),r=l[0],i=l[1],u=Object(c.useState)([]),x=Object(s.a)(u,2),f=x[0],g=x[1],O=localStorage.getItem("token"),v="Bearer ".concat(O),y=Object(o.g)();Object(c.useEffect)((function(){d.a.get("".concat(p,"/peliculas"),{headers:{authorization:v}}).then((function(e){var t=e.data.peliculas;i(t),g(t)})).catch((function(e){return console.log(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"flex justify-center items-center",children:[Object(b.jsx)(h,{onSubmit:function(e,t){e.preventDefault(),t.length>0?d.a.get("".concat(p,"/peliculas/search/").concat(t),{headers:{authorization:v}}).then((function(e){var t=e.data.peliculas;i(t)})).catch((function(e){return console.log(e)})):i(f)}}),"admin"===a&&Object(b.jsx)("div",{className:"mr-8 mt-4",children:Object(b.jsx)(j,{color:"bg-green-500",onClick:function(){return y("/movie/new")},children:"New"})}),Object(b.jsx)("div",{className:"mr-8 mt-4",children:Object(b.jsx)(j,{onClick:function(){t(null),localStorage.removeItem("token")},children:"Logout"})})]}),Object(b.jsx)(m,{movies:r})]})},g=a(4),O=a(9),v=a(26),y=function(e){var t=e.children,a=e.bgColor,c=void 0===a?"bg-white":a,n=e.hoverColor,l=void 0===n?"bg-gray-100":n,s=e.textColor,r=void 0===s?"text-gray-600":s,o=e.onClick,i=e.type,d=void 0===i?"button":i;return Object(b.jsx)("button",{className:"mb-2 md:mb-0 ".concat(c," px-5 py-2 text-sm shadow-sm font-medium tracking-wider ").concat(r," rounded-full hover:shadow-lg hover:").concat(l),onClick:o,type:d,children:t})},N=function(e){var t=e.label,a=e.activeLabel,c=e.inactiveLabel,n=e.name,l=e.value,s=e.onChange;return Object(b.jsxs)("label",{className:"flex items-center relative w-max cursor-pointer select-none mt-6",children:[Object(b.jsx)("span",{className:"text-xs font-semibold mr-3",children:t}),Object(b.jsx)("input",{type:"checkbox",name:n,value:l,onChange:s,checked:l,className:"appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none  bg-red-500"}),Object(b.jsxs)("span",{className:"absolute font-medium text-xs uppercase right-1 text-white",children:[" ",c," "]}),Object(b.jsxs)("span",{className:"absolute font-medium text-xs uppercase right-8 text-white",children:[" ",a," "]}),Object(b.jsx)("span",{className:"w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200"})]})},w=function(e){var t=e.label,a=e.required,c=e.placeholder,n=e.type,l=void 0===n?"text":n,s=e.name,r=e.value,o=e.onChange;return Object(b.jsxs)("div",{className:"mb-3 space-y-2 w-full text-xs",children:[Object(b.jsxs)("label",{className:"font-semibold text-gray-600 py-2",children:[t," ",a&&Object(b.jsx)("abbr",{title:"required",className:"text-red-600",children:"*"})]}),Object(b.jsx)("input",{placeholder:c,className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4",required:a,type:l,name:s,value:r,onChange:o})]})},k=function(e){var t=e.label,a=e.required,c=e.name,n=e.placeholder,l=e.value,s=e.onChange;return Object(b.jsxs)("div",{className:"flex-auto w-full mb-1 text-xs space-y-2",children:[Object(b.jsx)("label",{className:"font-semibold text-gray-600 py-2",children:t}),Object(b.jsx)("textarea",{required:a,name:c,className:"w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4",placeholder:n,spellCheck:"false",value:l,onChange:s})]})},C=["_id","__v","createdAt","updatedAt","conteoVotos","calificacion"],S=function(e){var t=e.onSubmit,a=e.handleDelete,n=e.editMovie,l=Object(c.useState)({titulo:"",descripcion:"",duracion:"",genero:[],director:"",fechaLanzamiento:"",posterURL:"",adulto:!1}),r=Object(s.a)(l,2),i=r[0],d=r[1];Object(c.useEffect)((function(){if(n){n._id,n.__v,n.createdAt,n.updatedAt,n.conteoVotos,n.calificacion;var e=Object(v.a)(n,C);d(Object(g.a)(Object(g.a)({},e),{},{genero:n.genero.join(", ")}))}}),[n]);var j=Object(o.g)(),u=function(e){var t=e.target,a=t.name,c=t.value,n=t.type,l=t.checked;d("checkbox"===n?Object(g.a)(Object(g.a)({},i),{},{adulto:l}):Object(g.a)(Object(g.a)({},i),{},Object(O.a)({},a,c)))};return Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(i)},children:[Object(b.jsx)(w,{label:"Nombre",required:!0,placeholder:"Nombre de la pel\xedcula",name:"titulo",value:i.titulo,onChange:u}),Object(b.jsx)(w,{label:"Director",required:!0,placeholder:"Nombre del director",name:"director",value:i.director,onChange:u}),Object(b.jsx)(k,{label:"Descripcion",required:!0,placeholder:"Ingrese la descripci\xf3n de la pel\xedcula",name:"descripcion",value:i.descripcion,onChange:u}),Object(b.jsx)(w,{label:"A\xf1o de lanzamiento",required:!0,placeholder:"A\xf1o de lanzamiento de la pel\xedcula",name:"fechaLanzamiento",value:i.fechaLanzamiento,onChange:u}),Object(b.jsx)(w,{label:"G\xe9neros",required:!0,placeholder:"G\xe9neros de la pel\xedcula",name:"genero",value:i.genero,onChange:u}),Object(b.jsx)(w,{label:"Duraci\xf3n (en minutos)",required:!0,placeholder:"Duraci\xf3n en minutos de la pel\xedcula",name:"duracion",type:"number",value:i.duracion,onChange:u}),Object(b.jsx)(w,{label:"URL Poster",required:!0,placeholder:"URL del poster de la pel\xedcula",name:"posterURL",value:i.posterURL,onChange:u}),Object(b.jsx)(N,{name:"adulto",label:"Adulto?",activeLabel:"S\xcd",inactiveLabel:"NO",value:i.adulto,onChange:u}),Object(b.jsxs)("p",{className:"text-xs text-red-500 text-right my-3",children:["Campos requeridos est\xe1n marcados con un asterisco"," ",Object(b.jsx)("abbr",{title:"Required field",children:"*"})]}),Object(b.jsxs)("div",{className:"mt-5 text-right md:space-x-3 md:block flex flex-col-reverse",children:[Object(b.jsx)(y,{onClick:function(){return j("/home")},children:"Regresar"}),n&&Object(b.jsx)(y,{bgColor:"bg-red-400",hoverColor:"bg-red-500",textColor:"text-white",onClick:a,children:"Eliminar"}),Object(b.jsx)(y,{bgColor:"bg-green-400",hoverColor:"bg-green-500",textColor:"text-white",type:"submit",children:"Guardar"})]})]})})},z=function(e){var t=e.children;return Object(b.jsxs)("div",{className:"flex flex-col sm:flex-row items-center",children:[Object(b.jsx)("h2",{className:"font-semibold text-lg text-center w-full",children:t}),Object(b.jsx)("div",{className:"w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"})]})},L=function(){var e=localStorage.getItem("token"),t="Bearer ".concat(e),a=Object(o.g)(),n=Object(c.useState)(null),l=Object(s.a)(n,2),r=l[0],i=l[1],j=Object(o.h)().idMovie;Object(c.useEffect)((function(){j&&d.a.get("".concat(p,"/peliculas/").concat(j),{headers:{authorization:t}}).then((function(e){var t=e.data.pelicula;i(t)})).catch((function(e){console.log(e)}))}),[]);return Object(b.jsxs)("div",{className:"min-h-screen flex justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center",children:[Object(b.jsx)("div",{className:"absolute bg-black opacity-60 inset-0 z-0"}),Object(b.jsx)("div",{className:"max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10",children:Object(b.jsx)("div",{className:"grid  gap-8 grid-cols-1",children:Object(b.jsxs)("div",{className:"flex flex-col ",children:[Object(b.jsx)(z,{children:"Crear pel\xedcula"}),Object(b.jsx)(S,{onSubmit:j?function(e){var c=Object(g.a)(Object(g.a)({},e),{},{genero:e.genero.split(", "),duracion:Number(e.duracion)});d.a.put("".concat(p,"/peliculas/").concat(j),c,{headers:{authorization:t}}).then((function(e){var t=e.data.message;alert(t),a("/home")})).catch((function(e){return console.log(e)}))}:function(e){var c=Object(g.a)(Object(g.a)({},e),{},{genero:e.genero.split(", "),duracion:Number(e.duracion)});d.a.post("".concat(p,"/peliculas"),c,{headers:{authorization:t}}).then((function(e){var t=e.data.message;alert(t),a("/home")})).catch((function(e){return console.log(e)}))},handleDelete:function(){d.a.delete("".concat(p,"/peliculas/").concat(j),{headers:{authorization:t}}).then((function(e){var t=e.data.message;alert(t),a("/home")})).catch((function(e){return console.log(e)}))},editMovie:r})]})})})]})},T=a(12),q=a.n(T),R=function(e){var t=e.show,a=e.onRating,n=e.setShow,l=Object(c.useState)(0),r=Object(s.a)(l,2),o=r[0],i=r[1];return t?Object(b.jsx)("div",{className:"fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto",children:Object(b.jsx)("div",{className:"py-3 sm:max-w-xl sm:mx-auto",children:Object(b.jsxs)("div",{className:"bg-white min-w-1xl flex flex-col rounded-xl shadow-lg",children:[Object(b.jsx)("div",{className:"px-12 py-5",children:Object(b.jsx)("h2",{className:"text-gray-800 text-3xl font-semibold",children:"\xa1Tu opini\xf3n nos importa!"})}),Object(b.jsxs)("div",{className:"bg-gray-200 w-full flex flex-col items-center",children:[Object(b.jsxs)("div",{className:"flex flex-col items-center py-6 space-y-3",children:[Object(b.jsx)("span",{className:"text-lg text-gray-800",children:"\xbfC\xf3mo fue la calidad de la pel\xedcula?"}),Object(b.jsx)("div",{className:"flex space-x-3",children:Object(b.jsx)(q.a,{size:60,isHalf:!0,onChange:i})})]}),Object(b.jsx)("div",{className:"w-3/4 flex flex-col",children:Object(b.jsx)("button",{className:"py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white",onClick:function(){return a(o)},children:"Calificar ahora"})})]}),Object(b.jsx)("div",{className:"h-20 flex items-center justify-center",children:Object(b.jsx)("span",{className:"text-gray-600 cursor-pointer hover:underline",onClick:function(){return n(!1)},children:"Tal vez m\xe1s tarde"})})]})})}):null},M=a(25),A=function(e){var t=e.type,a=void 0===t?"user":t,n=localStorage.getItem("token"),l="Bearer ".concat(n),r=Object(o.h)().idMovie,i=Object(o.g)(),u=Object(c.useState)(null),m=Object(s.a)(u,2),x=m[0],h=m[1],f=Object(c.useState)(!1),g=Object(s.a)(f,2),O=g[0],v=g[1];Object(c.useEffect)((function(){d.a.get("".concat(p,"/peliculas/").concat(r),{headers:{authorization:l}}).then((function(e){var t=e.data.pelicula;h(t)})).catch((function(e){return console.log(e)}))}),[]);if(!x)return null;var y=x._id,N=x.calificacion,w=x.fechaLanzamiento,k=x.titulo,C=x.descripcion,S=x.genero,z=x.posterURL,L=x.director,T=x.duracion,A=x.adulto,D=x.conteoVotos;return Object(b.jsxs)("section",{className:"text-gray-700 body-font overflow-visible bg-white h-screen",children:[Object(b.jsx)(R,{show:O,onRating:function(e){var t={calificacion:e};d.a.patch("".concat(p,"/peliculas/").concat(y),t,{headers:{authorization:l}}).then((function(e){var t=e.data;alert(t.message),v(!1)})).catch((function(e){return console.log(e)}))},setShow:v}),Object(b.jsx)("div",{className:"container px-5 py-24 mx-auto",children:Object(b.jsxs)("div",{className:"lg:w-4/5 mx-auto flex flex-wrap",children:[Object(b.jsx)("img",{alt:"ecommerce",className:"lg:w-1/2 w-full object-contain object-center  border border-gray-200 rounded-3xl shadow-lg",src:z,style:{height:"700px"}}),Object(b.jsxs)("div",{className:"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",children:[Object(b.jsx)("h2",{className:"text-sm title-font text-gray-500 tracking-widest uppercase",children:S.join(", ")}),Object(b.jsx)("h1",{className:"text-gray-900 text-3xl title-font font-medium mb-1",children:k}),Object(b.jsxs)("div",{className:"flex mb-4",children:[Object(b.jsxs)("span",{className:"flex items-center",children:[Object(b.jsx)(q.a,{size:30,value:N,edit:!1,isHalf:!0}),Object(b.jsx)("span",{className:"text-gray-600 ml-3",children:"".concat(D,D>1?" reviews":" review")})]}),Object(b.jsx)("span",{className:"flex ml-3 pl-3 py-2 border-l-2 border-gray-200",children:L})]}),Object(b.jsx)("p",{className:"leading-relaxed",children:C}),Object(b.jsxs)("div",{className:"flex items-center mt-4",children:[Object(b.jsxs)("p",{className:"leading-relaxed py-2",children:[T," min"]}),Object(b.jsx)("p",{className:"leading-relaxed ml-3 pl-3 py-2 border-l-2 border-gray-200",children:w}),Object(b.jsx)("p",{className:"leading-relaxed ml-3 pl-3 py-2 border-l-2 border-gray-200",children:A?"Mayores de 18 a\xf1os":"Todo p\xfablico"})]}),Object(b.jsx)("div",{className:"flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"}),Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsxs)(j,{onClick:function(){return i("/home")},children:[Object(b.jsx)(M.a,{size:20,className:"mr-2"}),"Regresar"]}),Object(b.jsx)(j,{onClick:"admin"===a?function(){return i("/movie/edit/".concat(r))}:function(){return v(!0)},children:"admin"===a?"Editar":"Calificar"})]})]})]})})]})},D=function(e){var t=e.setToken,a=e.type;return Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/home",element:Object(b.jsx)(f,{setToken:t,type:a})}),Object(b.jsx)(o.b,{path:"/movie/:idMovie",element:Object(b.jsx)(A,{type:a})}),Object(b.jsx)(o.b,{path:"/movie/new",element:Object(b.jsx)(L,{})}),Object(b.jsx)(o.b,{path:"/movie/edit/:idMovie",element:Object(b.jsx)(L,{})}),Object(b.jsx)(o.b,{path:"*",element:Object(b.jsx)(o.a,{to:"/home"})})]})},E=function(){return Object(b.jsx)("div",{className:"w-8 h-8 border-4 border-white rounded-full loader"})},I=function(e){var t=e.children,a=e.loading;return Object(b.jsx)("button",{type:"submit",disabled:a,className:"w-full h-12 rounded-lg bg-blue-600  uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4 flex items-center justify-center",children:a?Object(b.jsx)(E,{}):t})},_=function(e){var t=e.type,a=void 0===t?"text":t,c=e.name,n=e.placeholder,l=e.onChange;return Object(b.jsx)("input",{type:a,name:c,onChange:l,className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",placeholder:n})},P=function(e){var t=e.label,a=e.path,c=e.link;return Object(b.jsxs)("p",{className:"text-right mb-4",children:[t," ",Object(b.jsx)(r.b,{to:a,className:"text-blue-500 hover:text-blue-700 font-semibold",children:c})]})},U=function(e){var t=e.setToken,a=Object(c.useState)({email:"",password:""}),n=Object(s.a)(a,2),l=n[0],r=n[1],o=Object(c.useState)(!1),i=Object(s.a)(o,2),j=i[0],u=i[1],m=function(e){var t=e.target,a=t.name,c=t.value;r(Object(g.a)(Object(g.a)({},l),{},Object(O.a)({},a,c)))};return Object(b.jsx)("div",{className:"w-full h-screen flex items-center justify-center bg-gray-800",children:Object(b.jsxs)("form",{className:"bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center",onSubmit:function(e){e.preventDefault(),u(!0),d.a.post("".concat(p,"/usuarios/login"),l).then((function(e){var a=e.data.token;u(!1),t(a)})).catch((function(e){console.log(e),u(!1)}))},children:[Object(b.jsxs)("label",{className:"font-light text-4xl mb-4",children:["Movie ",Object(b.jsx)("span",{className:"font-bold",children:"APP"})]}),Object(b.jsx)(_,{type:"email",name:"email",placeholder:"Email",onChange:m}),Object(b.jsx)(_,{type:"password",name:"password",placeholder:"Password",onChange:m}),Object(b.jsx)(I,{loading:j,children:"Login"}),Object(b.jsx)(P,{label:"Need an account?",path:"/auth/register",link:"Create an account"})]})})},B=function(e){var t=e.setToken,a=Object(c.useState)({name:"",email:"",password:""}),n=Object(s.a)(a,2),l=n[0],r=n[1],o=Object(c.useState)(!1),i=Object(s.a)(o,2),j=i[0],u=i[1],m=function(e){var t=e.target,a=t.name,c=t.value;r(Object(g.a)(Object(g.a)({},l),{},Object(O.a)({},a,c)))};return Object(b.jsx)("div",{className:"w-full h-screen flex items-center justify-center bg-gray-800",children:Object(b.jsxs)("form",{className:"bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center",onSubmit:function(e){e.preventDefault(),u(!0),d.a.post("".concat(p,"/usuarios/register"),l).then((function(e){var a=e.data.token;u(!1),t(a)})).catch((function(e){console.log(e),u(!1)}))},children:[Object(b.jsxs)("label",{className:"font-light text-4xl mb-4",children:["Movie ",Object(b.jsx)("span",{className:"font-bold",children:"APP"})]}),Object(b.jsx)(_,{placeholder:"Fullname",name:"name",onChange:m}),Object(b.jsx)(_,{type:"email",placeholder:"Email",name:"email",onChange:m}),Object(b.jsx)(_,{type:"password",placeholder:"Password",name:"Password",onChange:m}),Object(b.jsx)(I,{loading:j,children:"Register"}),Object(b.jsx)(P,{label:"Already have an account?",path:"/auth/login",link:"Log In"})]})})},G=function(e){var t=e.setToken;return Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/auth/login",element:Object(b.jsx)(U,{setToken:t})}),Object(b.jsx)(o.b,{path:"/auth/register",element:Object(b.jsx)(B,{setToken:t})}),Object(b.jsx)(o.b,{path:"*",element:Object(b.jsx)(o.a,{to:"/auth/login"})})]})},V=function(e){var t=e.setToken,a=e.type;return Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/home",element:Object(b.jsx)(f,{setToken:t,type:a})}),Object(b.jsx)(o.b,{path:"/movie/:idMovie",element:Object(b.jsx)(A,{})}),Object(b.jsx)(o.b,{path:"*",element:Object(b.jsx)(o.a,{to:"/home"})})]})},F=a(24),H=function(){var e=Object(c.useState)(localStorage.getItem("token")||null),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(null),o=Object(s.a)(l,2),i=o[0],d=o[1];return Object(c.useEffect)((function(){if(a){localStorage.setItem("token",a);var e=Object(F.a)(a).userType;d(e)}else d(null)}),[a]),Object(b.jsxs)(r.a,{children:["admin"===i&&Object(b.jsx)(D,{setToken:n,type:i}),"user"===i&&Object(b.jsx)(V,{setToken:n,type:i}),!a&&Object(b.jsx)(G,{setToken:n})]})};l.a.render(Object(b.jsx)(H,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d0793135.chunk.js.map