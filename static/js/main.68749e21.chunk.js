(this["webpackJsonpnorthwind-redux"]=this["webpackJsonpnorthwind-redux"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(26),o=a.n(c),u=a(19),l=a(9),i=a(122),d=a(13),m=a(14),s=a(17),p=a(16),E=a(15),h=a(107),f=a(108),v=a(62),y=a(11);function g(e){return{type:"ADD_TO_CART",payload:e}}function b(e){return{type:"REMOVE_FROM_CART",payload:e}}var C=a(27),O=a.n(C),j=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"removeFromCart",value:function(e){this.props.actions.removeFromCart(e),O.a.error(e.productName+"  Sepetten Silindi \ud83e\udde8\ud83e\udde8...")}},{key:"renderEmpty",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,n.a.createElement(h.a,{color:"danger"},"Sepetiniz Bo\u015f")))}},{key:"renderCartDetail",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(f.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"\xdcr\xfcn Ad\u0131"),n.a.createElement("th",null,"\xdcr\xfcn Fiyat\u0131"),n.a.createElement("th",null,"Miktar"),n.a.createElement("th",null))),n.a.createElement("tbody",null,this.props.cart.map((function(t){return n.a.createElement("tr",{key:t.product.id},n.a.createElement("th",{scope:"row"},t.product.id),n.a.createElement("td",null,t.product.productName),n.a.createElement("td",null,t.product.unitPrice),n.a.createElement("td",null,t.quantity),n.a.createElement("td",null,n.a.createElement(v.a,{color:"danger",onClick:function(){return e.removeFromCart(t.product)}},"Sil")))})))))}},{key:"render",value:function(){return n.a.createElement("div",null,this.props.cart.length>0?this.renderCartDetail():this.renderEmpty())}}]),a}(r.Component);var S=Object(E.b)((function(e){return{cart:e.cartReducer}}),(function(e){return{actions:{removeFromCart:Object(y.b)(b,e)}}}))(j),k=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Sayfa Bulunamad\u0131"))}}]),a}(r.Component),R=a(34),P=a(112),N=a(113),T=a(114),w=a(115),_=a(116),A=a(109),U=a(110),D=a(117),I=a(123),x=a(124),F=a(125),G=a(111),B=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"removeFromCart",value:function(e){this.props.actions.removeFromCart(e),O.a.error(e.productName+"  Sepetten Silindi \ud83e\udde8\ud83e\udde8...")}},{key:"renderEmpty",value:function(){return n.a.createElement(A.a,null,n.a.createElement(U.a,{href:"/cart"},n.a.createElement(v.a,{color:"danger"},"Sepetiniz Bo\u015f")))}},{key:"renderSummary",value:function(){var e=this;return n.a.createElement(I.a,{nav:!0,inNavbar:!0},n.a.createElement(x.a,{nav:!0,caret:!0},n.a.createElement(v.a,{color:"success"},"Sepetiniz")),n.a.createElement(F.a,{right:!0},this.props.cart.map((function(t){return n.a.createElement(G.a,{key:t.productId},n.a.createElement(h.a,{color:"danger",onClick:function(){return e.removeFromCart(t.product)}},"X"),n.a.createElement(h.a,{color:"warning"},t.product.productName),n.a.createElement(h.a,{color:"success"},t.quantity))})),n.a.createElement(G.a,{divider:!0}),n.a.createElement(G.a,null,n.a.createElement(u.c,{to:"/cart"},n.a.createElement(h.a,{color:"info"},"Sepete Git")))))}},{key:"render",value:function(){return n.a.createElement("div",null,this.props.cart.length>0?this.renderSummary():this.renderEmpty())}}]),a}(r.Component);var M=Object(E.b)((function(e){return{cart:e.cartReducer}}),(function(e){return{actions:{removeFromCart:Object(y.b)(b,e)}}}))(B),q=function(e){var t=Object(r.useState)(!1),a=Object(R.a)(t,2),c=a[0],o=a[1];return n.a.createElement("div",null,n.a.createElement(P.a,{color:"light",light:!0,expand:"md"},n.a.createElement(N.a,null,n.a.createElement(u.c,{to:"/"},n.a.createElement("h4",null,"Northwind Project"))),n.a.createElement(T.a,{onClick:function(){return o(!c)}}),n.a.createElement(w.a,{isOpen:c,navbar:!0},n.a.createElement(_.a,{className:"mr-auto",navbar:!0},n.a.createElement(A.a,null,n.a.createElement(U.a,{href:"/Menu"}," ",n.a.createElement(v.a,{color:"success"},"Ana Men\xfc"))),n.a.createElement(M,null)),n.a.createElement(D.a,null,n.a.createElement(v.a,{color:"success"},n.a.createElement(u.c,{to:"/saveproduct"},"\xdcr\xfcn Ekle"))))))},L=a(38),z=a(20),H=a(68);function J(e){return{type:"CHANGE_CATEGORY",payload:e}}function K(){return function(e){return fetch("http://localhost:3000/categories").then((function(e){return e.json()})).then((function(t){return e({type:"GET_CATEGORIES_SUCCESS",payload:t})}))}}var V=a(47),W=a.n(V),Y=a(65);function X(e){return $.apply(this,arguments)}function $(){return($=Object(Y.a)(W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:return e.next=4,t.text();case 4:throw a=e.sent,new Error(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){throw console.log("Bir hata olu\u015ftu..."),e}function Z(e){return function(t){var a="http://localhost:3000/products";return e&&(a=a+"?categoryId="+e),fetch(a).then((function(e){return e.json()})).then((function(e){return t({type:"GET_PRODUCTS_SUCCESS",payload:e})}))}}var ee=function(e){var t=e.name,a=e.label,r=e.onChange,c=e.defaultOptions,o=e.value,u=e.error,l=e.options;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFom:t},a),n.a.createElement("select",{name:t,value:o,onChange:r,className:"form-control"},n.a.createElement("option",{value:""},c),l.map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.text)}))),u&&n.a.createElement("div",{className:"alert alert-danger"},u))},te=function(e){var t=e.name,a=e.label,r=e.onChange,c=e.placeHolder,o=e.value,u=e.error,l="form-group";return u&&u.length>0&&(l+=" has-error"),n.a.createElement("div",{className:l},n.a.createElement("label",{htmlFom:t},a),n.a.createElement("div",{className:"field"},n.a.createElement("input",{type:"text",name:t,className:"form-control",placeholder:c,value:o,onChange:r}),u&&n.a.createElement("div",{className:"alert alert-danger"},u)))},ae=function(e){var t=e.categories,a=e.product,r=e.onSave,c=e.onChange,o=e.errors;return n.a.createElement("form",{onSubmit:r},n.a.createElement("h2",null,a.id?"G\xfcncelle":"Ekle"),n.a.createElement(te,{name:"productName",label:"Product Name",value:a.productName,onChange:c,error:o.productName}),n.a.createElement(ee,{name:"categoryId",className:"Category",label:"Kategori",value:a.categoryId||"",defaultOptions:"Se\xe7ininz",options:t.map((function(e){return{value:e.id,text:e.categoryName}})),onChange:c,error:o.categoryId}),n.a.createElement(te,{name:"unitPrice",label:"Fiyat",value:a.unitPrice,onChange:c,error:o.unitPrice}),n.a.createElement(te,{name:"quantityPerUnit",label:"Birim Adeti",value:a.quantityPerUnit,onChange:c,error:o.quantityPerUnit}),n.a.createElement(te,{name:"unitsInStock",label:"Stoktaki Birim Adeti",value:a.unitsInStock,onChange:c,error:o.unitInStock}),n.a.createElement("button",{type:"submit",className:"btn btn-success"},"Kaydet"))};var re={getCategories:K,saveProduct:function(e){return function(t){return function(e){return fetch("http://localhost3000/products/"+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(X).catch(Q)}(e).then((function(a){e.id?t(function(e){return{type:"UPDATE_PRODUCT_SUCCESS",payload:e}}(a)):t(function(e){return{type:"CREATE_PRODUCT_SUCCESS",payload:e}}(a))})).catch((function(e){throw e}))}}},ne=Object(E.b)((function(e,t){var a=t.match.params.productId;return{product:a&&e.productListReducer.length>0?function(e,t){return e.find((function(e){return e.id==t}))||null}(e.productListReducer,a):{},products:e.productListReducer,categories:e.categoryListReducer}}),re)((function(e){e.products;var t=e.categories,a=(e.getProducts,e.getCategories),c=e.saveProduct,o=e.history,u=Object(H.a)(e,["products","categories","getProducts","getCategories","saveProduct","history"]),l=Object(r.useState)(Object(z.a)({},u.product)),i=Object(R.a)(l,2),d=i[0],m=i[1],s=Object(r.useState)({}),p=Object(R.a)(s,2),E=p[0],h=p[1];return Object(r.useEffect)((function(){0===t.length&&a(),m(Object(z.a)({},u.product))}),[u.product]),n.a.createElement(ae,{product:d,categories:t,onChange:function(e){var t=e.target,a=t.name,r=t.value;m((function(e){return Object(z.a)(Object(z.a)({},e),{},Object(L.a)({},a,"categoryId"===a?parseInt(r,10):r))})),function(e,t){h("productName"==e&&""===t?function(e){return Object(z.a)(Object(z.a)({},e),{},{productName:"\xdcr\xfcn Ismi Olmal\u0131d\u0131r."})}:function(e){return Object(z.a)(Object(z.a)({},e),{},{productName:""})})}(a,r)},onSave:function(e){e.preventDefault(),c(d).then((function(){o.push("/")}))},errors:E})})),ce=a(120),oe=a(121),ue=a(118),le=a(119),ie=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).selectcategory=function(t){e.props.actions.changeCategory(t),e.props.actions.getProducts(t.id)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.getCategories()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h3",null,n.a.createElement(h.a,{color:"primary"},"Kategoriler")),n.a.createElement(ue.a,null,this.props.categories.map((function(t){return n.a.createElement(le.a,{active:t.id===e.props.currentCategory.id,onClick:function(){return e.selectcategory(t)},key:t.id},n.a.createElement(v.a,{color:"success"},t.categoryName))}))))}}]),a}(r.Component);var de=Object(E.b)((function(e){return{currentCategory:e.changeCategoryReducer,categories:e.categoryListReducer}}),(function(e){return{actions:{getCategories:Object(y.b)(K,e),changeCategory:Object(y.b)(J,e),getProducts:Object(y.b)(Z,e)}}}))(ie),me=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).addToCart=function(t){e.props.actions.addToCart({quantity:1,product:t}),O.a.success(t.productName+"  Sepete Eklendi \ud83c\udf88\ud83c\udf89\u2728\ud83c\udf87...")},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.getProducts()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(h.a,{color:"warning"},"\xdcr\xfcnler"),n.a.createElement(h.a,{color:"success"},this.props.currentCategory.categoryName),n.a.createElement(f.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"\xdcr\xfcn Ad\u0131"),n.a.createElement("th",null,"\xdcr\xfcn Fiyat\u0131"),n.a.createElement("th",null,"Birim Adedi"),n.a.createElement("th",null,"Stoktaki Birim Adedi"),n.a.createElement("th",null))),n.a.createElement("tbody",null,this.props.products.map((function(t){return n.a.createElement("tr",{key:t.id},n.a.createElement("th",{scope:"row"},t.id),n.a.createElement("td",null,n.a.createElement(u.c,{to:"/saveproduct/"+t.id},t.productName)," "),n.a.createElement("td",null,t.unitPrice),n.a.createElement("td",null,t.quantityPerUnit),n.a.createElement("td",null,t.unitsInStock),n.a.createElement("td",null,n.a.createElement(v.a,{color:"success",onClick:function(){return e.addToCart(t)}},"Ekle")))})))))}}]),a}(r.Component);var se=Object(E.b)((function(e){return{currentCategory:e.changeCategoryReducer,products:e.productListReducer}}),(function(e){return{actions:{getProducts:Object(y.b)(Z,e),addToCart:Object(y.b)(g,e)}}}))(me),pe=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(ce.a,null,n.a.createElement(oe.a,{xs:"3"},n.a.createElement(de,null)),n.a.createElement(oe.a,{xs:"9"},n.a.createElement(se,null))))}}]),a}(r.Component);var Ee=function(){return n.a.createElement(u.b,{basename:"/"},n.a.createElement(i.a,null,n.a.createElement(q,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:pe}),n.a.createElement(l.a,{path:"/product",component:pe}),n.a.createElement(l.a,{path:"/Menu",component:pe}),n.a.createElement(l.a,{path:"/cart",component:S}),n.a.createElement(l.a,{path:"/saveproduct/:productId",component:ne}),n.a.createElement(l.a,{path:"/saveproduct",component:ne}),n.a.createElement(l.a,{exact:!0,component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(104);var he={currentCategory:{},categories:[],products:[],cart:[],saveProduct:[]};var fe=a(67);var ve=Object(y.c)({changeCategoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.currentCategory,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CATEGORY":return t.payload;default:return e}},categoryListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.categories,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES_SUCCESS":return t.payload;default:return e}},productListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.products,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return t.payload;default:return e}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.cart,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.find((function(e){return e.product.id===t.payload.product.id}));if(a){var r=e.map((function(e){return e.product.id===t.payload.product.id?Object.assign({},a,{quantity:a.quantity+1}):e}));return r}return[].concat(Object(fe.a)(e),[Object(z.a)({},t.payload)]);case"REMOVE_FROM_CART":var n=e.filter((function(e){return e.product.id!==t.payload.id}));return n;default:return e}},saveProductReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.saveProduct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCT_SUCCESS":case"CREATE_PRODUCT_SUCCESS":return t.payload;default:return e}}}),ye=a(66);a(105);var ge=Object(y.d)(ve,Object(y.a)(ye.a));o.a.render(n.a.createElement(u.a,{basename:"fronEnd-Dev/"},n.a.createElement(E.a,{store:ge},n.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(106)}},[[69,1,2]]]);
//# sourceMappingURL=main.68749e21.chunk.js.map